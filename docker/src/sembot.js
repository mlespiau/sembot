
var Botkit = require('botkit');
var tasks = ['Task 1', 'Task 2', 'Task 3'];

var formatTasks = function() {
    var out = '';
    for (i = 0; i < tasks.length; ++i) {
        out += ' * ' + tasks[i] + "\n";
    }
    return out;
}

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
    bot.reply(message, "Task list is the following: " + formatTasks());
});

controller.hears(['add task (.*)'], ['direct_message'], function(bot, message) {
    var newTask = message.match[1]; //match[1] is the (.*) group. match[0] is the entire group (open the (.*) doors).
    tasks[tasks.length] = newTask;
    bot.reply(message, "Added task, new task list is the following: " + formatTasks());
});

controller.hears(['dm me'],['direct_message','direct_mention'],function(bot,message) {
  bot.startConversation(message,function(err,convo) {
    convo.say('Heard ya');
  });

  bot.startPrivateConversation(message,function(err,dm) {
    dm.say('Private reply!');
  });

});
