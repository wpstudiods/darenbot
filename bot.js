const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const yt = require('ytdl-core');
const weather = require("./weather.js")
const mute = require("./mute.js")


client.on('ready', () => {
  client.user.setGame('!СИГА-КАРАСЬ!');
}); 

// Приветствие нового пользователя в конфе
client.on("guildMemberAdd", member => {
    let guild = member.guild;  
    if(guild.id === "289069234967805954") {
        member.addRole("289069234967805954");
   guild.defaultChannel.sendMessage
      (`Добро пожаловать к нам в канал Дарена, ${member.user.username} ознакомся с правилами чата в команде
    "rules", также, если хочешь использовать бота по полной, то читай команды в "help".`);
    } 
});
client.on('ready',  () => {
    console.log('DAREN BOT v1.0 by WPSTUDIO ');
    console.log('Bot is ready');
});

client.on('message', message => {
  if(message.content === 'xxx') {
message.channel.send({embed:{image: {url:'http://i.imgur.com/btdeuT6.jpg' || message.channel.send({embed:{image: {url:'https://media.giphy.com/media/3ohzdXx1wr5GYfQxUs/giphy.gif'}}})}}});

  }

if(message.author.id == 'WPSTUDIO#7316'){
    message.reply('Сига Карась!')
}
if(message.content === 'Выебать') {
        message.channel.sendMessage('Пользователь, под ником - **' + message.author.username + '** успешно выебан!' );

}
if(message.content === 'Event') {
message.channel.sendMessage('Сига');
message.channel.sendMessage('карась' );



}
if(message.content === 'Я') {
        message.channel.sendMessage('Головка от твоего хуя ,' + message.author.username + ' :smile:' );

}
if(message.content === 'Циган') {
        message.channel.sendMessage('Какой циган?! :Tsigan: :Tsigan: :Tsigan: '  );
}
if(message.content === 'Педр!') {
        message.channel.sendMessage('А ты - **'+ message.author.username + '** пидрила :laughing: !'  );
} 
if(message.content === 'Добрый вечер!') {
        message.channel.sendMessage('Добрый,**'+ message.author.username + '**!'  );
}
if(message.content === 'Доброе утро!') {
        message.channel.sendMessage('Доброе,**'+ message.author.username + '**!');
}
if (message.content === 'ping') {
        message.channel.sendMessage(`pong`);
}
if (message.content === 'Пинг') {
        message.channel.sendMessage(`А вот и инфа о пинге сервера: \`${Date.now() - message.createdTimestamp} ms\``);
}
    if(message.content === 'Привет') {
        message.channel.sendMessage('Привет,**'+ message.author.username + '**!');
}
    if(message.content === "daren") {
        message.channel.sendMessage('вот моя страница в VK: https://vk.com/id_666_97 , также есть моя группа: https://vk.com/thedarenyoutube , а ещё я обитаю в Трубе: https://www.youtube.com/user/danil9241')
}

    if(message.content === "author") {
        message.channel.sendMessage('Создатель бота - @WPSTUDIO. Исходники - https://github.com/wpstudiods/darenbot | v.0.03')
}

    if(message.content === "Пидр")
    message.channel.sendMessage('Сам ты пидр. :D')
  });


