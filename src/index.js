const tmi = require('tmi.js');

require('dotenv').config();

const client = new tmi.Client({
  options: {
    debug: true
  },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.TWITCH_BOT_NAME,
    password: process.env.TWITCH_TOKEN
  },
  channels: [process.env.TWITCH_CHANNEL]
});

client.connect();

client.on("message", (channel, userstate, message, self) => {
  if (self) return;

  console.log(userstate);

  switch (userstate["message-type"]) {
    case "action":
      break;
    case "chat":
      break;
    case "whisper":
      break;
    default:
      break;
  }
});
