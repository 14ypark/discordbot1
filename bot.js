var Discord = require("discord.js")
var fs = require('fs');
var auth = require("./auth.json");
var yt = require("./youtube_plugin");
var youtube_plugin = new yt();
var token = auth.bot_token;


var myBot = new Discord.Client({
  autorun: true
});

var prefix = '!';

myBot.on('message', message => {
  if(message.content[0]=== prefix){
  var input = message.content.split(" ")[0].substring(1);
  var input2 = message.content.substring(input.length +2);

  if (input ===  'hi'){
    message.channel.sendMessage('Hi '+ message.author.toString(), {tts:true});
  }
  if(input === 'say'){
    message.channel.sendMessage(input2, {tts:true});
  }
  if(input === 'youtube'){
    youtube_plugin.respond(input2, message.channel, myBot);
  }
}
});

myBot.login(token);
myBot.on('ready', ()=>{
  console.log("it is running");
})
