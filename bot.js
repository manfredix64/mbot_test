// bot.js
const { Client } = require('discord.js');
const client = new Client();
const prefix = '.';

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'stats') {
		return message.channel.send(`Server count: ${client.guilds.cache.size}`);
	}
});

client.login('NzQwNTMzNTM4Njc1MzU5Nzg5.XyqZmg.fMx9ytnP8ScC_4FpmcrVkQ5lMws');
