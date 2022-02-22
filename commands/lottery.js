const lotteryVideoArray = [
    "https://cdn.discordapp.com/attachments/832767254893559879/840286731441537084/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/837396114398380052/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/839765975628644352/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/841336122323501097/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/841294158102659072/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/843592369370693662/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/844644243956039680/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/844548013384269874/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845635031984373770/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845233487421243413/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845015815597588490/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845009485927284746/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845695319878795264/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845694474176299028/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845690704533389312/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845684616819376188/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/845684029995220992/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/847117060315807764/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/848010064610066453/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/847949552485007380/unknown-10.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/848322767731556382/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/848304082837438474/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/848146407431995392/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/848146220093931530/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/849465357948157982/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/849756136826994748/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/849630896889921623/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/863163482375454770/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/863109466332987402/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/876435235296915506/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/887997432795914250/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/887415285827657788/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/889410367015493702/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/888201764287967272/unknown.png"
];

module.exports = {
    name: 'lottery',
    description: "this is a ping command!",
    execute(message, args){
        const Response = lotteryVideoArray[Math.floor(Math.random() * lotteryVideoArray.length)]
        message.channel.send(Response);
    }
}   