<p align="center">
  <img src="https://cdn3.emoji.gg/emojis/252073-bluestaffbadge.png" width="120" alt="Logo"/>
</p>

<h1 align="center">Equicord Userplugins</h1>

<p align="center">
  Custom plugins and fixes for Equicord Discord client.
</p>

<p align="center">
  <a href="https://guns.lol/ovd">guns.lol/ovd</a>
</p>

---

## Quick Restore

```powershell
git clone https://github.com/Equicord/Equicord
cd Equicord\Equicord

git clone https://github.com/HENTUX/userplugins.git plugins-tmp

Copy-Item "plugins-tmp\userplugins\*" "src\userplugins\" -Recurse -Force
Copy-Item "plugins-tmp\messagePopover.ts" "src\plugins\_api\messagePopover.ts" -Force

$env:CI="true"; pnpm install
pnpm build desktop
npx @electron/asar pack dist/desktop "$env:LOCALAPPDATA\Discord\app-1.0.9249\resources\app.asar"

Restart Discord
```

## Add New Plugin

```powershell
Copy-Item "PluginFolder" "src\userplugins\" -Recurse
cd Equicord\Equicord
pnpm build desktop
npx @electron/asar pack dist/desktop "$env:LOCALAPPDATA\Discord\app-1.0.9249\resources\app.asar"
Restart Discord
```

## Plugins (56)

autoDeleteDms, bannersEverywhereFocusPause, bd_accountswitcher, bd_usernamehistory, bd_yabdp4nitro, BetterInbox, BigFileUploadEnhanced, blacklist, Boo, botRoleColor, channelScratchpad, christmasCounter, completeDiscordQuest, ConsoleWatcher, customPluginsUpdater, customServerBanners, CustomStreamPreview, customUserCommands, DiscordArabicizer, discordDevBanner, discordLyricsSpotifyStatus, dynamicChannelBackground, esharqDiagnostics, Fake-Def, fakeProfile, fakeServerBoost, followGod, FriendFreaky, guildCopier, laisse, localChannelAliases, messageCleaner, multiInstance, NitroSniper, noDefaultHangStatus, notifyUserChanges, passwordManager, PerformanceBoost, personalBadges, PlatformEmulator, prettyChannelNames, RPCStats, screenShareDevices, selfDestruct, silentDelete, SilentEdit, slowmodeAssistant, soundboardGod, streamWatcherIndicator, TempMessage, tokenLogin, tosuRpc, userPfpServerAvatarFix, vAnalyzer, voiceChannelLogger, YoutubeRPC
