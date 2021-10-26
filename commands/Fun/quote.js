const config = require("../../config.js");
const { settings } = require("../../modules/settings.js");

const quotes = ["So do the Mongols come from Mongolia?", "Is Bangladesh a country?", "Is Germany in Russia? Wait…", "Do the Mongols in Mongolia speak Mongolian?", "Aren’t the Turkics from Turkey?", "Regiment! Wait is that right?", "Do you have any tips for understanding normal English?", "It’s kind of, like, superior.", "Clevy's not ready! Clevy's not ready!", "South America and Canada are technically the same thing. They’re both Americas.", "Confusing Confucianism.", "Were breastplates a predecessor to bras?", "`(TRIGGER WARNING)` Women have great debate skills. They have something called stubbornness."]; 

exports.run = async (client, message, args, level) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  message.reply({ content: `**"${quote}"** ***- Kyle***`, allowedMentions: { repliedUser: (replying === "true") }});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["q", "kq"],
  permLevel: "User"
};

exports.help = {
  name: "quote",
  category: "Miscellaneous",
  description: "Kyle quotes lol",
  usage: "quote"
};
