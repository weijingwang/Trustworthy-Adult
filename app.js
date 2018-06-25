const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./config.json");

const current_year = new Date().getFullYear();

//emoji



bot.on("ready", () => {
  console.log(`Botbot start with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds. GO AIKO KITSUNE CHAN~~!!! (^o^)`);
  bot.user.setActivity(`do /help`);
});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`do /help Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //detect "fuck" || "shit" || "bitch"

  //use this function, checks if badWord is inside the system, if true, outputs stuffToSay
  function checkIfBadWords(badWord,stuffToSay) {
    if (command.toLowerCase().includes(badWord)) {
      //if command contains BadWord
      message.channel.send(stuffToSay);
      //send message to the channel stuffToSay
      return true;
    }
  }

  //the ".toLowerCase()" check all instances of the word, regardless of capitalization
checkIfBadWords("fuck","HEY!!! WHY DO YOU THINK THAT **LANGUAGE** IS **APPROPRIATE** ON **THIS** SERVER HUH???!!!");
checkIfBadWords("shit",'**not cool not cool** smh... tsk... small fry... ಠ_ಠ');
checkIfBadWords("bitch","Did you mean: *a female dog, wolf, fox, or otter?*")
checkIfBadWords("bonzibuddy","Y(^o^)Y https://www.youtube.com/watch?v=MiRaRy4Qq8g Y(^o^)Y");
//sad
var gift_emojis = ["cookie and fake eat it. <:cookie:460639369640935429>","chicken leg and fake eat it. <:poultry_leg:460641620983939102>",
"kawaii keku and fake tabemasu desu. <:cake:460642307062890496>","sugoi hambaga and fake tabemasu desu. <:hamburger:460642663704559617>",
"super kawaii midori oocha and drink it (High quality super safe will make you feel good version ^_^).<:tea:460643094560374804>",
"牛奶然後把它喝完。<:milk:460643760150151176>"]
var gift_emoji = gift_emojis[Math.floor(Math.random() * gift_emojis.length)];
checkIfBadWords("sad",`Take this virtual ${gift_emoji} I hope you feel better soon!`)

  //sorry i type that it is against my religion but it is right sorry
  //commands 
  if(checkIfBadWords("/ping")) {
    message.channel.send("Pong!");
  }

  if(command === "<@459824205291192320>") {
    message.channel.send("hi!")    
  }


  if(command === "/say") {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

  if(command === "/info") {
    message.channel.send("ok so on June 22 2018, I made this bot\
      I saw a lot of bots but all of them didn't work for me and they made me\
      really mad. So I decided to make my own bot by glue coding since I\
      don't know javascript yeah?\
      this bot is currently run on my computer so it will only be on when I\
      am on so far. I might migrate it to somewhere else maybe.\
      thank kyler for some python syntax --> js help!\
      This bot is actually like a branch-off\
      of the original bot called *Trustable Adult* (The one made on June 22 2018).\
      I do not know what happened? (❁°͈▵°͈)\
      Trustable Adult used to be so trustworthy but it started\
      censoring out god and xxxxxxxxxxx!!! That is against my religion!!!\
      THIS IS OBVIOUSLY THE MORE TRUSTABLE ADULT HERE SINCE THIS AIKO KITSUNE CHAN\
      DOES NOT ENCOURAGE HEAVY CENSORSHIP. Trusworthy adults may not like too much\
      cursing but censoring things in a not-censored enviroment is just not very right.\
      Trustable Adult became Helicoper Parent Adult!!! Oh no!! 大変だ！！！ 不好！\
      Hopefully you guys support me and we will convert the now *Helicopter Parent Adult*\
      into believing our beliefs! GOGOGO!!! June 24, 2018'");
  }

  if(command === "/github") {
    message.channel.send("Here is the link to the Github Repo: https://github.com/weijingwang/Trustworthy-Adult");
  }

  if(command === "/vn") {
    message.channel.send("you wannna know huh huh? https://kawaiikitsunelover645.itch.io/sounds-of-the-night");
  }


//joke
var pickuplines = ["Are you a sea lion? Because I can sea you lion in my bed tonight!",
"I may not go down in history, but I'll go down on you.","Do you have an Asian passport? Because I'm China get into your Japantees",
"Are you a farmer? Because you’ve got some big, round, beautiful melons!","My love for you is like diarrhea. I just can't hold it in.",
"That’s a beautiful smile, but it’d look even better if it was all you were wearing.","If you’re feeling down, I can feel you up.",
"I’m making a documentary on rare unique and exotic things on earth. Can we set up a lunch this afternoon to talk about you?",
"I’m going outside to make out. Care to join me?","Pizza is my second favourite thing to eat in bed."];

var random_pickupline = pickuplines[Math.floor(Math.random() * pickuplines.length)];


  if(command === "/pickupline") {
    message.channel.send(random_pickupline);
  }

//our product is quality that you can trust
var quality_quotes = ["A Trustworthy Adult is someone you can trust. Who can trust an adult who censors things?",
"Do you trust me? You should. I am a Trustworth Adult.",
"Liars can't be trusted. I don't lie or hide things. You can trust me V(^_^)V",
"Trust can be built over time. Nice to meet you! I am the Trustworthy Adult AKA Aiko kitsune chan the coolest kitsune of the cool kitsunes",
"A friend is someone you trust. Someone you trust is a friend.",
"I stand up for others when I can. I will call out anyone who tries to say any big boy words. >:(",
"Trust takes years to build, seconds to break, and forever to repair. I am a smart kitsune...",
"“The best way to find out if you can trust somebody is to trust them.” – Ernest Hemingway",
"“Whoever is careless with the truth in small matters cannot be trusted with important matters.” – Albert Einstein"];

var random_quote = quality_quotes[Math.floor(Math.random() * quality_quotes.length)];


  if(command === "/quote") {
    message.channel.send(random_quote);
  }

var the_jokes = ["<:french_bread:460645090168143874> mmmmshph!! HAHHAAHAHAHHAHHHAHAHAHAHHAHAAHHAHAHAHHAHAHAHHAHAHHHAHHAH!!!",
"What happens when you step on a grape? It lets out a little WINE!!! HAHHAAHAHAHHAHHHAHAHAHAHHAHAAHHAHAHAHHAHAHAHHAHAHHHAHHAH!!!!",
"What happens when a frog's car breaks down? It gets TOAD!!! HAHHAAHAHAHHAHHHAHAHAHAHHAHAAHHAHAHAHHAHAHAHHAHAHHHAHHAH!!!!!!!!!! HAHAHAHHHAHAHAH!!!!",
"What did the flag say to the other flag??? ^o^ Nothing, it just WAVED!!! HAHHAAHAHAHHAHHHAHAHAHAHHAHAAHHAHAHAHHAHAHAHHAHAHHHAHHAH!!!! HAHAHHAHA!",
"What do you call a picnic except with all pigs?? <:thinking:460646785950416901> A **PIGNIC**!!! HAHHAAHAHAHHAHHHAHAHAHAHHAHAAHHAHAHAHHAHAHAHHAHAHHHAHHAH!!!!",
"Why could'nt the skeleton ask a girl out??? <:skull:460647047255687168> Because it had NO GUTS!!! HAHHAAHAHAHHAHHHAHAHAHAHHAHAAHHAHAHAHHAHAHAHHAHAHHHAHHAH!!"];

var joke = the_jokes[Math.floor(Math.random() * the_jokes.length)];


  if(command === "/joke") {
    message.channel.send(joke);
  }

//help
  if(command === "/help") {

    message.channel.send({embed: {
    color: 3447003,
    description: "*I am a trustworthy adult and i help and i dont like bad boys/girls*/",
    author: {
      name: bot.user.username + "'s",
      icon_url: bot.user.avatarURL
    },
    title: "xX_HELP_Xx",
    fields: [{
        name: "/ping",
        value: "I say Pong!"
      },
      {
        name: "/say",
        value: "make me say something"
      },
      {
        name: "/pickupline",
        value: "say funny stuff (use of arrays)"
      },
      {
        name: "/quote",
        value: "get a quality quote about how Trustworthy Adult is trustworthy!! (also use of arrays)"
      },
      {
        name: "/joke",
        value: "tell funniest jok es"
      },
      {
        name: "/info",
        value: "make me explain myself"
      },
      {
        name: "/github",
        value: "get github repo link"
      },
      {
        name: "/vn",
        value: "show suprise"
      },
      {
        name: "sad",
        value: "Do if you're sad. Aiko Kitsune Chan tries to be nice and make you less-sad"
      }
    ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© 2018-" + current_year + " Weijing Wang"
    }
  }
});
  }

});

bot.login(config.token);