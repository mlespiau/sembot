
var Botkit = require('botkit');
var TaskManager = require('./taskmanager.js');
var tm = new TaskManager();
tm.add('Task 1');
tm.add('Task 2');
tm.add('Task 3');

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var controller = Botkit.slackbot({
 debug: false
});

controller.spawn({
  token: process.env.token
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});


controller.hears(['hello','hi', 'hola'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Hola viteh");
});

controller.hears(['quien es el mas gamer?'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message, "@lean por lejos! pero le sigue @milhouseonfire");
});

controller.hears(['quien es el que le hace segunda @matu?'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message, "claramente @rhaunter");
});

controller.hears(['daily review'], ['direct_message'], function(bot, message) {
    bot.reply(message, "Task list is the following: " + tm.asString());
});

controller.hears(['add task (.*)'], ['direct_message'], function(bot, message) {
    var newTask = message.match[1]; //match[1] is the (.*) group. match[0] is the entire group (open the (.*) doors).
    tm.add(newTask);
    bot.reply(message, "Added task, new task list is the following: " + tm.asString());
});

controller.hears(['dm me'],['direct_message','direct_mention'],function(bot,message) {
  bot.startConversation(message,function(err,convo) {
    convo.say('Heard ya');
  });

  bot.startPrivateConversation(message,function(err,dm) {
    dm.say('Private reply!');
  });

});
