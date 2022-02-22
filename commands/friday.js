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

const anhReplies = [
  "I just wanted to tell you that, you are  special and I appreciate you =). Before you ask otherwise, this a message that is being sent uniquely to you <3",
  "I hope you're hydrated Anh",
  "I hope you're keeping warm and safe",
  "I hope you're well fed 8)",
  "Your cup of tea is coming in a few months, just in time for summer!",
  "BOBA!? 8)",
  "YOU HAVEN'T HAD NUGGIES IN A LONG TIME, DO YOU WANT SOME?",
  "If you execute another !friday, you might get another goodie 8)",
  "I miss you",
  "I wonder if you're executing this whilst I'm asleep or awake? :thinking:",
];
module.exports = {
  name: "friday",
  description: "this is a ping command!",
  execute(message, args) {
    const Response = fridayGifs[Math.floor(Math.random() * fridayGifs.length)];
    const DMResponse = anhReplies[Math.floor(Math.random() * anhReplies.length)];
    if (
      message.author.username === "Elone" &&
      message.author.discriminator === "6117"
    ) {
      message.author.send(DMResponse);
      message.channel.send(Response);
    } else {
      message.channel.send(Response);
    }
  },
};