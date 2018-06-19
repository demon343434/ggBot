const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "<>"

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("NO U");


    }


})


Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("there is only <>hello u ass");


    }


})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "baka")){
        message.channel.send("NO ahsan because offend me that im new at coding :(");


    }


})

client.login(process.env.BOT_TOKEN);
