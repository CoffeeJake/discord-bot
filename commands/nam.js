const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nam')
		.setDescription('Gives a random Nam for you to enjoy'),
	async execute(interaction) {
		let namNum = namRoll();
        let namString = "./nam/picture (" + String(namNum) + ").png";
		await interaction.reply('Heres a vintage Nam');
		await interaction.followUp({files: [namString]});
	},
};

function namRoll(){
    let randomNum = Math.floor(Math.random() * 78);
    return randomNum;
}