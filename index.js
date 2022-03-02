const weightedRandom = require('weighted-random');

const fs = require('fs');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = "!";

const maps = ["ascent", "bind", "breeze", "fracture", "haven", "icebox", "split"];

var players = ["Dewie", "Ehsea", "cicada mojo", "Direktor", "Ressk"];

var rawdata = "";

var pistolplays = "";

var econplays = "";

var fullplays = "";

// Note that the base set is NOT included for Fracture

var currentMap = "not set"
var currcommand = "fullbuy"

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} is logged in!`);
});

client.on("messageCreate", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  var command = args.shift().toLowerCase();
  if (command === "!") {
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
    if (args.length == 0) {
      message.reply(`Config is currently ${currentMap}`);
    }
    else {
      currentMap = args[0].toLowerCase();
      if (!maps.includes(currentMap)) {
        currentMap = "not set";
        message.reply('Invalid map selected, learn to type or learn the game');
      }
      else {
        switch (currentMap) {
          case "ascent":
            rawdata = fs.readFileSync('classes/Basepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Baseecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Basefullbuy.json');
            fullplays = JSON.parse(rawdata);
            break;
          case "bind":
            rawdata = fs.readFileSync('classes/Basepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Baseecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Basefullbuy.json');
            fullplays = JSON.parse(rawdata);
            break;

          case "breeze":
            rawdata = fs.readFileSync('classes/Basepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Baseecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Basefullbuy.json');
            fullplays = JSON.parse(rawdata);
            break;

          case "fracture":
            rawdata = fs.readFileSync('classes/Fracturepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Fractureecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Fracturefull.json');
            fullplays = JSON.parse(rawdata);
            break;

          case "haven":
            rawdata = fs.readFileSync('classes/Basepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Baseecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Basefullbuy.json');
            fullplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Havenpistol.json');
            havenpistol = JSON.parse('rawdata');
            pistolplays = pistolplays.concat(havenpistol);
            rawdata = fs.readFileSync('classes/Havenecon.json');
            havenecon = JSON.parse('rawdata');
            econplays = econplays.concat(havenecon);
            rawdata = fs.readFileSync('classes/Havenfull.json');
            havenfull = JSON.parse('rawdata');
            fullplays = fullplays.concat(havenfull);
            break;

          case "icebox":
            rawdata = fs.readFileSync('classes/Basepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Baseecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Basefullbuy.json');
            fullplays = JSON.parse(rawdata);
            break;

          case "split":
            rawdata = fs.readFileSync('classes/Basepistol.json');
            pistolplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Baseecon.json');
            econplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Basefullbuy.json');
            fullplays = JSON.parse(rawdata);
            rawdata = fs.readFileSync('classes/Splitpistol.json');
            splitpistol = JSON.parse('rawdata');
            pistolplays = pistolplays.concat(splitpistol);
            rawdata = fs.readFileSync('classes/Splitecon.json');
            splitecon = JSON.parse('rawdata');
            econplays = econplays.concat(splitpistol);
            rawdata = fs.readFileSync('classes/Splitfull.json');
            splitfull = JSON.parse('rawdata');
            fullplays = fullplays.concat(splitpistol);
            break;
        }
        message.reply(`Config has been updated to ${currentMap}`);
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

  else if (command === "roulette") {
    var currplayer = players[Math.floor(Math.random() * players.length)];
    message.reply(`${currplayer} has been selected as shotcaller this round!`)
  }

  else if (command === "pistol") {
    switch (currentMap) {
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
    switch (currentMap) {
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
    switch (currentMap) {
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
