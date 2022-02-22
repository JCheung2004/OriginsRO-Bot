const cloverosArray = [
    "https://s3.eu-central-1.amazonaws.com/org.myadvent.media/images/previews/4c2973e8402a2ef291a67e49fabc6da5-door-5-e1e8a06c7e2bf5475ad43adc22d7e413.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220214T000000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAZVIQX54U7ZT7HLBD%2F20220214%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=219b776cebaaa9768bbd0f48f60773b73fa1e6aa97b1b82d035d91f221851146",
    "https://cdn.discordapp.com/attachments/832767254893559879/843570638072446986/unknown.png",
    "https://cdn.discordapp.com/attachments/832767254893559879/866829143811031050/unknown.png"
];

module.exports = {
    name: 'cloveros',
    description: "this is a ping command!",
    execute(message, args){
        const Response = cloverosArray[Math.floor(Math.random() * cloverosArray.length)]
        message.channel.send(Response);
    }
}   