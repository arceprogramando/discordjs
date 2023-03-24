const { Client } = require("discord.js");
const client = new Client({ intents: [3276799] });

const config = require("./config.json");

client.on("messageCreate", async message => {
  if (message.content == "+rules") {
    const reglas = config.reglas;
    const lines = reglas.split("\n");
    const reglasConSaltosDeLinea = lines.join("\n");
    console.log(reglasConSaltosDeLinea);
    message.channel.send(reglasConSaltosDeLinea);
  }
});

client.on("ready", () => {
  console.log("Ready");
  client.application.commands.set([
    {
      name: "activar",
      description: "pong!",
      options: [],
    },
  ]);
});

client.on("interactionCreate", interaction => {
  if (interaction.isCommand() && interaction.commandName === "activar") {
    interaction.reply("pong!");
  }
});

client.login(config.token);
console.log("Hola");