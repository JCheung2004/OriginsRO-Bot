module.exports = {
    name: 'market',
    description: "this is a ping command!",
    execute(message, args){
        if (!args.length) {
			return message.channel.send(`You didn't provide any item IDs, ${message.author}!`);
		} else {
			return message.channel.send(`https://www.originsro-market.de/sells/item_id/${args[0]}`);
		}

    }
}