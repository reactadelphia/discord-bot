// Imports
const dotenv = require("dotenv");
const Discord = require("discord.js");

// Initializers
dotenv.config();
const client = new Discord.Client();

client.once("ready", () => {
  console.log("I'm ready!");
});

client.login(process.env.TOKEN);
