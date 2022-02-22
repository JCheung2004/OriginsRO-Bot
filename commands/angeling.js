module.exports = {
    name: 'angeling',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Angeling will respawn in !!countdown @here 1 hour!');
    }
}