const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "출입🚪";
const byeChannelName = "출입🚪";
const welcomeChannelComment = "**`어. 왔냐? 환영해. 라온제나 서버야. 공지는 꼭 확인해라`**";
const byeChannelComment = "**`야. 왜 가냐? 진짜 짜증나.`**";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '나 띠거운데 어쩌라고 (!챤들봇)' }, status: 'online' })
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
      return message.reply('**`용가릐눈 완벼케~ 오열이야~ ㄹㅇㅋㅋ 완전 석상 그 자체`**');
    }
    
    if(message.author.bot) return;
    
    if(message.content === '!태건') {
      return message.reply('**`누가 내꺼 맘대로 부르랬냐.`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!챤들') {
      return message.reply('**`ㅇ 왜 부름?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!선우') {
      return message.reply('**`아닌데? 아닌데아닌데?`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!건우') {
      return message.reply('**`실성하는 꺼누 히히^^ 꺼누야 꺼누야 이리 와서 히히히~`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!강철') {
      return message.reply('**`얘 프사 왜 이러냐`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!실핀') {
      return message.reply('**`어몽어스 후 담탐 왕십리 이민호`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!해냥') {
      return message.reply('**`랩 잘하는 내 프로젝트 막내쉨 애덕이 성대모사 장인`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!커피') {
      return message.reply('**`어몽어스? 임포스터? 오늘 저녁 뭐 먹었죠? 아 그럼 임포스터가 아니네요`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!정은') {
      return message.reply('**`어마무시한 추리로 에이스 등극!`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!구울') {
      return message.reply('**`복귀 했어요!`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!매달') {
      return message.reply('**`나문희 왜 그랬어요. 이거 좋다`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!엑스크리너') {
      return message.reply('**`처음엔 똘끼가 분명 없었는데, 그냥 미친 ㄷ...`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!아듀') {
      return message.reply('**`왜 그런지는 모르겠는데 실핀형 카운터임....ㅋㅋ 개꾸르잼ㅋㅋㅋㅋ`**');
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
    
    if(message.content === '!뿌요') {
      return message.reply('**`뿌요님의 부계는 짜요야 그리고 뿌요남은 혼술을 좋아해`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!린') {
      return message.reply('**`먹을 거 언제 사주냐`**');
    }

    if(message.author.bot) return;
    
    if(message.content === '!브스스') {
      return message.reply('**`언제나 찡얼거릐는 쉐키`**');
    }

    if(message.content === '!강사니') {
      return message.reply('**`추리 전적 2승 156패....강빡이새끼`**');
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
     .addField('[챤들은 못말려 명령어]', '- 아래의 명령어를 쓰시면 반응합니다! (20.08.02 기준)')
     .addField('1. 사람 이름', '!용가리, !정은\n!태건, !구울\n!챤들, !매달\n!선우, !아듀\n!건우, !꽁냥\n!실핀, !강철\n!에제, !뿌요\n!미네뜨, !브스스\n!해냥, !린\n!커피, !강사니\n!엑스크리너\n', true)
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
    let commandStr = '!챤들';
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
      message.channel.send("**`1부터 100까지만 삭제 가능함. 뒤질래?`**")
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