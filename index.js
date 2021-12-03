const weightedRandom = require('weighted-random');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = "!";

const maps = ["ascent", "bind", "breeze", "fracture", "haven", "icebox", "split"]

var defaultMap = "ascent"


client.on('ready', () => {
  console.log(`Bot ${client.user.tag} is logged in!`);
});

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "config") {
    if(args.length == 0){
      message.reply(`Config is currently ${defaultMap}`); 
    }
    else {
      defaultMap = args[0].toLowerCase();
      if (!maps.includes(defaultMap)) {
        message.reply('Invalid map selected, learn to type or learn the game');
      }
      else {
        message.reply(`Config has been updated to ${defaultMap}`);
      }
    }
  }

  else if (command === "help") {
    message.reply("short usage guide: \n !config to see what the current map setting is \n !config <MAP> to update to a new map \n !call to call for a play")
  }

  else if (command === "call") {
    switch(defaultMap) {
      case "ascent":
        var plays = [
          { rating: 9, title: 'Walk push A' },
          { rating: 9, title: 'Walk push B' },
          { rating: 7.5, title: '3/2 split A/B' },
          { rating: 7.5, title: '3/2 split B/A' },
          { rating: 5, title: 'Hard rush A' },
          { rating: 5, title: 'Hard rush B' },
          { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
        ];
        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "bind":
        var plays = [
          { rating: 9, title: 'Walk push A' },
          { rating: 9, title: 'Walk push B' },
          { rating: 7.5, title: '3/2 split A/B' },
          { rating: 7.5, title: '3/2 split B/A' },
          { rating: 5, title: 'Hard rush A' },
          { rating: 5, title: 'Hard rush B' },
          { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
        ];
        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "breeze":
        var plays = [
          { rating: 9, title: 'Walk push A' },
          { rating: 9, title: 'Walk push B' },
          { rating: 7.5, title: '3/2 split A/B' },
          { rating: 7.5, title: '3/2 split B/A' },
          { rating: 5, title: 'Hard rush A' },
          { rating: 5, title: 'Hard rush B' },
          { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
        ];
        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "fracture":
        var plays = [
          { rating: 9, title: 'Walk push A' },
          { rating: 9, title: 'Walk push B' },
          { rating: 7.5, title: '3/2 split A/B' },
          { rating: 7.5, title: '3/2 split B/A' },
          { rating: 5, title: 'Hard rush A' },
          { rating: 5, title: 'Hard rush B' },
          { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
        ];
        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "haven":
        var plays = [
          { rating: 9, title: 'Walk push A' },
          { rating: 9, title: 'Walk push B' },
          { rating: 7.5, title: '3/2 split A/B' },
          { rating: 7.5, title: '3/2 split B/A' },
          { rating: 5, title: 'Hard rush A' },
          { rating: 5, title: 'Hard rush B' },
          { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
        ];
        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;        
        break;
      case "icebox":
        var plays = [
          { rating: 9, title: 'Walk push A' },
          { rating: 9, title: 'Walk push B' },
          { rating: 7.5, title: '3/2 split A/B' },
          { rating: 7.5, title: '3/2 split B/A' },
          { rating: 5, title: 'Hard rush A' },
          { rating: 5, title: 'Hard rush B' },
          { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
        ];
        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
        case "split":
          var plays = [
            { rating: 9, title: 'Walk push A' },
            { rating: 9, title: 'Walk push B' },
            { rating: 7.5, title: '3/2 split A/B' },
            { rating: 7.5, title: '3/2 split B/A' },
            { rating: 5, title: 'Hard rush A' },
            { rating: 5, title: 'Hard rush B' },
 	          { rating: 5, title: '4 Push A, 1 lurks' },
            { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
            { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
          ];
          
          var weights = plays.map(function (play) {
            return play.rating;
          });
          
          var selectionIndex = weightedRandom(weights); 
          var play = plays[selectionIndex].title;
          break;
      default:
        message.reply("config was not set, this should never happen, call Austin")
    }
    message.reply(`${play}`);
  }
  else {
    message.reply("Invalid command, please go to https://www.typingclub.com/kids-typing to practice your skills")
  }
});

client.login(process.env.BOT_TOKEN);








