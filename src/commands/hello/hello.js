const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Prints hello!'),
    async execute(interaction) {
        await interaction.reply(`Hello there!`);
    },
};
