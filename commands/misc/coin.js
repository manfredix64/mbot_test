const Discord = module.require("discord.js");

var hd = ["Heads", "Tails"];
module.exports = {
  name: "flipcoin",
  timeout: 10000,
  run: async (bot, message, args) => {
    message.channel.send(
      message.author.toString() +
        " You Flipped: " +
        hd[Math.floor(Math.random() * hd.length)]
    );
  }
};
