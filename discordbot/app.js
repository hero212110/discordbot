const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {

  function msg_channel(val) {
    msg.channel.send(val);
  }
  function msg_reply(val) {
    msg.reply(val);
  }

  function keyword_match() {
    var array = ['大二', '可撥', '高雄', '韓', '開心', '噁', '++'];
    var array2 = ['Sophomore is here! ヽ(✿ﾟ▽ﾟ)ノ https://media.52poke.com/wiki/9/9a/057Primeape.png',
      'What a deplorable guy! (ㆆᴗㆆ)',
      'Kaohsiung is so fun! (｡◕∀◕｡) https://img.ltn.com.tw/Upload/liveNews/BigPic/600_phpoBmgz6.jpg',
      'Taiwan Special Administrative Region :flag_tw: of the Peoples Republic of China :flag_cn: Associate Clerk :bookmark:  - Korean Fish! :fish:',
      'Sophomore is the most happiest! (ﾉ>ω<)ﾉ',
      'So disgusting! (((ﾟДﾟ;)))',
      'Sophomore also want to participate in ! (`・ω・´)'];

    for (var i = 0; i < array.length; i++) {
      //篩選陣列中的關鍵字是否存在
      if (keyword.indexOf(array[i], 0) >= 0) {
        msg_channel(array2[i]);
      }
    }

    var array3 = ['我是個消極', '救我', '安'];
    var array4 = ['You are really a deplorable guy! Σ(ﾟдﾟ)',
      'Sophomore come to rescue you! (`・ω・´)',
      'Sophomore says Hello to you! ( ￣ 3￣)y▂ξ'];

    for (var i = 0; i < array3.length; i++) {
      if (keyword.indexOf(array3[i], 0) >= 0) {
        msg_reply(array4[i]);
      }
    }
  }

  function random_decision() {
    var food_array = ['麥當勞', '牛肉麵', '便當', '義大利麵', '南部麵店', '吃ㄐㄐ拉', '熱炒', '粥', '肯德基', '雞排', '雞腿飯', '排骨飯', '鐵板燒',
      '雞肉飯', '滷肉飯', '肉燥飯', '小卷米粉', '農家菜', '大腸麵線', '砂鍋魚頭', '小火鍋', '自助餐', '軟骨飯', '丼飯', '拉麵', '壽司', '羊肉店', '越南河粉',
      '螺螄粉', '新疆拌麵', '土魠魚羹', '浮水魚羹', '牛肉湯', '羊肉爐', '小7', '全家', '蚵仔煎', '臭豆腐', '鬆餅', '炸雞', '鹽酥雞', '薯條',
      '紅燒肉', '肉夾饃', '炒餅', '豬腳飯', '燒臘', '小籠包', '蒸餃', '水晶餃', '水餃', '炸醬麵', '肉包'];

    var game_array = ['守望先鋒', '英雄聯盟', 'Apex英雄', 'PUBG LITE', 'solo', '影之詩', '阿瓦隆', '疾風之刃', '垃圾桌遊',
      '玩ㄐㄐ 去讀書!', '全民打棒球'];
    var food_reply = food_array[Math.floor(Math.random() * food_array.length)] + ' ! （●′∀‵）ノ♡';
    var game_reply = game_array[Math.floor(Math.random() * game_array.length)] + ' ! （●′∀‵）ノ♡';

    switch (keyword) {
      case '!吃啥':
        msg_reply(food_reply);
        break;
      case '!玩啥':
        msg_reply(game_reply);
        break;
    }
  }

  function insulting() {

    var insulting_array = ['幹你', '幹您', '幹妳', '幹ㄋ'];
    var insulting_activate = false;

    for (var i = 0; i < insulting_array.length; i++) {
      if (keyword.indexOf(insulting_array[i], 0) >= 0) {
        msg.delete()
          .catch(console.error);
        insulting_activate = true;

      }
    }

    if (insulting_activate == true) {
      msg_reply('Do not use the insulting words! ヽ(#`Д´)ﾉ');
    }

  }

  function delete_poke() {

    if (keyword.indexOf('pokémon', 0) >= 0) {
      msg.delete()
        .catch(console.error);
    }

  }


  function negative() {

    var negative_val = Math.floor(Math.random() * 100);
    var negative_advice = '';
    switch (true) {
      case (negative_val == 0):
        negative_advice = '0消極?????';
        break;
      case (negative_val > 0 && negative_val < 60):
        negative_advice = '不夠消極 搞毛阿!';
        break;
      case (negative_val > 61 && negative_val < 80):
        negative_advice = '略為消極 繼續努力!';
        break;
      case (negative_val > 80 && negative_val < 100):
        negative_advice = '很消極喔 向消極之路邁進!';
        break;
      case (negative_val == 100):
        negative_advice = '完美消極 消極之王ㄚ!';
        break;
    }

    switch (keyword) {
      case '!消極':
        msg_reply('消極指數為:' + negative_val + ' (`・ω・´) ' + negative_advice);
        break;
    }


  }




  ////activate the function
  var keyword = (msg.content);
  keyword_match();
  random_decision();
  insulting();
  negative();
  delete_poke();


});

bot.login(config.token);