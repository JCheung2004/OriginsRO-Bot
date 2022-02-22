const lotteryVideoArray = [
    "https://cdn.discordapp.com/attachments/832767254893559879/840286731441537084/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/837396114398380052/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/839765975628644352/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/841336122323501097/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/841294158102659072/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/843592369370693662/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/844644243956039680/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/844548013384269874/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845635031984373770/unknown.png"
];

module.exports = {
    name: 'lottery',
    description: "this is a ping command!",
    execute(message, args){
        const Response = lotteryVideoArray[Math.floor(Math.random() * lotteryVideoArray.length)]
        message.channel.send(Response);
    }
}   