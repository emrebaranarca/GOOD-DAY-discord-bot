const dotenv=require("dotenv")
const { Events } = require('discord.js');
dotenv.config({path:"../.env"})
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const channel =  client.channels.cache.get(process.env.GENERAL_TEXT_CHAT_ID); // Replace channel-id with the actual ID
		channel.send("Hello @everyone, i am good day bot. I'm ready. If you want to learn weather any country, you can use /weather and you can learn top 10 song in Turkey, you can use /popularsong command. GOOD DAY :)")
	}
};


