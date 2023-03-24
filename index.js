const { Client, EmbedBuilder } = require("discord.js");
const client = new Client({ intents: [3276799] });



// SCRIPT RULES
client.on("messageCreate", async message => {
  console.log("comando +rules usado(respuesta por promesa)");
  if (message.content == "+rules") {
    const reglas = config.reglas;
    const lines = reglas.split("\n");
    const reglasConSaltosDeLinea = lines.join("\n");
    console.log(reglasConSaltosDeLinea);
    message.channel.send(reglasConSaltosDeLinea);
  }
});

//Fin script Rules

// Script Activar con / slash
client.on("ready", () => {
  console.log("comando activar inicializado");
  client.application.commands.set([
    {
      name: "activar",
      description: "Respuesta",
      options: [],
    },
  ]);
});

client.on("interactionCreate", interaction => {
  if (interaction.isCommand() && interaction.commandName === "activar") {
    interaction.reply("Respuesta");
  }
});
// Fin Script Activar con / slash

// Script Embed
client.on("messageCreate",async message=>{
  if(message.content == "!embed"){
    const embed = new EmbedBuilder()
    .setTitle("Canal de Twich")
    .setURL("https://www.twitch.tv/arceprog")
    .setDescription("Canal para desarrollo web y otras cosas")
    .setAuthor({
      name:"Felipe",
      iconURL:"https://picsum.photos/200/300",
      url:"https://github.com/arceprogramando"
    })
    .setThumbnail("https://picsum.photos/200/300")
    .setImage("https://picsum.photos/200/300")
    .setFooter({
      text:"Gracias por entrar",
      iconURL:"https://picsum.photos/200/300"
      
    })
    .setTimestamp()
    .setFields({
      name:"Nombre",
      value:"Felipe",
      inline:true
    },
    {name:"Apellido",
    value:"Arce",
    inline:true
    })
    .setColor("ff0080")

    message.channel.send({
      embeds : [embed]

    })
  }
})
// Fin Script Embed


const config = require("./config.json");
client.login(config.token);
console.log("El bot ya esta listo.")