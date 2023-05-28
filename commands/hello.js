const { client } from 'discord.js'
client.on('messageCreate', (message) => {
	// Verifica si el mensaje es el comando "!hello"
	if (message.content.toLowerCase() === '!hello') {
		// Responde con un mensaje
		message.reply('¡Hola! ¿Cómo estás?');
	}
});