<p align="center">
  <img src="https://cdn3.emoji.gg/emojis/754853-staff.png" width="400">
</p>

<h1 align="center">
  <img src="https://cdn3.emoji.gg/emojis/515228-staff.png" width="30">
  AtlasX #TheRealGod1337 Userplugins
</h1>

<p align="center">
  <a href="https://guns.lol/ovd">
    <img src="https://img.shields.io/badge/Portfolio-guns.lol/ovd-blueviolet?style=for-the-badge" alt="Portfolio">
  </a>
</p>

<p align="center">77 custom Equicord plugins + source patches</p>

---

## Source Patches
| Patch | Description |
|-------|-------------|
| `messagePopover.ts` | Fixed regex for popover buttons |
| `git.ts` | Fixed git updater asar detection |

---

## Plugins

| Plugin | Plugin | Plugin |
|--------|--------|--------|
| `AppleMusicRPC` | `autoDeleteDms` | `autoPingAll` |
| `avatarImageMenu` | `bannersEverywhereFocusPause` | `bd_accountswitcher` |
| `bd_usernamehistory` | `bd_yabdp4nitro` | `BetterInbox` |
| `BigFileUploadEnhanced` | `blacklist` | `Boo` |
| `botRoleColor` | `channelScratchpad` | `characterCounterEnhanced` |
| `christmasCounter` | `completeDiscordQuest` | `ConsoleWatcher` |
| `crashHandlerEnhanced` | `customPluginsUpdater` | `customServerBanners` |
| `CustomStreamPreview` | `customUserCommands` | `deleteExportMessages` |
| `DirectMessageOpener` | `DiscordArabicizer` | `discordDevBanner` |
| `discordLyricsSpotifyStatus` | `dynamicChannelBackground` | `EmbedBuilder` |
| `esharqDiagnostics` | `Fake-Def` | `fakeProfile` |
| `fakeServerBoost` | `fixupSocialEmbeds` | `followGod` |
| `FriendFreaky` | `GalleryMode` | `guildCopier` |
| `laisse` | `localChannelAliases` | `localMessageEditor` |
| `MediaScroller` | `messageCleaner` | `messageKeeper` |
| `multiInstance` | `NitroSniper` | `noDefaultHangStatus` |
| `notifyUserChanges` | `passwordManager` | `PerformanceBoost` |
| `personalBadges` | `PlatformEmulator` | `prettyChannelNames` |
| `RPCStats` | `screenShareDevices` | `SelfBot` |
| `selfDestruct` | `Signature` | `silentDelete` |
| `SilentEdit` | `slowmodeAssistant` | `soundboardGod` |
| `soundboardPermissionsBypass.web` | `SpotifyRichPresencePP` | `streamWatcherIndicator` |
| `TempMessage` | `TokenCopier` | `tokenLogin` |
| `tosuRpc` | `UltimateProfileBadgeEditor` | `userPfpServerAvatarFix` |
| `vAnalyzer` | `vc-junkCleanup` | `viewRawEnhanced` |
| `voiceChannelLogger` | `YoutubeRPC` | |

---

## Install
```bash
git clone https://github.com/HENTUX/userplugins.git
```
1. Copy `userplugins/*` into your Equicord `src/userplugins/` folder
2. Copy source patches to their respective locations
3. Build and install:
```bash
pnpm build desktop
npx @electron/asar pack "dist/desktop" "app.asar"
```
