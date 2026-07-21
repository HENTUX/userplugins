# HENTUX Equicord Plugins

Custom plugins and fixes for Equicord.

## Quick Restore

```powershell
# Clone Equicord
git clone https://github.com/Equicord/Equicord
cd Equicord\Equicord

# Clone this repo
git clone https://github.com/HENTUX/HENTUX-Equicord-Plugins plugins-tmp

# Copy plugins
Copy-Item "plugins-tmp\userplugins\*" "src\userplugins\" -Recurse -Force
Copy-Item "plugins-tmp\messagePopover.ts" "src\plugins\_api\messagePopover.ts" -Force

# Install, build, pack
$env:CI="true"; pnpm install
pnpm build desktop
npx @electron/asar pack dist/desktop "C:\Users\GIGABYTE\AppData\Local\Discord\app-1.0.9249\resources\app.asar"

# Restart Discord
```

## Add New Plugin

```powershell
# Copy plugin to src\userplugins\
# Then rebuild:
cd Equicord\Equicord
pnpm build desktop
npx @electron/asar pack dist/desktop "C:\Users\GIGABYTE\AppData\Local\Discord\app-1.0.9249\resources\app.asar"
# Restart Discord
```

## Files

- `userplugins/` - 56 custom plugins
- `messagePopover.ts` - Fix for popover buttons (viewRaw, hideAttachments, etc.)
