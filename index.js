const Discord =require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const bot = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MESSAGES], "partials":["MESSAGE","CHANNEL"]});




//---------------------------------------------------------------------------------------------------------------------------------------------------------------

bot.on("ready", () => {
    console.log('Bot is online');

})




//Willkommens Verlassensnachricht 


bot.on("guildMemberAdd", member => {
    if (ids.includes(member.id)) {
        member.ban() // or `member.kick()`
    }
 })


//userinfo




//---------------------------------------------------------------------------------------------------------------------------------------------------------------





//---------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.login(config.token)