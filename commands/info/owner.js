

module.exports = {
  name: "owner",
  description: "Tells the user the bots owner",

  async run(client, message, args) {
    const owner = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Some title")
      .setImage(
        "https://lh3.googleusercontent.com/a-/AOh14Gj4Ps59UUKUUmYnTmphbe29MZ87NDXTd2TI1tofeg=s360-c"
      )
      .setTimestamp()
      .setFooter("Made by Manfredix");

    message.channel.send(owner);
  }
};
