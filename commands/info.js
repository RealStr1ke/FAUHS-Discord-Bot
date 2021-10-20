const config = require("../config.js");
const { settings } = require("../modules/settings.js");
exports.run = async (client, message, args, level) => {
  const friendly = config.permLevels.find(l => l.level === level).name;
  const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  message.reply({ content: `**Incomplete Command**`, allowedMentions: { repliedUser: (replying === "true") }});
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
  usage: "info"
};
