const config = require("../../config.js");
const { readdirSync } = require("fs");
const { settings } = require("../../modules/settings.js");
const logger = require("../../modules/Logger.js");
async function cacheClear() {
  const commands = await readdirSync(`./commands/${dir}/`).filter(d => d.endsWith('.js'))
  logger.log(`Shutting Down ${dir} Category.`, "log");
  for (const file of commands) { 
    const props = require(`./commands/${dir}/${file}`);
    logger.log(`Shutting Down Command: ${props.help.name}. 👌`, "log");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(props)];
    // We also need to delete and reload the command from the container.commands Enmap
    client.container.commands.delete(props.help.name);
  };
}
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  await message.reply({ content: "Bot is shutting down.", allowedMentions: { repliedUser: (replying === "true") }});
  const commandDirs = await readdirSync(`./commands/`);
  logger.log(`Shutting Down ${commandDirs.length} Categories.`, "log");
  commandDirs.forEach(async (dir) => {
    logger.log(`Shutting Down ${dir} Category`, "log");
    clearCache(); // For future reference, this doesn't seem to work
  });
  process.exit(0);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["restart"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  usage: "reboot"
};
