// events/interactionCreate.js
const getWeatherData=require("../utils/weather")
module.exports = {
  name: 'interactionCreate',
  once: false, // Bu olay sürekli olarak dinleniyor mu?
  execute: async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    let weatherInfo=null;
    if (commandName === 'weather') {
        require("../commands/weather/weather").execute(interaction)
    }
  },
};
