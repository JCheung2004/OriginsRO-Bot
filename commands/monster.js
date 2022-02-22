module.exports = {
    name: "monster",
    description: "this is a ping command!",
    execute(message, args) {
      if (!args.length) {
        return message.channel.send(
          `You didn't provide any item IDs, ${message.author}!`
        );
      } else {
        const query = parseInt(args[0]);
        if (isNaN(query)) {return message.channel.send(
          `https://cp.originsro.org/monster/?monster_id=&name=${args[0]}&mvp=all&size=-1&race=-1&element=-1&card_id=`);
        } else { 
          return message.channel.send(
            `https://cp.originsro.org/monster/view/?id=${args[0]}`
          );
        }
      }
    },
  };
  