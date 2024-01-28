require("dotenv").config();
const Discord=require("discord.js")
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
    
        const { commandName } = interaction;
        let weatherInfo=null;
        if (commandName === 'weather') {
            try{
                const city = interaction.options.getString('city');
                console.log(city)
                await getWeatherData(city)
                .then((msg)=>{
                    weatherInfo=msg
                    console.log(msg)}
                ).catch(err=>{
                    console.log(err)
                })
    
                await interaction.reply(`Weather information for ${city}: ${weatherInfo}`);
            }catch(error){
                console.log(error.message)
                await interaction.reply('Unable to fetch weather information.')
            }
        }
      },
	
};