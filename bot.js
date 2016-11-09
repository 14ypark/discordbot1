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
    message.channel.sendMessage('yeon joon sucks at hanzo',   { tts: true});
  }
  if (message.content === prefix + 'hi'){
    message.channel.sendMessage('Hi '+ message.author.toString(), {tts:true});
  }

});
var commands= {
  "say": {
    process: function(myBot, msg, stuff){message.channel.sendMessage(stuff);}
  }
}
function checkforcmd(msg, isEdit){
  if(msg.author.id != myBot.user.id && (msg.content[0] === prefix)) {
    var cmdtext = msg.content.split(" ")[0].substring(1);
    var stuff = msg.content.substring(cmdtext.length +2);
    console.log(cmdtext);
    console.log(stuff);
  }
  console.log(stuff);
  var cmd = commands[cmdtext];
  console.log(cmd);

  if(cmd){
    try{
      console.log("running command" + cmdtext);
      cmd.process(myBot,msg,stuff);
    }catch(e){
      msg.channel.sendMessage("command does not exist");
    }
  }
}
myBot.on("message", (msg) => checkforcmd(msg, false));


myBot.login(token);
myBot.on('ready', ()=>{
  console.log("it is running");
})
