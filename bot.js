var Discord = require("discord.js")
var fs = require('fs');
var auth = require("./auth.json")
var token = auth.bot_token;

var myBot = new Discord.Client({
  autorun: true
});

var prefix = '!';


myBot.on('message', message => {
  if (message.content === prefix + 'y') {
    message.channel.sendMessage('yeon joon sucks at hanzo');
  }

});


myBot.login(token);
myBot.on('ready', ()=>{
  console.log("it is running");
})
