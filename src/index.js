// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
	if (msg.content === '?ping') {
	  msg.reply('The bot is online!');
	}
});

// Login to Discord with your client's token
client.login(token);
