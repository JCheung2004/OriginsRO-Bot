const fridayGifs = [
  "https://media.giphy.com/media/11iUDM07eGztx6/giphy.gif",
  "https://media.giphy.com/media/yvaMWkRQpwhCU/giphy.gif",
  "https://media.giphy.com/media/1X7vgDeISiInjAJQK7/giphy.gif",
  "https://media.giphy.com/media/pgJqdXiXrSOaI/giphy.gif",
  "https://media.giphy.com/media/dq9mX9hEbSfx6/giphy.gif",
  "https://media.giphy.com/media/1wQy1qcdATLL9vaAn6/giphy.gif",
  "https://media.giphy.com/media/ZLD94N65BOEGk/giphy.gif",
  "https://media.giphy.com/media/60zLQKKcmEbE4/giphy.gif",
  "https://media.giphy.com/media/LqzgIzNWDiyFG/giphy.gif",
  "https://media.giphy.com/media/TAMYAcbyOukJq/giphy.gif",
  "https://media.giphy.com/media/z1CksDrnttZMA/giphy.gif",
  "https://media.giphy.com/media/8SS0MSoBHa8la/giphy.gif",
  "https://cdn.discordapp.com/attachments/913036617348943923/944292313553862747/unknown.png"
];

const specialReplies = [
  "I hope you've hydrated",
];
module.exports = {
  name: "friday",
  description: "this is a ping command!",
  execute(message, args) {
    const Response = fridayGifs[Math.floor(Math.random() * fridayGifs.length)];
    const DMResponse = anhReplies[Math.floor(Math.random() * specialReplies.length)];
    if (
      message.author.username === "Oronyx" 
    ) {
      message.author.send(DMResponse);
      message.channel.send(Response);
    } else {
      message.channel.send(Response);
    }
  },
};
