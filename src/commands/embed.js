exports.run = (client, message, args) => {
  if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");

message.channel.send({ embed: {
    color: 3447003,
    description: args
  }
});