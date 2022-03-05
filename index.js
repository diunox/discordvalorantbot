const weightedRandom = require('weighted-random');

const fs = require('fs');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = "!";
// globals go here because it's a bot with no concept of state
var players = ["Dewie", "Ehsea", "AnMex", "Direktor", "Ressk"];
var currentMap = "ascent";
// Note that the base set is NOT included for Fracture

function loadPlays(currentMap) {
  plays = ""
  switch (currentMap) {
    case "ascent":
      rawdata = fs.readFileSync('playlibrary/Basepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Baseecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Basefullbuy.json');
      plays[2] = JSON.parse(rawdata);
      break;
    case "bind":
      rawdata = fs.readFileSync('playlibrary/Basepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Baseecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Basefullbuy.json');
      plays[2] = JSON.parse(rawdata);
      break;

    case "breeze":
      rawdata = fs.readFileSync('playlibrary/Basepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Baseecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Basefullbuy.json');
      plays[2] = JSON.parse(rawdata);
      break;

    case "fracture":
      rawdata = fs.readFileSync('playlibrary/Fracturepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Fractureecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Fracturefull.json');
      plays[2] = JSON.parse(rawdata);
      break;

    case "haven":
      rawdata = fs.readFileSync('playlibrary/Basepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Baseecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Basefullbuy.json');
      plays[2] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Havenpistol.json');
      havenpistol = JSON.parse(rawdata);
      plays[0] = plays[0].concat(havenpistol);
      rawdata = fs.readFileSync('playlibrary/Havenecon.json');
      havenecon = JSON.parse(rawdata);
      plays[1] = plays[1].concat(havenecon);
      rawdata = fs.readFileSync('playlibrary/Havenfull.json');
      havenfull = JSON.parse(rawdata);
      plays[2] = plays[2].concat(havenfull);
      break;

    case "icebox":
      rawdata = fs.readFileSync('playlibrary/Basepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Baseecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Basefullbuy.json');
      plays[2] = JSON.parse(rawdata);
      break;

    case "split":
      rawdata = fs.readFileSync('playlibrary/Basepistol.json');
      plays[0] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Baseecon.json');
      plays[1] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Basefullbuy.json');
      plays[2] = JSON.parse(rawdata);
      rawdata = fs.readFileSync('playlibrary/Splitpistol.json');
      splitpistol = JSON.parse(rawdata);
      plays[0] = plays[0].concat(splitpistol);
      rawdata = fs.readFileSync('playlibrary/Splitecon.json');
      splitecon = JSON.parse(rawdata);
      plays[1] = plays[1].concat(splitecon);
      rawdata = fs.readFileSync('playlibrary/Splitfull.json');
      splitfull = JSON.parse(rawdata);
      plays[2] = plays[2].concat(splitfull);
      break;

  }
  console.log(plays[0]); 
  plays[0] = plays[0].map(function (play) {
    play.playtext.replace("PlayerOne", players[0]);
    play.playtext.replace("PlayerTwo", players[1]);
    play.playtext.replace("PlayerThree", players[2]);
    play.playtext.replace("PlayerFour", players[3]);
    play.playtext.replace("PlayerFive", players[4]);
    return play;
  });

  plays[0] = plays[1].map(function (play) {
    play.playtext.replace("PlayerOne", players[0]);
    play.playtext.replace("PlayerTwo", players[1]);
    play.playtext.replace("PlayerThree", players[2]);
    play.playtext.replace("PlayerFour", players[3]);
    play.playtext.replace("PlayerFive", players[4]);
    return play;
  });

  plays[0] = plays[2].map(function (play) {
    play.playtext.replace("PlayerOne", players[0]);
    play.playtext.replace("PlayerTwo", players[1]);
    play.playtext.replace("PlayerThree", players[2]);
    play.playtext.replace("PlayerFour", players[3]);
    play.playtext.replace("PlayerFive", players[4]);
    return play;
  });

  return plays;
}

client.on('ready', () => {
    console.log(`Bot ${client.user.tag} is logged in!`);
  });

  client.on("messageCreate", function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const maps = ["ascent", "bind", "breeze", "fracture", "haven", "icebox", "split"];

    var plays = ""

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
          plays = loadPlays(currentMap);
          pistolplays = plays[0];
          econplays = plays[1];
          fullplays = plays[2];
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
      var weights = pistolplays.map(function (play) {
        return play.rating;
      });

      var selectionIndex = weightedRandom(weights);
      var play = pistolplays[selectionIndex].playtext;
      message.reply(`${play}`);
    }

    else if (command === "econ") {
      var weights = econplays.map(function (play) {
        return play.rating;
      });

      var selectionIndex = weightedRandom(weights);
      var play = econplays[selectionIndex].playtext;
      message.reply(`${play}`);
    }

    else if (command === "fullbuy") {
      var weights = fullplays.map(function (play) {
        return play.rating;
      });

      var selectionIndex = weightedRandom(weights);
      var play = fullplays[selectionIndex].playtext;
      message.reply(`${play}`);
    }

    else if (command === "ehsea") {
      message.reply("https://www.youtube.com/watch?v=cvaIgq5j2Q8");
    }

    else if (command === "roster") {
      if (args.length != 5) {
        message.reply("Invalid number of players for the roster");
      }
      else {
        players = args.slice(-5);
        plays = loadPlays(currentMap);
        pistolplays = plays[0];
        econplays = plays[1];
        fullplays = plays[2];
      }
    }

    else {
      message.reply("Invalid command, please go to https://www.typingclub.com/kids-typing to practice your skills")
    }
  });

  client.login(process.env.BOT_TOKEN);
