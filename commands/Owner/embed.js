const config = require("../../config.js");
const { settings } = require("../../modules/settings.js");
exports.run = async (client, message, args, level) => {
const exampleEmbed = {
	color: 0x0099ff,
	title: 'Some title',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/AfFp7pu.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/AfFp7pu.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/AfFp7pu.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://i.imgur.com/AfFp7pu.png',
	},
};
const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  message.reply({ embeds: [exampleEmbed], allowedMentions: { repliedUser: (replying === "true") }});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["em"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "embed",
  category: "Miscellaneous",
  description: "Reply with test embed.",
  usage: "embed"
};
