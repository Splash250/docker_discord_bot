const getUserNum = require("../../botDatabaseActions/getUserNum");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dbusernum')
        .setDescription('Replies with the number of users in the database.'),
    async execute(interaction) {
        await getUserNum
            .getUserNum()
            .then((result) => {
                interaction.reply(`There are ${result} users in the database!`);
            })
            .catch((err) => {
                console.error(err);
                interaction.reply(`There was an error getting the number of users in the database.`);
            });
    },
};
