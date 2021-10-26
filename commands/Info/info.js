const config = require("../../config.js");
const { settings } = require("../../modules/settings.js");
exports.run = async (client, message, args, level) => {
  const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  const infoEmbed = {
	color: 0x0099ff,
	title: 'Bot Info',
	url: 'https://github.com/RealStr1ke/FAUHS-Discord-Bot/',
	author: {
		name: 'RealStr1ke',
		icon_url: 'https://github.com/RealStr1ke',
		url: 'https://cdn.discordapp.com/avatars/411641088944766982/5489f885a60acfa2c50cca1fddd458d5.png?size=1024',
	},
	description: `This bot was made with the puspose to cure Str1ke's boredom and help students.`,
	thumbnail: {
		url: 'https://pbs.twimg.com/profile_images/1146392144480858112/00X-bHE0_400x400.png',
	},
	fields: [
		{
			name: 'Repository:',
			value: 'https://github.com/RealStr1ke/FAUHS-Discord-Bot',
		}
	],
	timestamp: new Date(),
	footer: {
		text: 'Imagine reading the footer text',
		icon_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
	},
};
  message.reply({ embeds: [infoEmbed], allowedMentions: { repliedUser: (replying === "true") }});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["inf", "i"],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Miscellaneous",
  description: "Shows you the bot info and links.",
  usage: "info`"
};
