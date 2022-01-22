const weightedRandom = require('weighted-random');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = "!";

const maps = ["ascent", "bind", "breeze", "fracture", "haven", "icebox", "split"]

const pistolbase = [
  { rating: 9, title: 'Walk push A' },
  { rating: 9, title: 'Walk push B' },
  { rating: 7.5, title: '3/2 split A/B' },
  { rating: 7.5, title: '3/2 split B/A' },
  { rating: 7, title: 'Hard rush A' },
  { rating: 7, title: 'Hard rush B' },
  { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
  { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
  { rating: 3.5, title: '3/1/1 split A/B, one solo distracts for 30s, other solo(ehsea) lurks' },
  { rating: 3.5, title: '3/1/1 split B/A, one solo distracts for 30s, other solo(ehsea) lurks' }
];

const econbase = [
  { rating: 9, title: 'Walk push A' },
  { rating: 9, title: 'Walk push B' },
  { rating: 7.5, title: '3/2 split A/B' },
  { rating: 7.5, title: '3/2 split B/A' },
  { rating: 5, title: 'Hard rush A' },
  { rating: 5, title: 'Hard rush B' },
  { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
  { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
  { rating: 3.5, title: '3/1/1 split A/B, one solo distracts for 30s, other solo(ehsea) lurks' },
  { rating: 3.5, title: '3/1/1 split B/A, one solo distracts for 30s, other solo(ehsea) lurks' },
];

const fullbase = [
  { rating: 9, title: 'Walk push A' },
  { rating: 9, title: 'Walk push B' },
  { rating: 7.5, title: '3/2 split A/B' },
  { rating: 7.5, title: '3/2 split B/A' },
  { rating: 5, title: 'Hard rush A' },
  { rating: 5, title: 'Hard rush B' },
  { rating: 3.5, title: '4/1 split A/B, solo distracts for 30s' },
  { rating: 3.5, title: '4/1 split B/A, solo distracts for 30s' },
  { rating: 3.5, title: '3/1/1 split A/B, one solo distracts for 30s, other solo(ehsea) lurks' },
  { rating: 3.5, title: '3/1/1 split B/A, one solo distracts for 30s, other solo(ehsea) lurks' },
  { rating: 4.5, title: 'Default. Everyone split up, search for openings, hide the spike in a central location, prepare for quick rotations when an opening is spotted' },

];

var defaultMap = "ascent"
var currcommand = "fullbuy"

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} is logged in!`);
});

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  var command = args.shift().toLowerCase();
  if (command === "!"){ 
    command = currcommand;
  }
  else {
    currcommand = command;
  }

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

  else if (command === "fnfs") {
    message.reply(`Welcome to the Friday Night Five Stack! Here's some general reminders to help get you in the right headspace:
    - Play as a team, not 5 individuals!
    - Plan for trades, try to pick trading partners at the start of the game or round!
    - Buy as a team! We have !pistol, !econ, and !fullbuy as options to help the team align!
    - Stick to the plan as much as possible, and communicate your intentions to the team! Talking is important!
    - Don't be a dick, we're all friends here! Raging, insults, and calling for knife fights in mid in a comp game is a good way to not get invited back.
    - Have fun!
    `)
  }

  else if (command === "pistol") {
    switch(defaultMap) {
      case "ascent":
        var plays = pistolbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "bind":
        var plays = pistolbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "breeze":
        var plays = pistolbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "fracture":
        var plays = [{ rating: 5, title: 'A site through A Main and Dish' },
        { rating: 5, title: 'A site through A Main and Ropes' },
        { rating: 5, title: 'B site through Arcade and B Main' },
        { rating: 5, title: 'B site through B Main' },
        { rating: 5, title: 'B site through Arcade and Tower' },
        { rating: 6, title: 'Play for picks, Attacker Side Spawn' },
        { rating: 6, title: 'Play for picks, Attacker Side Bridge' },
        { rating: 1.5, title: 'Play for picks, All 4 corners of the map' },
      ];
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "haven":

        var addplays = [{ rating: 9, title: 'Walk push C' },
        { rating: 7.5, title: '3/2 split B/C' },
        { rating: 5, title: 'Hard rush C' },
        { rating: 3.5, title: '4/1 split A/C, solo distracts for 30s' },
        { rating: 3.5, title: '4/1 split B/C, solo distracts for 30s' }         
      ]

        var plays = pistolbase.concat(addplays)
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;        
        break;
      case "icebox":
        var plays = pistolbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;

        case "split":
          var plays = pistolbase;
          var addplays = [{ rating: 5, title: 'A site through mid, via B Link and A Sewer ' },
          { rating: 5, title: 'B site through mid, via B Link and A Sewer' },
          { rating: 6, title: 'A site through mid and A main' },
          { rating: 6, title: 'B site through mid and B main' },      
        ]
  
          var plays = pistolbase.concat(addplays)
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

  else if (command === "econ") {
    switch(defaultMap) {
      case "ascent":
        var plays = econbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "bind":
        var plays = econbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "breeze":
        var plays = econbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "fracture":
        var plays = [{ rating: 5, title: 'A site through A Main and Dish' },
        { rating: 5, title: 'A site through A Main and Ropes' },
        { rating: 5, title: 'B site through Arcade and B Main' },
        { rating: 5, title: 'B site through B Main' },
        { rating: 5, title: 'B site through Arcade and Tower' },
        { rating: 6, title: 'Play for picks, Attacker Side Spawn' },
        { rating: 6, title: 'Play for picks, Attacker Side Bridge' },
        { rating: 1.5, title: 'Play for picks, All 4 corners of the map' },
      ];;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "haven":
        var addplays = [{ rating: 9, title: 'Walk push C' },
          { rating: 7.5, title: '3/2 split B/C' },
          { rating: 5, title: 'Hard rush C' },
          { rating: 3.5, title: '4/1 split A/C, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/C, solo distracts for 30s' }         
        ]
        var plays = econbase.concat(addplays)
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;        
        break;
      case "icebox":
        var plays = econbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
        case "split":
          var plays = econbase;
          var addplays = [{ rating: 5, title: 'A site through mid, via B Link and A Sewer ' },
          { rating: 5, title: 'B site through mid, via B Link and A Sewer' },
          { rating: 6, title: 'A site through mid and A main' },
          { rating: 6, title: 'B site through mid and B main' },      
          ]
  
          var plays = pistolbase.concat(addplays)       
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
  
  else if (command === "fullbuy") {
    switch(defaultMap) {
      case "ascent":
        var plays = fullbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "bind":
        var plays = fullbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "breeze":
        var plays = fullbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "fracture":
        var plays = [{ rating: 5, title: 'A site through A Main and Dish' },
        { rating: 5, title: 'A site through A Main and Ropes' },
        { rating: 5, title: 'B site through Arcade and B Main' },
        { rating: 5, title: 'B site through B Main' },
        { rating: 5, title: 'B site through Arcade and Tower' },
        { rating: 6, title: 'Play for picks, Attacker Side Spawn' },
        { rating: 6, title: 'Play for picks, Attacker Side Bridge' },
        { rating: 1.5, title: 'Play for picks, All 4 corners of the map' },
      ];        
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      case "haven":
        var addplays = [{ rating: 9, title: 'Walk push C' },
          { rating: 7.5, title: '3/2 split B/C' },
          { rating: 5, title: 'Hard rush C' },
          { rating: 3.5, title: '4/1 split A/C, solo distracts for 30s' },
          { rating: 3.5, title: '4/1 split B/C, solo distracts for 30s' }         
      ]
        var plays = fullbase.concat(addplays)
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;        
        break;
      
        case "icebox":
        var plays = fullbase;
        var weights = plays.map(function (play) {
          return play.rating;
        });
        
        var selectionIndex = weightedRandom(weights); 
        var play = plays[selectionIndex].title;
        break;
      
        case "split":
          var plays = fullbase;
          var addplays = [{ rating: 5, title: 'A site through mid, via B Link and A Sewer ' },
          { rating: 5, title: 'B site through mid, via B Link and A Sewer' },
          { rating: 6, title: 'A site through mid and A main' },
          { rating: 6, title: 'B site through mid and B main' },      
        ]
  
          var plays = pistolbase.concat(addplays)
          
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

  else if (command === "ehsea") {
    message.reply("https://www.youtube.com/watch?v=cvaIgq5j2Q8")
  }

  else {
    message.reply("Invalid command, please go to https://www.typingclub.com/kids-typing to practice your skills")
  }
});

client.login(process.env.BOT_TOKEN);
