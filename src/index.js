const tmi = require('tmi.js');

require('dotenv').config();

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.TWITCH_BOT_NAME,
    password: process.env.TWITCH_TOKEN
  },
  channels: [ process.env.TWITCH_CHANNEL ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  if(self) return;

  if(message.toLowerCase() === '!hello') {
    client.say(channel, `@${tags.username}, heya!`);
  }
});
