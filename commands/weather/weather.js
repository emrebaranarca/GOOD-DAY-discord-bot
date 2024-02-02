const { SlashCommandBuilder } = require('discord.js');
const getWeatherData=require("../../utils/weather")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Get weather information')
        .addStringOption(option =>
            option.setName('city')
            .setDescription('The location to get weather information for')
            .setRequired(true)
        ),
    execute: async (interaction) => {
        if (!interaction.isCommand()) return;
        let weatherInfo=null;
            try{
                const city = interaction.options.getString('city');
                await getWeatherData(city)
                .then((msg)=>{
                    weatherInfo=msg
                }).catch(err=>{
                    console.log(err)
                })
    
                await interaction.reply(`Weather information for ${city}: ${weatherInfo}`);
            }catch(error){
                console.log(error.message)
                await interaction.reply('Unable to fetch weather information.')
            }
        }
      
	
};