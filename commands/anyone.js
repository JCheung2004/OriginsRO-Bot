const anyoneVideoArray = [
    "https://youtu.be/jFfiXOybAs4",
    "https://youtu.be/KS7RD3fUVAk",
    "https://cdn.discordapp.com/attachments/832767254893559879/944333737645187092/unknown.png",
    "https://youtu.be/ZeP72p4DBBs"
];

module.exports = {
    name: 'anyone',
    description: "this is a ping command!",
    execute(message, args){
        const Response = anyoneVideoArray[Math.floor(Math.random() * anyoneVideoArray.length)]
        message.channel.send(Response);
    }
}   