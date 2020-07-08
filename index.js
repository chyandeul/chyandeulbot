const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "출입🚪";
const byeChannelName = "출입🚪";
const welcomeChannelComment = "**`어. 왔냐? 환영해. 라온제나 서버야.`**";
const byeChannelComment = "**`야. 왜 가냐? 진짜 짜증나.**";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "new"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;
  
  if(message.content === '!챤들 자냐') {
    return message.reply('**`챤들 안 잔다`**');
  }
    if(message.author.bot) return;
    
    if(message.content === '!용가리') {
      return message.reply('**`울어라, 지옥참마도...!`**');
    }
    
    if(message.author.bot) return;
    
    if(message.content === '!태건') {
      return message.reply('**`누가 내꺼 맘대로 부르랬냐.`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들') {
      return message.reply('**`그건 나잖아. 왜 부르는 건데?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!선우') {
      return message.reply('**`그 물타기 시작만 하고 빠지는 쉐리 아님..?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!현아') {
      return message.reply('**`은근 카리스마 있는 내 동생인데?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!건우') {
      return message.reply('**`키헤헤헥하고서 가끔씩 실성하는 애...`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!강철') {
      return message.reply('**`지금은 군대를 간 신비주의컨셉 철덩어리야.`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!실핀') {
      return message.reply('**`담탐 좋아하는 형이지ㅋㅋㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!이쿠') {
      return message.reply('**`말 더럽게 안 듣는 쉐키..`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!해냥') {
      return message.reply('**`아 곧 벌칙으로 애교레코딩 올릴 애?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!홍시') {
      return message.reply('**`레바같은 사람이지..ㅋㅋㅋㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들아 안녕') {
      return message.reply('**`ㅇㅇ ㅎㅇ 나 바쁘니까 부르지마.`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 바보') {
      return message.reply('**`그런 유치한 욕은 어디서 가지고 왔냐. 야발적이네?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들아 뭐해') {
      return message.reply('**`널 어떻게 하면 잘 조질 수 있을지 고민 중임ㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들아 놀자') {
      return message.reply('**`? 너랑 나? 지금 너랑 나 말하는거냐?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 멍청이') {
      return message.reply('**`ㅈㄹ 밴`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들아 꺼져') {
      return message.reply('**`니나 사라져버리렴`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 사랑해') {
      return message.reply('**`...? 나는 너 안 사랑해`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 미워') {
      return message.reply('**`나는 니가 날 미워해줄 때, 즐거워~`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 이뻐') {
      return message.reply('**`나한테 뭘 바라고 온거냐 인간녀석.`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 이쁜짓') {
      return message.reply('**`퉤`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 좋아해') {
      return message.reply('**`나도........안 좋아하거든?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들 뽀뽀') {
      return message.reply('**`카아악 퉷`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!좋아') {
      return message.reply('**`태건, 먹는 거, 랩, 게임`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!싫어') {
      return message.reply('**`예의 밥 말아쳐먹은 새끼, 꼰대새끼, 못 먹는 거`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!취미') {
      return message.reply('**`랩, 디코봇제작, 그림 등등?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!활동') {
      return message.reply('**`반야월로는 스뮬활동하고 있고, 트위치나 유투브는 챤들로 활동해.`**');
    }

 if(message.content == '!챤들명령어') {
   let img = 'https://cdn.discordapp.com/attachments/576768646534135828/727490758168281158/5715_O4Si9U7u.png';
   let embed = new Discord.RichEmbed()
     .setTitle('챤들은 못말려!')
     .setColor('##00FFBF')
     .setURL('https://cdn.discordapp.com/attachments/576768646534135828/576768706353561603/1b3fe53eb2187f61.PNG')
     .setAuthor('챤들', img, 'https://discordapp.com/channels/565114293222375424/576768646534135828/729625974144106556')
     .setThumbnail(img)
     .addBlankField()
     .addField('[챤들은 못말려 명령어]', '- 아래의 명령어를 쓰시면 반응합니다! (20.07.07 기준)')
     .addField('1. 사람 이름', '!용가리\n!태건\n!챤들\n!선우\n!건우\n!실핀\n!현아\n!강철\n!이쿠\n!해냥\n!홍시\n', true)
     .addField('2. 대화', '!챤들 자냐, !챤들 이뻐\n!챤들아 안녕, !챤들 이쁜짓\n!챤들 바보, !챤들 좋아해\n!챤들아 뭐해, !챤들 뽀뽀\n!챤들아 놀자\n!챤들 멍청이\n!챤들아 꺼져\n!챤들 사랑해\n!챤들 미워\n', true)
     .addField('3. 정보', '!좋아\n!싫어\n!취미\n!활동\n', true)
     .addBlankField()
     .setTimestamp()
     .setFooter('챤들은 못말려', img)

    message.channel.send(embed)
  } else if(message.content == '!챤들봇') {
    let helpImg = 'https://cdn.discordapp.com/attachments/576768646534135828/576768706353561603/1b3fe53eb2187f61.PNG';
    let commandList = [
      {name: '!챤들 자냐', desc: '챤들봇의 상태'},
      {name: '!챤들명령어', desc: '챤들봇의 명령어 목록'}
    ];

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!챤들의 외침')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!챤들의 외침'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('ㅇㅇ 보냄');
    } else {
      return message.reply('채널에서 해야지 임마!!!!!');
    }
  }

});

function checkPermission(message) {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "관리자도 아닌 주제에 뭐하는 거야?")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
    tmp += ' ';
  }

  return tmp;
}

client.login(token);