const { environment } = require("@rails/webpacker");

environment.config.merge({
  entry: {
    application: "./app/javascript/application.js",
    chatroom_channel: "./app/javascript/channels/chatroom_channel.js",
  },
});

module.exports = environment;
