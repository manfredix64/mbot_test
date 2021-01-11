module.exports = {
  name: "dm",
  description: "Dm a user ;)",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("You dont have the perms!");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave anvalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify a message!");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("That user could not be dm'd"))
      .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
  }
};
