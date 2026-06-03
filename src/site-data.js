export const defaultThemeId = "after-hours";
export const showThemeLab = false;

export const siteData = {
  person: {
    name: "Stephen Shilale",
    initials: "SS",
    role: "Engineering Manager",
    company: "Xometry",
    companyUrl: "https://www.xometry.com/",
    previousCompany: "Crestron",
    previousCompanyUrl: "https://www.crestron.com/",
    headline: "I lead teams by day. Build worlds by night.",
    shortHeadline: "Engineering teams. Making things.",
    tagline:
      "Engineering manager at Xometry, 10+ year full-stack TypeScript developer, and indie maker of games, apps, bots, and home-lab systems.",
    intro:
      "In my day job, I help software teams ship well. Outside of work, I build multiplayer games, tiny utility apps, AI-assisted board-game tools, and the local infrastructure that keeps them running.",
    availability: "Open to engineering leadership conversations, indie-game chat, and swapping notes on useful side projects.",
    links: [
      { label: "GitHub", url: "https://github.com/sshilal1" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/stephen-shilale" },
    ],
  },
  stats: [
    { label: "Years building software", value: "10+" },
    { label: "Main stack + LLMs", value: "TS / React / Node" },
    { label: "Day job", value: "Xometry" },
  ],
  focusAreas: [
    "Engineering leadership",
    "Indie games",
    "React Native apps",
    "Fantasy sports tools",
    "Board-game systems",
    "Prediction tools",
    "Home-lab infrastructure",
  ],
  projects: [
    {
      id: "tepitch",
      name: "T-E-Pitch",
      type: "iOS card game",
      status: "Live on iOS",
      year: "2026",
      featured: true,
      href: "https://apps.apple.com/us/app/t-e-pitch/id6742805768",
      links: [{ label: "App Store", url: "https://apps.apple.com/us/app/t-e-pitch/id6742805768" }],
      summary:
        "A multiplayer trick-taking card game inspired by Euchre and Spades, with a production iOS app, real-time game server, shared game logic packages, auth, bots, and player stats.",
      impact:
        "Built the full product path from game rules to Expo/React Native app to cloud-hosted boardgame.io services.",
      tech: ["Expo", "React Native", "TypeScript", "boardgame.io", "Supabase", "PostgreSQL", "Redis"],
    },
    {
      id: "clean-slate-todo",
      name: "Clean Slate Todo",
      type: "Minimal todo app",
      status: "TestFlight beta",
      year: "2026",
      featured: true,
      href: "",
      links: [{ label: "GitHub", url: "https://github.com/sshilal1/clean-slate-todo" }],
      summary:
        "A calm, minimal task app built around keeping a clean slate instead of accumulating guilt-driven lists.",
      impact:
        "Focused on small-screen product polish, haptics, local persistence, and a deliberately restrained interaction model.",
      tech: ["Expo", "React Native", "TypeScript", "AsyncStorage", "TestFlight"],
    },
    {
      id: "terraforming-mars",
      name: "Terraforming Mars Custom Fork",
      type: "Board-game platform",
      status: "Live for friends",
      year: "Ongoing",
      featured: true,
      href: "https://shil-tfm.ddns.net/",
      links: [
        { label: "Live site", url: "https://shil-tfm.ddns.net/" },
        { label: "GitHub", url: "https://github.com/sshilal1/terraforming-mars" },
      ],
      summary:
        "A locally hosted fork of the open-source Terraforming Mars implementation, maintained for years with custom mods and additions for a friend group.",
      impact:
        "Runs through a home-network deployment path with reverse proxying, PM2 processes, and long-lived game state.",
      tech: ["TypeScript", "Vue", "Node", "PM2", "nginx", "Raspberry Pi"],
    },
    {
      id: "golf-draft-tracker",
      name: "Golf Majors Fantasy",
      type: "Fantasy golf website",
      status: "Live for friends",
      year: "2026",
      featured: true,
      href: "https://golf.shillex.us/",
      links: [
        { label: "Live site", url: "https://golf.shillex.us/" },
        { label: "GitHub", url: "https://github.com/sshilal1/golf-majors-fantasy" },
      ],
      summary:
        "A self-hosted fantasy golf league site for running majors drafts, tracking teams, and following live scoring with ESPN leaderboard data.",
      impact:
        "Built snake-draft flows, per-round scoring, live leaderboard refreshes, admin tools, GroupMe draft notifications, and a Raspberry Pi deployment.",
      tech: ["React", "Vite", "TypeScript", "Node", "Express", "SQLite", "ESPN API", "PM2"],
    },
    {
      id: "tfm-friend-bot",
      name: "tfm-friend-bot",
      type: "Move predictor",
      status: "In progress",
      year: "2026",
      featured: false,
      href: "",
      summary:
        "A move predictor for Terraforming Mars trained and tuned around hundreds of historical games played by me and friends.",
      impact:
        "Combines heuristic replay, local LLMs, hosted LLMs, player profiles, and a React/Vite interface for comparing predictions.",
      tech: ["Fastify", "TypeScript", "SQLite", "Ollama", "OpenAI", "Anthropic", "React", "Vite"],
    },
    {
      id: "ancient-wonders",
      name: "Ancient Wonders",
      type: "Async board game",
      status: "In progress",
      year: "Coming soon",
      featured: false,
      href: "",
      summary:
        "A mobile-friendly asynchronous web version of a Seven Wonders-style drafting game, built with original presentation and online play in mind.",
      impact:
        "Implements simultaneous draft flow, persistence, join codes, lobbies, and spectator-friendly game routes.",
      tech: ["React", "Vite", "TypeScript", "Express", "SQLite", "Tailwind"],
    },
    {
      id: "home-lab",
      name: "Home Lab + Local Network",
      type: "Infrastructure",
      status: "Always evolving",
      year: "Ongoing",
      featured: false,
      href: "",
      summary:
        "A personal network of local devices serving apps, routing traffic, running game servers, and experimenting with local LLM workflows.",
      impact:
        "Three-device setup with reverse proxying, WireGuard, Raspberry Pi services, local hosting, and cloud handoff for production T-E-Pitch servers.",
      tech: ["nginx", "WireGuard", "PM2", "Cloudflare", "Docker", "Ollama", "Raspberry Pi"],
    },
  ],
  timeline: [
    {
      label: "Current role",
      title: "Engineering manager at Xometry",
      url: "https://www.xometry.com/",
      body: "Leading software teams at Xometry, an AI-powered marketplace connecting buyers with manufacturing suppliers for custom and on-demand parts.",
    },
    {
      label: "Previous role",
      title: "Firmware engineer at Crestron",
      url: "https://www.crestron.com/",
      body: "Built firmware for audio/video devices at Crestron, whose technology spans video conferencing, digital content distribution, smart home, control, and management systems.",
    },
    {
      label: "By night",
      title: "Indie developer",
      body: "Building games and apps because making playful, useful software is still the part that feels like electricity.",
    },
    {
      label: "Always",
      title: "Systems tinkerer",
      body: "Running local services, game servers, bots, and LLM experiments across a home network that doubles as a personal lab.",
    },
  ],
};
