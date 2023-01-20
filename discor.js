const Discord = require("discord.js");
const messageCollection = require("./index").messageCollection;

const client = new Discord.Client();

const commandNames = ["calc", "lv", "help"]
const commandFunctions = {
    calc: c => c.reply(Math.floor(Math.random() * 1000)),
    lv: (user) => c.reply(calculaNivel(user)),
    help: () => c.reply("usa /calc, /lv o /help para ver
