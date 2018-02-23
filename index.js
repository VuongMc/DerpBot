const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(NDE2Mzk1NDc0MzA0NzYxODY3.DXD4oA.gaPyW5BpvWf4KeWryir7DD5pnJs);
