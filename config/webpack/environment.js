const { environment } = require("@rails/webpacker");

environment.config.merge({
  entry: {
    application: "./app/javascript/application.js",
    chat_messages_channel: "./app/javascript/channels/chat_messages_channel.js",
  },
});

module.exports = environment;
