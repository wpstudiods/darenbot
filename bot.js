// Модули
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const yt = require('ytdl-core');
const weather = require("./weather.js");
const mute = require("./mute.js");
const translateClient = require('@google-cloud/translate');
const fs = require('fs');

// Для логов в терминале
client.on('ready',  () => {
  console.log('DarenbotNightly');
  console.log('Loading discord.js');
  console.log('Loading modules');
  console.log('Done. Bot is online!');
  console.log('Github: https://github.com/wpstudiods/darenbot');
console.log('Copyright 2018');
});

// Статус Бота (По умолчанию юзает Твич)
client.on('ready', () => {
  client.user.setGame('4K 60 FPS ТОЛЬКО У МЕНЯ' , 'https://www.twitch.tv/TheDaren666');
}); 

// Направляющие (Те, которые получают инфу из файла)
   const Help = fs.readFileSync('./Doc/Help.txt', 'utf8');

  // Приветствие нового пользователя в конфе + Добавление роли
client.on('guildMemberAdd', member => {
  console.log('Пользователь ' + member.user.username + ' Присоединился в конфу!')
  var role = member.guild.roles.find('name', 'Участники') // "Участники" - Название вашей роли
  member.addRole(role)

// Оповещение о новом пользователе на канал
  member.guild.channels.get('319830140232269825').send('**' + member.user.username + '**, присоединился в конфу!') 
});
// Оповещение после выхода пользователя из конфы
client.on('guildMemberRemove', member => {
  console.log('Пользователь ' + member.user.username + ' ливнул с конфы!')
  member.guild.channels.get('319830140232269825').send('**' + member.user.username + '**, ливнул от нас!')
});

// Помощь в командах
client.on('message', message => {
  if(message.content === 'Dhelp') {
    message.channel.sendMessage(Help)
  }
});
// Команды
client.on('message', message => {
  if(message.content === 'Dxxx') {
message.channel.sendMessage(' **' + message.author.username + '**, я весь твой :kissing_heart:  ');
message.channel.send({embed:{image: {url:'http://savepic.ru/13722904.gif'}}});

  }

if(message.author.id == 'WPSTUDIO#7316'){
    message.reply('Сига Карась!')
}
if(message.content === 'DВыебать') {
        message.channel.sendMessage('Пользователь, под ником - **' + message.author.username + '** успешно выебан!' );

}
if(message.content === 'Event') {
message.channel.sendMessage('#SugarTV#4512');
message.channel.sendMessage('карась' );
message.channel.sendMessage('и ГЕЙ' );


}
if(message.content === 'DЯ') {
        message.channel.sendMessage('Головка от твоего хуя ,' + message.author.username + ' :smile:' );

}
if(message.content === 'DЦиган') {
        message.channel.sendMessage('Какой циган?! :Tsigan: :Tsigan: :Tsigan: '  );
}
if(message.content === 'DПедр!') {
        message.channel.sendMessage('А ты - **'+ message.author.username + '** пидрила :laughing: !'  );
} 
if(message.content === 'Добрый вечер!') {
        message.channel.sendMessage('Добрый,**'+ message.author.username + '**!'  );
}
if(message.content === 'Доброе утро!') {
        message.channel.sendMessage('Доброе,**'+ message.author.username + '**!');
}
if (message.content === 'Dping') {
        message.channel.sendMessage(`pong`);
}
if (message.content === 'DpingS') {
        message.channel.sendMessage(`А вот и инфа о пинге сервера: \`${Date.now() - message.createdTimestamp} ms\``);
}
    if(message.content === 'Привет') {
        message.channel.sendMessage('Привет,**'+ message.author.username + '**!');
}
    if(message.content === "Dlinks") {
        message.channel.sendMessage('вот моя страница в VK: https://vk.com/id_666_97 , также есть моя группа: https://vk.com/thedarenyoutube , а ещё я обитаю в Трубе: https://www.youtube.com/user/danil9241')
}

    if(message.content === "Dabout") {
        message.channel.sendMessage('Создатель бота - @WPSTUDIO. Исходники - https://github.com/wpstudiods/darenbot | v.1.0')
}

    if(message.content === "Dпидр")
    message.channel.sendMessage('Сам ты пидр. :D')
  });






//Правила конфы
client.on('message', message => {
    if(message.content === "Drules")
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
      value: 'Быть адекватным.'
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
     {
      name: '7',
      value: 'Картинки и все что связанно с NSFW контентом можно кидать ТОЛЬКО в комнату, созданную для этого(#pron).'
    },
    {
    name: '8',
      value: 'Не кидать картинки гуру содержания (расчлененка всякая, кишки наружу и все в таком духе.) '
    },
    
  ],
  timestamp: new Date(),
  footer: {
    text: 'Наказание за нарушение - на усмотрение администрации конфы. Bot by WPSTUDIO'
  }
}});
})


// Потоковое аудио Youtube на голосовой чат
client.on('message', message => {
  if (message.content.startsWith('DPlay3')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
     return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=g7TMXNpr3Ps", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('DPlay4')) {
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
  if (message.content.startsWith('DPlay2')) {
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
  if (message.content.startsWith('DPlay5')) {
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
  if (message.content.startsWith('DPlay1')) {
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
    if (message.content.startsWith('DPlay ')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage("Запускаю ссылку...");
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(message.content.split(" ").slice(1).join(" "), {
          audioonly: true
        });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
       });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('DPlay6')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(``);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=dGfdGZ8cH-o", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});

// Токен --------------------------------------------------------------
client.login('xxx'); // xxx - Ваш токен

// Тестовые команды (Они в любом случаи могут быть сломаны)

    module.exports = (bot) => {
    client.on('message', message => {
    if (message.content.startsWith('Test ')) {    
    const embed = new Discord.RichEmbed()
    const params = message.content.split(" ").slice(1);
     embed.setColor(0x2885bd)
        .addField('__**Yukin Stats**__', `**Uptime:** ${moment.duration(client.uptime).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]')}\n**Memory usage:** ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB\n**Ping:** ${client.ping}ms`)
        .addField('__**Server Stats**__', `**Operating system:** ${os.platform()}\n**CPU:** ${os.cpus()[0].model}\n**Uptime:** ${moment.duration(os.uptime()).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]')}`);
    message.channel.send({embed}); 
  }
    })
    }