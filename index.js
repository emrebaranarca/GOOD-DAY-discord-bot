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




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('messageCreate',(message)=>{
    if(message.content.toLowerCase()==="selamun aleyküm"){
        message.reply("aleyküm selam")     
    }
})


 const eventHandler=require("./events/eventHandler")
 eventHandler(client)







client.login(token)


