# Personal Site Design Lab

Personal portfolio prototype with a data-driven theme system. The active default is `After Hours`, with five alternate templates kept available in code.

## Preview

```bash
npm run dev
```

Open `http://localhost:4173`.

## Build

```bash
npm run build
```

The build writes a static deployable site to `dist/`.

The public theme switcher is disabled by default with `showThemeLab = false` in `src/site-data.ts`.

To swap the deployed theme, change `defaultThemeId` in `src/site-data.ts`.

To temporarily preview templates in development, set `showThemeLab = true`, then use the top-bar `Swap theme` control or a query parameter:

```bash
http://localhost:4173?theme=after-hours
http://localhost:4173?theme=field-notes
http://localhost:4173?theme=control-room
http://localhost:4173?theme=blueprint
http://localhost:4173?theme=studio-index
http://localhost:4173?theme=bento
```

## Source

The shared portfolio content lives in `src/site-data.ts`. The swappable templates live in `src/theme-renderers.ts`, and `src/app.ts` only handles the active theme and switcher.

After changing TypeScript-authored files, copy them to their browser-ready `.js` siblings:

```bash
cp src/site-data.ts src/site-data.js
cp src/theme-renderers.ts src/theme-renderers.js
cp src/app.ts src/app.js
npm run check
```
