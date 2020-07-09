const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "출입🚪";
const byeChannelName = "출입🚪";
const welcomeChannelComment = "**`어. 왔냐? 환영해. 라온제나 서버야.`**";
const byeChannelComment = "**`야. 왜 가냐? 진짜 짜증나.`**";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '내 상태 봐서 뭐하려고 (!챤들봇)' }, status: 'online' })
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
    
    if(message.content === '!커피') {
      return message.reply('**`철권 고인물이자, 실수로 회사 컴퓨터를 망가뜨린 무서운 행님이지...후후..`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!정은') {
      return message.reply('**`현아 못지 않게 카리스마가 있는 여동생이지. 아무도 못 건든다..`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!구울') {
      return message.reply('**`스뮬에서 활동하는 거 보면, 되게 열심히 하던데 은근 성실한 아이야ㅋㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!매달') {
      return message.reply('**`은근 게임 고인물임..묘하게 못한다고 그러는데 절대 아님..ㅋㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!엑스크리너') {
      return message.reply('**`처음엔 똘끼가 분명 없었는데, 그냥 미친 ㄷ...`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!제이') {
      return message.reply('**`얘 맨날 술만 먹어...맨날 술이야아ㅏ 이 ㅈㄹ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!아듀') {
      return message.reply('**`노래 엄청 잘하지, 그리고 족보파괴자라 가끔씩 얘 나이를 헷갈려해ㅋㅋㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!꽁냥') {
      return message.reply('**`전혀 18살인지 19살의 목소리가 아닌 애야..겁나 낮아ㅋㅋ`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!에제') {
      return message.reply('**`정말 모범생인 것같은데, 묘하게 어둠의 기운이....`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!미네뜨') {
      return message.reply('**`얘 웃음소리 겁나 특이햌ㅋㅋ 귀여운 동생이야ㅋㅋㅋ`**');
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
     .addField('[챤들은 못말려 명령어]', '- 아래의 명령어를 쓰시면 반응합니다! (20.07.08 기준)')
     .addField('1. 사람 이름', '!용가리, !정은\n!태건, !구울\n!챤들, !매달\n!선우, !아듀\n!건우, !제이\n!실핀, !꽁냥\n!현아, !에제\n!강철, !미네뜨\n!이쿠\n!해냥\n!홍시\n!커피\n!엑스크리너\n', true)
     .addField('2. 대화', '!챤들 자냐, !챤들 이뻐\n!챤들아 안녕, !챤들 이쁜짓\n!챤들 바보, !챤들 좋아해\n!챤들아 뭐해, !챤들 뽀뽀\n!챤들아 놀자\n!챤들 멍청이\n!챤들아 꺼져\n!챤들 사랑해\n!챤들 미워\n', true)
     .addField('3. 기타', '!좋아\n!싫어\n!취미\n!활동\n!쓱싹\n', true)
     .addBlankField()
     .setTimestamp()
     .setFooter('챤들은 못말려', img)

    message.channel.send(embed)
  } else if(message.content == '!챤들봇') {
    let helpImg = 'https://cdn.discordapp.com/attachments/576768646534135828/576768706353561603/1b3fe53eb2187f61.PNG';
    let commandList = [
      {name: '!챤들 자냐', desc: '챤들봇의 상태'},
      {name: '!챤들명령어', desc: '챤들봇의 명령어 목록'},
      {name: '!챤들의 외침', desc: 'dm으로 전체 공지 보내기'},
      {name: '!쓱싹', desc: '메세지 지움'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 챤들은 못말려 BOT', helpImg)
      .setColor('#81F7BE')
      .setFooter(`챤들은 못말려`)
      .setTimestamp()

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

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
  
      return message.reply('**`ㅇㅇ 보냄`**');
    } else {
      return message.reply('**`채널에서 해야지 임마!!!!!`**');
    }
  }

  if(message.content.startsWith('!쓱싹')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!쓱싹 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("**`1부터 100까지만 삭제 가능하다. 뒤질래?`**")
      return;
    } else if(!isNum) { // c @챤들은 못말려 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "**`개의 메시지를 삭제했다. 너도 인생 삭ㅈ.. (이 메세지는 잠시 후에 사라짐ㅋ)`**");
        })
        .catch(console.error)
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

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);