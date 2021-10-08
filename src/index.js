const Discord = require('discord.js');
// const Discord = require('discord.js');

// using Intents class
const client = new Discord.Client();

client.on('message', (msg) => {
  // Send back a reply when the specific command has been written by a user.
  if (msg.content === '!hello') {
    msg.reply('Hello World!');
  }
});

client.login('my_token');
