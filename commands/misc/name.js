const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "name",
  usasge: "<nickname><person>",
  aliases: ["nick"],
  run: async (bot, message, args) => {
    let name = args.slice(1).join(" ");
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.reply("You dont have the perms to use this cmd!");
    if (!args[0])
      return message.channel.send(`whos's Nickname should i change?`);
    const User =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    if (!User)
      return message.channel.send(`That user was not found! :man_facepalming:`);
    if (!name) {
      return message.channel.send(`What should his nickname be?`);
    }
    if (!User.kickable)
      return message.channel.send(`I cant change their nickname`);
    User.setNickname(name);
    const Embed = new MessageEmbed()
      .setTitle(`Nickname changed`)
      .setDescription(
        `I changed ${bot.user.cache.get(User.id).username}'s nickname!`
      )
      .setColor(`RANDOM`)
      .setFooter(`${message.author.username} authorized this command!`)
      .setTimestamp();
    message.channel.send(Embed);
  }
};
