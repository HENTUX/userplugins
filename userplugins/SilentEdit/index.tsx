/*
 * SilentEdit - Edit messages without the edit tag showing
 * PATCH original → new content, intercept MESSAGE_UPDATE to strip edit tag
 * Uses modal for input — no textarea hacking
 */

import { addMessagePopoverButton as addButton, removeMessagePopoverButton as removeButton } from "@api/MessagePopover";
import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, Constants, FluxDispatcher, MessageStore, Modal, openModal, React, RestAPI, UserStore } from "@webpack/common";

const settings = definePluginSettings({
    interceptAllEdits: {
        type: OptionType.BOOLEAN,
        description: "Silently edit EVERY message you edit through Discord's normal edit flows.",
        default: false
    },
    accentColor: {
        type: OptionType.STRING,
        description: "Accent color for the icon.",
        default: "#ed4245"
    }
});

const SilentEditIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={settings.store.accentColor || "#ed4245"}>
        <path d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" />
    </svg>
);

const selfEditedMessageIds = new Set<string>();

function messageUpdateInterceptor(event: any) {
    if (event.type !== "MESSAGE_UPDATE") return;
    const msg = event.message;
    if (!msg) return;
    const id = String(msg.id);
    if (!selfEditedMessageIds.has(id)) return;
    if (msg.edited_timestamp != null) {
        msg.edited_timestamp = null;
        if (Array.isArray(msg.edits)) msg.edits.length = 0;
    }
}

async function silentEditMessage(channelId: string, messageId: string, newContent: string): Promise<boolean> {
    try {
        selfEditedMessageIds.add(String(messageId));
        await RestAPI.patch({
            url: Constants.Endpoints.MESSAGE(channelId, messageId),
            body: { content: newContent }
        });
        setTimeout(() => selfEditedMessageIds.delete(String(messageId)), 3000);
        return true;
    } catch (error) {
        console.error("[SilentEdit] Error:", error);
        selfEditedMessageIds.delete(String(messageId));
        return false;
    }
}

function EditModal({ onClose, message }: { onClose: () => void; message: any; }) {
    const [content, setContent] = React.useState(message.content || "");
    const [saving, setSaving] = React.useState(false);

    async function handleSubmit() {
        if (!content.trim() || content === message.content) {
            onClose();
            return;
        }
        setSaving(true);
        await silentEditMessage(message.channel_id, message.id, content);
        setSaving(false);
        onClose();
    }

    const textareaStyle: React.CSSProperties = {
        width: "100%",
        minHeight: "120px",
        padding: "10px",
        borderRadius: "6px",
        background: "var(--input-background)",
        border: "1px solid var(--background-modifier-accent)",
        color: "var(--text-normal)",
        fontSize: "14px",
        fontFamily: "var(--font-primary)",
        resize: "vertical" as const,
        boxSizing: "border-box" as const,
        outline: "none",
    };

    const labelStyle: React.CSSProperties = {
        fontWeight: "600",
        fontSize: "12px",
        marginBottom: "6px",
        display: "block",
        color: "var(--text-normal)",
        textTransform: "uppercase" as const,
    };

    return (
        <Modal {...{ onClose, transitionState: 0 }} className="vc-silentedit-modal">
            <div style={{ padding: "16px" }}>
                <div style={{ marginBottom: "16px" }}>
                    <h2 style={{ color: "var(--header-primary)", margin: 0, fontSize: "18px" }}>Silent Edit</h2>
                    <div style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "4px" }}>
                        Edit without showing the (edited) tag
                    </div>
                </div>

                <label style={labelStyle}>New Content</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    style={textareaStyle}
                    autoFocus
                />

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: "6px 16px",
                            borderRadius: "4px",
                            background: "var(--background-secondary)",
                            color: "var(--text-normal)",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={saving || !content.trim() || content === message.content}
                        style={{
                            padding: "6px 16px",
                            borderRadius: "4px",
                            background: content.trim() && content !== message.content ? settings.store.accentColor || "#ed4245" : "var(--background-secondary)",
                            color: "#fff",
                            border: "none",
                            cursor: saving ? "not-allowed" : "pointer",
                            fontSize: "14px",
                            opacity: saving || !content.trim() || content === message.content ? 0.5 : 1,
                        }}
                    >
                        {saving ? "Saving..." : "Save"}
                    </button>
                </div>
            </div>
        </Modal>
    );
}

function openEditModal(message: any) {
    openModal(props => <EditModal {...props} message={message} />);
}

export default definePlugin({
    name: "SilentEdit",
    description: "Edit messages without the edit tag. Click the icon to open edit modal.",
    authors: [{ name: "HENTUX", id: 0n }],
    dependencies: ["MessagePopoverAPI"],
    settings,

    async onBeforeMessageEdit(channelId, messageId, messageObj) {
        if (!settings.store.interceptAllEdits || !messageObj.content) return;
        const msg = MessageStore.getMessage(channelId, messageId);
        if (!msg || msg.author.id !== UserStore.getCurrentUser().id) return;
        const newContent = messageObj.content;
        if (newContent === msg.content) return;
        if (await silentEditMessage(channelId, messageId, newContent)) {
            return { cancel: true };
        }
    },

    start() {
        FluxDispatcher.addInterceptor(messageUpdateInterceptor);

        addButton("SilentEdit", msg => {
            if (msg.author.id !== UserStore.getCurrentUser().id) return null;
            return {
                label: "Silent Edit",
                icon: SilentEditIcon,
                message: msg,
                channel: ChannelStore.getChannel(msg.channel_id),
                onClick: () => openEditModal(msg),
            };
        }, SilentEditIcon);
    },

    stop() {
        removeButton("SilentEdit");
        const list = FluxDispatcher._interceptors ?? [];
        const idx = list.indexOf(messageUpdateInterceptor);
        if (idx !== -1) list.splice(idx, 1);
    }
});
