module.exports = {
  name: "cp",
  description: "this is a ping command!",
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any item ID or item name, ${message.author}!`
      );
    } else {
      const query = parseInt(args[0]);
      if (isNaN(query)) {return message.channel.send(
        `https://cp.originsro.org/market/vending/?item_id=&name=${args[0]}&type=-1`);
      } else { 
        return message.channel.send(
          `https://cp.originsro.org/market/vending/?item_id=${args[0]}&type=-1`
        );
      }
    }
  },
};
