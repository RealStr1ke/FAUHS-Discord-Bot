const config = require("../../config.js");
const { version } = require("discord.js");
const { codeBlock } = require("@discordjs/builders");
const { settings } = require("../../modules/settings.js");
const { DurationFormatter } = require("@sapphire/time-utilities");
const durationFormatter = new DurationFormatter();

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = durationFormatter.format(client.uptime);
  const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  const statsEmbed = {
	color: 0x0099ff,
	title: 'Bot Stats',
	description: 'Here are the current bot stats: ',
	fields: [
		{
			name: 'Mem Usage:',
			value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\``,
		},
		{
			name: 'Uptime',
			value: `\`${duration}\``,
		},
		{
			name: 'Users',
			value: `\`${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b).toLocaleString()}\``,
		},
		{
			name: 'Servers:',
			value: `\`${client.guilds.cache.size.toLocaleString()}\``,
		},
		{
			name: 'Channels:',
			value: `\`${client.channels.cache.size.toLocaleString()}\``,
		},
		{
			name: 'DiscordJS Ver.:',
			value: `\`v${version}\``,
		},
		{
			name: 'Node Ver.:',
			value: `\`${process.version}\``,
		},
	],
	timestamp: new Date(),
	footer: {
		text: 'Imagine looking at the footer text',
		icon_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
	},
};
  message.reply({ embeds: [statsEmbed], allowedMentions: { repliedUser: (replying === "true") }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "stats",
  category: "Miscellaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
