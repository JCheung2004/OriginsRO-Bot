const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "!";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("oROnyxBot is Online");
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "commands") {
    client.commands.get("commands").execute(message, args, Discord);
  } else if (command === "sauce") {
    client.commands.get("sauce").execute(message, args, Discord);
  } else if (command === "market") {
    client.commands.get("market").execute(message, args, Discord);
  } else if (command === "cp") {
    client.commands.get("cp").execute(message, args, Discord);
  } else if (command === "item") {
    client.commands.get("item").execute(message, args, Discord);
  }else if (command === "anyone") {
    client.commands.get("anyone").execute(message, args, Discord);
  }else if (command === "friday") {
    client.commands.get("friday").execute(message, args, Discord);
  }else if (command === "monster") {
    client.commands.get("monster").execute(message, args, Discord);
  }else if (command === "angeling") {
    client.commands.get("angeling").execute(message, args, Discord);
  }else if (command === "cloveros") {
    client.commands.get("cloveros").execute(message, args, Discord);
  }else if (command === "lottery") {
    client.commands.get("lottery").execute(message, args, Discord);
  }
});

client.login("OTQzNTk2NTE0OTc3MTIwMjc3.Yg1WvA.UfH0XQTaw00cwS39AbcMlRidF9w");
