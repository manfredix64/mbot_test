const Discord = module.require("discord.js");

var hd = ["Yes", "No", "Bruh, r u stupid?"];
module.exports = {
  name: "8ball",
  timeout: 10000,
  run: async (bot, message, args) => {
    const amount = args.join(" ");

    if (!amount)
      return message.reply(
        "please provide a question"
      );
    message.channel.send(
      message.author.toString() +
        " The magic 8ball said: " +
        hd[Math.floor(Math.random() * hd.length)]
    );
  }
};