const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return
        
        try{


            await command.execute(interaction, client);
        } catch (error) {
            console.log(error);
            const embed = new EmbedBuilder()
            .setColor('#ffffff')
            .setTitle('ERROR')
            .setDescription('Error while running the command! Try agam later.')
            .setAuthor({ name: interaction.client.user.username, iconURL: interaction.client.user.displayAvatarURL() })
            .setTimestamp();

            await interaction.reply({ embeds: [embed], ephemeral: true });
        } 

    },
    


};