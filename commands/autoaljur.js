const axios = require("axios");

module.exports = {
    name: "autoaljur",
    config: {
        name: "autoaljur",
        nonPrefix: false,
        enabled: false, // Toggle state
    },
    description: "Autoaljur tralalulela tarantado ka",
    usage: "Use '/' prefix for messages (e.g., /hello)",

    async handleEvent({ api, event }) {
        if (!module.exports.config.enabled) return; // Use static reference for enabled check

        if (!["message", "message_reply"].includes(event.type)) return;
        if (!event.body || !event.body.startsWith("/")) return;

        console.log(`[DEBUG] Autoaljur triggered: ${event.type}, body: ${event.body}`);

        const url = process.env.AUTOCASS || "https://kagenoubotv2-production.up.railway.app/api";

        try {
            const params = {
                body: event.body,
                threadID: event.threadID,
                senderID: event.senderID,
                prefixes: ["/"],
                password: null,
                originalEvent: null,
            };

            if (event.messageReply) {
                params.messageReply = {
                    body: event.messageReply.body,
                    senderID: event.messageReply.senderID,
                    messageID: event.messageReply.messageID,
                };
            }

            const response = await axios.get(`${url}/postWReply`, {
                params,
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Cache-Control": "no-cache",
                    Pragma: "no-cache",
                    Referer: url,
                    Connection: "keep-alive",
                    DNT: "1",
                },
                timeout: 5000,
            });

            const { status, result } = response.data;

            if (status === "fail") {
                console.log(`[DEBUG] API failed: ${JSON.stringify(response.data)}`);
                return api.sendMessage("❌ API request failed.", event.threadID);
            }

            api.sendMessage(result.body, event.threadID, (err, info) => {
                if (err) return console.error("[DEBUG] Error sending message:", err);

                console.log(`[DEBUG] Message sent, ID: ${info.messageID}`);

                if (!global.Kagenou) global.Kagenou = { replies: {} };

                global.Kagenou.replies[info.messageID] = {
                    callback: async ({ api, event }) => {
                        console.log(`[DEBUG] Reply callback for messageID: ${info.messageID}`);
                        await module.exports.handleEvent({ api, event });
                    },
                    author: event.senderID,
                };
            });
        } catch (err) {
            console.error("[DEBUG] API error:", err.message);
            return api.sendMessage("❌ Failed to process message.", event.threadID);
        }
    },

    async run({ api, event, args }) {
        const toggle = args?.[0];

        if (toggle === "on") {
            module.exports.config.enabled = true;
            return api.sendMessage("✅ Autoaljur has been enabled.", event.threadID);
        }

        if (toggle === "off") {
            module.exports.config.enabled = false;
            return api.sendMessage("❌ Autoaljur has been disabled.", event.threadID);
        }

        return api.sendMessage(
            `ℹ️ Autoaljur is currently ${module.exports.config.enabled ? "enabled" : "disabled"}.\nUse:\n- /autoaljur on\n- /autoaljur off`,
            event.threadID
        );
    },
};