client.on('message', message => {
    if(message.content === "Инфа")
      message.channel.sendMessage("", {embed: {
          color: 3447003,
          author: {
            name: 'DarenBot Alpha V0.05',
            icon_url: client.user.avatarURL
          },
          title: 'Status:',
          fields: [
            {
              name: 'Время включения бота /Версия Discord,js:',
              value: '' + client.uptime + '/ 11.0.0'
            },
            {
              name: 'Гилдии:',
              value: '' + client.guilds +''
            },
            {
              name: 'Каналы:',
              value: '' + client.channels + ''
            },
            {
              name: 'Моих фанатов:',
              value: '' + client.users + ''
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: '© - ̗̀- ̗̀WPSTUDIO ̖́-'
          }
        }
      });
});
client.on('message', message => {
    if(message.content === "help")
message.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
  },
  title: 'Команды и их описание ',
  description: 'Здесь будет описано все команды бота, которые используются на данный момент.',
  fields: [
     {
      name: 'xxx',
      value: '18+ Кидает пикчи Дани))) '
    },
    {
      name: 'Весьма странные команды:',
      value: '"Я", "Педр!"'
    },
    {
      name: 'Привет',
      value: 'Вам скажет "Привет".'
    },
    {
     name: 'ping',
      value: 'pong xD'


    },
    {
      name: 'Daren',
      value: 'Здесь буду ссылки на ресурсы, где можно найти самого Дарена'
    },
    {
      name: 'author',
      value: 'Здесь вы узнаете об авторе бота.'
    },
    {
      name: 'Инфа',
      value: '[BUGS] Показывает информацию бота на сервере'
    },
    {
      name: 'Пинг',
      value: 'Смотрит пинг сервера'
    },
    {
      name: 'Пидр',
      value: 'Без комментариев'
    },
    {
      name: 'Музыка ',
      value: 'Сейчас будут перечислены команды, с помощью которых вы можете воспроизвести трек в голосовой канал.',
      },
      {
      name: '1',
      value: 'monstercat - Включает радио  Monestercat'
     },
    {
     name: '2',
      value: 'tobiking - Включает трек Тоби Кинга'
     },
    {
      name: '3',
      value: 'macintosh - Включает треки Macintosh Plus'
     },
    {
     name: '4',
      value: 'giveplay - Включает Рики Эстли'
     },
    {
     name: '5',
      value: 'Дружков - Включает трек про Дружкова'
     },
    {
      name: '6',
      value: 'Дарен - Включает последнее видео Дарена'
     },
    {
     name: '7',
      value: 'Скелетон - Включает плейлист видео игор Скелетона'
     },
    {
     name: '8',
      value: 'giveplay - Включает Рики Эстли'
     },
    {
      name: '9',
       value: 'bestmacintoshbest - Включает баянистый трек Macintosh (WARRING! 10 HOURS)'
      },
     {
       name: 'ВНИМАНИЕ!',
      value: 'Для того, чтобы трек включился, вам нужно будет быть в голосовой комнате Дарена, а уж потом вводить название трека'
    }
  ],
  timestamp: new Date(),
  footer: {
    text: '© Bot by WPSTUDIO.'
  }
}});
})

client.on("message", message => {
var input = message.content.toUpperCase();
if (message.member.roles.exists('name', 'ban')) {
    if (message.content === "Kick") {
      var mention = message.mentions.users.size ? message.mentions.users.first() : null; if (mention != null)
              var mentionMember = message.guild.members.find("id", mention.id)
              var GuildMember = message.guild.members.find("id", mention.id)
        GuildMember.kick();
        console.log("Сервер: " + message.guild.name + " | Имя: " + mention.username + " | Кикнут" + " | By: " + message.author.username);
    } else if (message.content === "ban") {
              var mention = message.mentions.users.size ? message.mentions.users.first() : null; if (mention != null)
              var mentionMember = message.guild.members.find("id", mention.id)
              var GuildMember = message.guild.members.find("id", mention.id)
              GuildMember.ban(7);
console.log("Сервер: " + message.guild.name + " | Имя: " + mention.username + " | Забанен" + " | By: " + message.author.username);
     }
    }
});

client.on('message', message => {
    if(message.content === "rules")
message.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
  },
  title: 'Правила конфы',
  description: '',
  fields: [
    {
      name: '1',
      value: 'Не спамить в группу ссылки на всякие рулетки, автоматы, ваши каналы.".'
    },
    {
      name: '2',
      value: 'Пишите админам только по делу, если вы просто пишите всякую пургу нам, то сразу добавляем вас В ЧС, как и в группе, так и на наших страницах на месяц.'
    },
    {
      name: '3',
      value: 'Не оскорблять Даню, в том числе и админов.'
    },
    {
      name: '4',
      value: 'Не заводите срач в постах, занимайтесь этим в ЛС.'
    },
    {
      name: '5',
      value: 'Не злоупотребляйте нецензурную лексику часто.',
      },
      {
      name: '6',
      value: 'Нецензурная лексика разрешена для выражения эмоций, а не для оскорблений.'
     },
  ],
  timestamp: new Date(),
  footer: {
    text: 'Правила были составлены и сделаны админами нашей конфы. Bot by WPSTUDIO'
  }
}});
})


// Здесь код потокового аудио Youtube на голосовой чат
client.on('message', message => {
  if (message.content.startsWith('Дарен')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
     return message.channel.sendMessage('');
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=jQSfxITH7ws", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('macintosh')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
     return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=YcsYSJwewWk", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('giveplay')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('tobiking')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=6ZqaXHSE7gY", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('bestmacintoshbest')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=PU8VIAu9zkA", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('monstercat')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=pm36k08jQ0M", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('Дружков')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=OtKAYaoFkfY", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('Скелетон')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=jLw1lplPHMI&list=PLEVYFVjqfUJffKc4HUvN_BavsMQDdVBIX", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});


  // ------------------------------------------------------------------
  // Здесь тестовый функционал


// --------------------------------------------------------------
client.login('MjY4NjY1MzY1NzQxOTYxMjE3.C1eHUg.bl6dXC6g5was8qmAcQF_qAEMGF0');
