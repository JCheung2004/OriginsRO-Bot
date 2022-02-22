module.exports = {
  name: "commands",
  description: "this will output an embed with all the available commands",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setTitle("Commands")
      .setDescription(
        "This is the list of commands that you can utilise this bot for."
      )
      .addFields(
        { name: "!anyone", value: "try it and you will see ;)" },
        { name: "!sauce", value: "try it and you will see ;)" },
        { name: "!cloveros", value: "try it and you will see ;)" },
        { name: "!lottery", value: "try it and you will see ;)" },
        { name: "!friday", value: "try it and you will see ;)" },
        {
          name: "!market",
          value:
            "use !market followed by an item ID to query the 3rd party market website for prices",
        },
        {
          name: "!cp",
          value:
            "use !cp followed by either an item ID or item name to check the OriginsRO control panel vending prices",
        },
        {
          name: "!item",
          value:
            "use !item followed by either an item ID or item name to find an item on the OriginsRO control panel item database",
        },
        {
          name: "!monster",
          value:
            "use !monster followed by either an item ID or monster name to find the monster on the OriginsRO control panel monster database",
        }
      )
      .setFooter("Please mail Scar Tissue all of your zeny =)")
    message.channel.send({embeds: [newEmbed]});
  },
};
