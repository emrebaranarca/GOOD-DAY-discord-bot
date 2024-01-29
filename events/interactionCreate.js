// events/interactionCreate.js
module.exports = {
  name: 'interactionCreate',
  once: false, // Bu olay sürekli olarak dinleniyor mu?
  execute: async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    if (commandName === 'weather') {
        require("../commands/weather/weather").execute(interaction)
    }
  },
};