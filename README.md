<p align="center">
  <img src="[https://cdn3.emoji.gg/emojis/754853-staff.png](https://i.imgur.com/mCAszJv.png)" width="400">
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

<p align="center">168 custom Equicord plugins + source patches + AtlasC2 patcher</p>

---

## Source Patches
| Patch | Description |
|-------|-------------|
| `messagePopover.ts` | Fixed regex for popover buttons |
| `git.ts` | Fixed git updater asar detection |
| `settings.ts` | Added removeHandler guards before ipcMain.handle |
| `patcher.ts` | Double-load guard with __VENCORD_PATCHER_LOADED__ |

---

## AtlasC2 Patcher

A rebranded fork of Equilotl - a cross-platform GUI/CLI patcher for Discord.

### Features
- GUI (.exe) and CLI (.exe) versions
- Patches Discord Stable, PTB, and Canary
- Auto-kills Discord processes before patching
- Handles file locks gracefully (copy fallback + reboot scheduling)
- Custom icons and branding
- Self-updating from GitHub releases

### Download
Download `AtlasC2.exe` (GUI) or `AtlasC2Cli.exe` (CLI) from this repository's releases or the `AtlasC2 AIO` folder.

### Usage
1. Close Discord completely (check system tray!)
2. Run `AtlasC2.exe` (GUI) or `AtlasC2Cli.exe` (CLI)
3. Select your Discord install
4. Click Install / Patch
5. Reopen Discord

### CLI Flags
```
--install       Install AtlasC2
--repair        Repair/reinstall AtlasC2
--uninstall     Uninstall AtlasC2
--location      Custom Discord install path
--branch        Discord branch [auto|stable|ptb|canary]
--update-self   Update the patcher itself
--version       Show version
--help          Show help
```

---

## Plugins (168)

| Plugin | Plugin | Plugin |
|--------|--------|--------|
| `AppleMusicRPC` | `Shazam` | `TraktRichPresence` |
| `VoiceChatMention` | `ViewMembersWithRole` | `autoDeleteDms` |
| `autoPingAll` | `avatarImageMenu` | `bannersEverywhereFocusPause` |
| `bd_accountswitcher` | `bd_usernamehistory` | `bd_yabdp4nitro` |
| `BetterInbox` | `BigFileUploadEnhanced` | `blacklist` |
| `Boo` | `botRoleColor` | `channelScratchpad` |
| `characterCounterEnhanced` | `christmasCounter` | `completeDiscordQuest` |
| `ConsoleWatcher` | `crashHandlerEnhanced` | `customPluginsUpdater` |
| `customServerBanners` | `CustomStreamPreview` | `customUserCommands` |
| `deleteExportMessages` | `DirectMessageOpener` | `DiscordArabicizer` |
| `discordDevBanner` | `discordLyricsSpotifyStatus` | `dynamicChannelBackground` |
| `EmbedBuilder` | `esharqDiagnostics` | `Fake-Def` |
| `fakeProfile` | `fakeServerBoost` | `fixupSocialEmbeds` |
| `followGod` | `FriendFreaky` | `GalleryMode` |
| `guildCopier` | `laisse` | `localChannelAliases` |
| `localMessageEditor` | `MediaScroller` | `messageCleaner` |
| `messageKeeper` | `multiInstance` | `NitroSniper` |
| `noDefaultHangStatus` | `notifyUserChanges` | `passwordManager` |
| `PerformanceBoost` | `personalBadges` | `PlatformEmulator` |
| `prettyChannelNames` | `RPCStats` | `screenShareDevices` |
| `SelfBot` | `selfDestruct` | `Signature` |
| `silentDelete` | `SilentEdit` | `slowmodeAssistant` |
| `soundboardGod` | `soundboardPermissionsBypass.web` | `SpotifyRichPresencePP` |
| `streamWatcherIndicator` | `TempMessage` | `TokenCopier` |
| `tokenLogin` | `tosuRpc` | `UltimateProfileBadgeEditor` |
| `userPfpServerAvatarFix` | `vAnalyzer` | `vc-junkCleanup` |
| `viewRawEnhanced` | `voiceChannelLogger` | `VoiceChatMention` |
| `YoutubeRPC` | `antiDeleteMessage` | `antiNickname` |
| `audioLimiter` | `autonickname` | `autoUnmute` |
| `autoVaporwave` | `avatarGrabber` | `betterScreenshare.desktop` |
| `boldText` | `calendar` | `channelWallpaper` |
| `clapText` | `clickSparkles` | `compactCompose` |
| `crtEffect` | `deepsearch` | `define` |
| `doNotLeak` | `doubleEmoji` | `DynamicIslande` |
| `fakeAccount` | `fakeDeafen` | `fakeDM` |
| `fakeFriends` | `fakePerm` | `fastDiscord` |
| `fastPFP` | `fastPing` | `fixScreenshare` |
| `friendsInVoice` | `gifConvertor` | `glassPanels` |
| `gridFloor` | `lastOnlineTracker` | `lazyMessageRender` |
| `leetText` | `liveWallpaper` | `lyricsStatus` |
| `memberListExport` | `messageStatistics` | `MetadataViewer` |
| `MicPro` | `myBadges` | `myToken` |
| `neonGlow` | `noDMWhileStreaming` | `noTelemetry` |
| `pastelMentions` | `philsPluginLibrary` | `pollMaker` |
| `profanityFilter` | `ProfileVisibility` | `quietHours` |
| `readableSpoilers` | `realtimeTimestamps` | `recentChannelSwitcher` |
| `scamLinkDetector` | `shipCalc` | `showID` |
| `silentGroupCall` | `smallCaps` | `smartBidi` |
| `smoothmessages` | `smoothType` | `soundcloudRichPresence` |
| `spaceOut` | `SpoofMessage` | `starfield` |
| `starify` | `streamProof` | `summarizeAI` |
| `sunsetChat` | `tempMail` | `textScreenshot` |
| `tsunderetalk` | `vaporScrollbar` | `vaporwaveText` |
| `vibeCheck` | `voiceChannelSearch` | `voiceGuard` |
| `voiceSettings` | `WebCordHardened` | `wikiLookup` |
| `ZeroWidthSanitizer` | `antiDeleteMessage` | `_micProEngine` |

---

## Install

### Quick (with AtlasC2 Patcher)
1. Download `AtlasC2.exe` from this repo
2. Run it with Discord closed
3. Done!

### Manual
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

---

## Credits
- [Equicord](https://github.com/Equicord/Equicord) - The base mod
- [Vencord](https://github.com/Vendicated/Vencord) - Original inspiration
- [Equilotl](https://github.com/Equicord/Equilotl) - Original patcher (rebranded to AtlasC2)
