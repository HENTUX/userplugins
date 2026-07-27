<p align="center">
  <img src="https://i.imgur.com/ZCqStJC.png" width="400">
</p>

<h1 align="center">
  <img src="https://i.imgur.com/H5Jh1BW.png" width="30">
  AtlasX #TheRealGod1337 Userplugins
</h1>

<p align="center">
  <a href="https://guns.lol/ovd">
    <img src="https://img.shields.io/badge/Portfolio-guns.lol/ovd-blueviolet?style=for-the-badge" alt="Portfolio">
  </a>
  <a href="https://github.com/HENTUX/AtlasXCORD">
    <img src="https://img.shields.io/badge/AtlasXCORD-Source-blue?style=for-the-badge" alt="AtlasXCORD Source">
  </a>
</p>

<p align="center">168 custom plugins for Equicord/AtlasXCORD + source patches</p>

---

## Install

### Quick (with AtlasC2 Patcher)
1. Go to [AtlasXCORD](https://github.com/HENTUX/AtlasXCORD) and download `AtlasC2.exe`
2. Close Discord completely (check system tray!)
3. Run `AtlasC2.exe` -> Select Discord -> Install
4. Reopen Discord

### Manual
```bash
git clone https://github.com/HENTUX/userplugins.git
```
1. Copy `userplugins/*` into your Equicord/AtlasXCORD `src/userplugins/` folder
2. Copy source patches to their respective locations
3. Build and install:
```bash
pnpm build desktop
npx @electron/asar pack "dist/desktop" "app.asar"
```

---

## Source Patches

| Patch | Description |
|-------|-------------|
| `messagePopover.ts` | Fixed regex for popover buttons |
| `git.ts` | Fixed git updater asar detection |
| `settings.ts` | Added removeHandler guards before ipcMain.handle |
| `patcher.ts` | Double-load guard with `__VENCORD_PATCHER_LOADED__` |

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
| `ZeroWidthSanitizer` | `_micProEngine` | |

---

## Credits
- [Equicord](https://github.com/Equicord/Equicord) - The base mod
- [Vencord](https://github.com/Vendicated/Vencord) - Original inspiration
- [AtlasXCORD](https://github.com/HENTUX/AtlasXCORD) - Full source with all plugins
