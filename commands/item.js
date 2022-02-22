module.exports = {
    name: "item",
    description: "this is a ping command!",
    execute(message, args) {
      if (!args.length) {
        return message.channel.send(
          `You didn't provide an item ID or item name, ${message.author}!`
        );
      } else {
        const query = parseInt(args[0]);
        if (isNaN(query)) {return message.channel.send(
          `https://cp.originsro.org/item/?item_id=&name=${args[0]}&type=-1&equip_loc=-1&npc_buy_op=eq&npc_buy=&npc_sell_op=eq&npc_sell=&weight_op=eq&weight=&range_op=eq&range=&slots_op=eq&slots=-1&defense_op=eq&defense=&atk_op=eq&atk=&refineable=`);
        } else { 
          return message.channel.send(
            `https://cp.originsro.org/item/view/?id=${args[0]}`
          );
        }
      }
    },
  };
  