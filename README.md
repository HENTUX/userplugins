# HENTUX Userplugins

77 custom Equicord plugins + source patches

## Source Patches
- `messagePopover.ts` - Fixed regex for popover buttons
- `git.ts` - Fixed git updater asar detection

## Plugins
- `AppleMusicRPC`
- `autoDeleteDms`
- `autoPingAll`
- `avatarImageMenu`
- `bannersEverywhereFocusPause`
- `bd_accountswitcher`
- `bd_usernamehistory`
- `bd_yabdp4nitro`
- `BetterInbox`
- `BigFileUploadEnhanced`
- `blacklist`
- `Boo`
- `botRoleColor`
- `channelScratchpad`
- `characterCounterEnhanced`
- `christmasCounter`
- `completeDiscordQuest`
- `ConsoleWatcher`
- `crashHandlerEnhanced`
- `customPluginsUpdater`
- `customServerBanners`
- `CustomStreamPreview`
- `customUserCommands`
- `deleteExportMessages`
- `DirectMessageOpener`
- `DiscordArabicizer`
- `discordDevBanner`
- `discordLyricsSpotifyStatus`
- `dynamicChannelBackground`
- `EmbedBuilder`
- `esharqDiagnostics`
- `Fake-Def`
- `fakeProfile`
- `fakeServerBoost`
- `fixupSocialEmbeds`
- `followGod`
- `FriendFreaky`
- `GalleryMode`
- `guildCopier`
- `laisse`
- `localChannelAliases`
- `localMessageEditor`
- `MediaScroller`
- `messageCleaner`
- `messageKeeper`
- `multiInstance`
- `NitroSniper`
- `noDefaultHangStatus`
- `notifyUserChanges`
- `passwordManager`
- `PerformanceBoost`
- `personalBadges`
- `PlatformEmulator`
- `prettyChannelNames`
- `RPCStats`
- `screenShareDevices`
- `SelfBot`
- `selfDestruct`
- `Signature`
- `silentDelete`
- `SilentEdit`
- `slowmodeAssistant`
- `soundboardGod`
- `soundboardPermissionsBypass.web`
- `SpotifyRichPresencePP`
- `streamWatcherIndicator`
- `TempMessage`
- `TokenCopier`
- `tokenLogin`
- `tosuRpc`
- `UltimateProfileBadgeEditor`
- `userPfpServerAvatarFix`
- `vAnalyzer`
- `vc-junkCleanup`
- `viewRawEnhanced`
- `voiceChannelLogger`
- `YoutubeRPC`


## Auto-Install
Copy `src/userplugins/*` into your Equicord `src/userplugins/` folder.
Copy source patches to their respective locations.
Run `pnpm build desktop` then `npx @electron/asar pack "dist/desktop" "app.asar"`.
