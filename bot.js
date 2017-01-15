const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const yt = require('ytdl-core')
client.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Добро пожаловать к нам в канал Дарена, ${member.user.username} ознакомься правилами чата в команде команды.`);
});

client.on('ready',  () => {
    console.log('Бот Дарена в онлайне и готов к работе! Для офлайна достаточно закрыть программу.');
});

client.on('message', message => {
    if(message.content === 'Привет')
        message.channel.sendMessage('Привет,**'+ message.author.username + '**');
});

client.on('message', message => {
    if(message.content === "daren")
        message.channel.sendMessage('вот моя страница в VK: https://vk.com/id_666_97 , также есть моя группа: https://vk.com/thedarenyoutube , а ещё я обитаю в Трубе: https://www.youtube.com/user/danil9241')
})

client.on('message', message => {
    if(message.content === "author")
        message.channel.sendMessage('Создатель бота - @WPSTUDIO | v.0.01')
})
    
client.on('message', message => {
    if(message.content === "help")
message.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
  },
  title: 'Команды',
  description: 'Здесь будет описано все команды бота, которые используются на данный момент.',
  fields: [
    {
      name: 'Привет',
      value: 'Вам скажет "Привет".'
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
      name: 'Пидр',
      value: 'Без комментариев' 
    },
    {
      name: 'Музыка',
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
      value: 'waveplay - Включает плейлист треков vaporwave тематики'
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
      name: 'ВНИМАНИЕ!',
      value: 'Для того, чтобы трек включился, вам нужно будет быть в голосовой комнате Дарена, а уж потом вводить название трека'
    }
  ],
  timestamp: new Date(),
  footer: {
    text: '© Bot by WPSTUDIO'
  }
}});
}) 

client.on('message', message => {
    if(message.content === "rules")
        message.channel.sendMessage('1.Не спамить в группу ссылки на всякие рулетки, автоматы, ваши каналы. 2.Пишите админам только по делу, если вы просто пишите всякую пургу нам, то сразу добавляем вас В ЧС, как и в группе, так и на наших страницах на месяц. 3.Не оскорблять Даню, в том числе и админов. 4.Не заводите срач в постах, занимайтесь этим в ЛС. 5.Не злоупотребляйте нецензурную лексику часто. 6. Нецензурная лексика разрешена для выражения эмоций, а не для оскорблений.')
})
let RssFeedEmitter = require('rss-feed-emitter');
let feeder = new RssFeedEmitter();
feeder.add({
  url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCcJFUDfukVWvTfkILUu2nzg',
  refresh: 2000
});

client.on('message', message => {
    if(message.content === "Пидр")
    message.channel.sendMessage('Сам ты пидр. :D')
})   

// Здесь настройка потокового аудио Youtube на голосовой чат
client.on('message', message => {
  if (message.content.startsWith('nightcore')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
     return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=Nyx5bIWXmIg", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
  });
client.on('message', message => {
  if (message.content.startsWith('Дарен')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
     return message.channel.sendMessage('');
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=Hf6169tkLQs", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('waveplay')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
     return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=ea_UOPzuyZU", {audioonly: true});
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
  
client.on('message', message => {
  if (message.content.startsWith('monstercat')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=4R-JGw3VTuY", {audioonly: true});
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
});
   
client.login('MjY4NjY1MzY1NzQxOTYxMjE3.C1eHUg.bl6dXC6g5was8qmAcQF_qAEMGF0');
