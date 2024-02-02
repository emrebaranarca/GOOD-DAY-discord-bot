require("dotenv").config();
const Discord=require("discord.js")
const { GatewayIntentBits } = require('discord.js');
const deployCommands=require("./deploy-command")
const client = new Discord.Client({
    intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
  });

const token=process.env.DISCORD_TOKEN

 const eventHandler=require("./events/eventHandler")
 eventHandler(client)


client.login(token)

