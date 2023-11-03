const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('membernum')
        .setDescription('Replies with the number of members in the server.'),
    async execute(interaction) {
        await interaction.reply(`There are ${interaction.guild.memberCount} members in this server!`);
    },
};
