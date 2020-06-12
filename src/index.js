const TwitchJs = require('twitch-js').default;

const { api, chat } = new TwitchJs({
  username: process.env.TWITCH_BOT_NAME,
  token: process.env.TWITCH_TOKEN
});

// // Get featured streams.
// api.get('streams/featured', { version: 'kraken' }).then(response => {
//   console.log(response);
//   // Do stuff ...
// });

// const handleMessage = message => {
//   console.log(message);
//   // Do other stuff ...
// };

// // Listen for all events.
// chat.on(TwitchJs.Chat.Events.ALL, handleMessage);

// // Connect ...
// chat.connect().then(() => {
//   // ... and then join the channel.
//   chat.join(channel);
// });