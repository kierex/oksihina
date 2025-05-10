<p align="center">
  <img src="./utils/cyberpunk.gif" alt="Image description" />
</p>


# KagenouBot V3 This is Beta Teaser - The Seven Shadows

Welcome to **KagenouBot V3**, an elite Facebook Messenger bot inspired by *The Eminence in Shadow*. This multi-system bot is built with flexibility, speed, and customization in mind. Featuring unique command systems like **Tokito-System**, ~~**Jinwoo-System**~~, **VIP-System**, and **Cid-Kagenou-System**, KagenouBot is your ultimate companion in automating and enhancing chat experiences.

# Introduce the contributors of our KagenouBotV3 Beta Teaser 

**Liane Cagara** — she was the one who really advice me to create and adjust functions and to solve problems on code.

**Frances Loyd Raval** — He is the one who helping to setup other systems and functions.

**Kenneth Panio** — He is the one who really advice to modify systems and add functions.


---


## Introduction: The Seven Shadows

The Seven Shadows are Cid Kagenou's elite shadow organization. Each member possesses unique skills and plays a crucial role in his grand schemes.

### King of Shadow Garden

| Name              | Image                      | Description |
|-------------------|----------------------------|-------------|
| Cid Kagenou (Shadow) | ![Shadow](image/Shadow.jpg) | Shadow is the king of the Seven Shadows and leader of Shadow Garden. A brilliant tactician and a true mastermind hidden behind a humble facade. |

### Members of the Seven Shadows

| Member Name | Image                   | Description |
|-------------|-------------------------|-------------|
| Alpha       | ![Alpha](image/Alpha.jpg) | Alpha is the strongest and most loyal member, a powerful magic swordsman who leads the Seven Shadows. |
| Beta        | ![Beta](image/Beta.jpg)  | The strategist and tactician of the group, calm and calculating. |
| Gamma       | ![Gamma](image/Gamma.jpg) | A martial arts expert and voice of reason, swift and deadly in close combat. |
| Delta       | ![Delta](image/Delta.jpg) | An expert archer known for her loyalty and deadly precision. |
| Epsilon     | ![Epsilon](image/Epsilon.jpg) | Master of illusion and deception, clever and manipulative. |
| Zeta        | ![Zeta](image/Zeta.jpg)  | A stealthy assassin skilled in infiltration and hand-to-hand combat. |
| Eta         | ![Eta](image/Eta.jpg)   | A compassionate healer and expert in life magic. |

---

## Command System Examples

### Basic Command Format

```js
module.exports = {
  name: 'test',
  category: 'Test',
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    sendMessage(api, { threadID: event.threadID, message: 'This is a test command!' });
  },
};
```

### Tokito-System Command

```js
module.exports = {
  manifest: {
    name: "ping",
    aliases: ["p"],
    developer: "YourName",
    description: "Responds with Pong!",
    usage: "/ping",
    config: {
      botAdmin: false,
      botModerator: false,
      noPrefix: false,
      privateOnly: false
    }
  },

  async deploy({ chat }) {
    chat.send("Pong! ðŸ“");
  }
};
```

~~### Jinwoo-System (Coming Soon in KagenouBotV3)~~

```js
module.exports = {
  config: {
    name: "ping",
    description: "Check bot response time.",
    usage: "/ping",
    hasPermission: 0
  },

  onStart: async function ({ api, event }) {
    const start = Date.now();
    api.sendMessage("Pinging...", event.threadID, (err, info) => {
      if (err) return;
      const ping = Date.now() - start;
      api.editMessage(` Pong! Response time: ${ping}ms`, info.messageID);
    });
  }
};
```

### VIP-System Command

```js
module.exports = {
  name: "ping",
  run: async ({ api, event }) => {
    api.sendMessage("Pong!", event.threadID);
  }
};
```

### Cid-Kagenou-System Command

```js
module.exports = {
  onChat: {
    name: "ping",
    aliases: ["latency", "pong"],
    developer: "Aljur Pogoy",
    description: "Check the bot's response time.",
    usage: "ping",
    config: {
      cidControl: false,
      alphaControl: false,
      deltaControl: false,
      zetaControl: false
    },
  },

  async deploy({ cid }) {
    const start = Date.now();
    await cid.kagenou("ðŸ“ Pinging...");
    const ping = Date.now() - start;
    cid.kagenou(`ðŸ“ Pong! Response time: ${ping}ms`);
  }
};
```

---

## Configuration Guide

### config.json
```json
{
  "admins": ["100073129302064", "100080383844941", "61560407754490"]
}
```

### appstate.json
> Put your appstate credentials here. **(Not recommended to use your main account)**

```json
{}
```

---

## Running the Bot

### Installation

```
npm install
```

### Start Bot

```
node index.js
```


## What's New in KagenouBot V3

### MongoDB Integration
- KagenouBot V3 now includes MongoDB support for storing user data, command configurations, and bot settings.
- Easily scale your bot's storage capacity and improve data persistence with MongoDB's robust database solutions.

### Enhanced Reply Handling
- Improved message reply detection, allowing for more precise and context-aware responses.
- Optimized command processing for faster and more reliable message handling.

### Modular Command Structure
- Simplified command management with clearly organized command files and directories.
- Support for multiple systems and command categories, including Jinwoo-System, Alpha-System, and GoatBot-System.

### Improved Bot Performance
- Faster command execution and reduced latency.
- Optimized resource management for smoother operation.

### Customizable Prefix and Permissions
- Flexible command prefixes and role-based permissions for fine-tuned bot control.
- Easy-to-edit configuration files for quick customization.


## You can Deploy  on Render, and Bot-Hosting.net, and railway. 
*Note*: You can also deploy on pterodactyl Hosting.

### Stpes on How to deploy on render

**Step 1:** Fork ny repository

**Step 2:** Login Dashboard on Render

**Step 3:** Connect your GitHub or Google gmail

**Stel 4:** Choose the repository, choose KagenouBotV3 and deploy.

> Login required via [Render](https://render.com)
---

## New RPG games ✨

**Solo leveling rpg game 🗡️**
*commands*

**hunter**

**arise**

**arise-list**

**hunter-inventory**

**dungeon-fightv2**

**shopv2**


## Cid Kagenou rpg game 🗡️
*commands*

**shadow**

**fight**

**character-list**

**character-choose**

**artifact-shop**


## Adventure Rpg game 🗡️ 


**dungeon-fight**

**shop**

**blacksmith-shop**







## 🚧 **Requirement**
- Node.js 22.x [Download](https://nodejs.org/dist/v22.0.0) | [Home](https://nodejs.org/en/download/) | [Other versions](https://nodejs.org/en/download/releases/)
- Knowledge of **programming**, JavaScript, NodeJs


## License

```
MIT License

Copyright (c) January 20, 2025
Aljur Pogoy / GeoArchonsTeam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, distribute, and publish as needed.
```

---

## Credits

- **ws3-fca** - [Visit NPM](https://www.npmjs.com/package/ws3-fca)
- **Shadow Garden Lore** - Inspired by *The Eminence in Shadow*
- **Bot Devs** - Aljur Pogoy and GeoArchonsTeam
