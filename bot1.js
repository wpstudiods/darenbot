const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const yt = require('ytdl-core')


client.on('message', message => {
  if (message.content.startsWith('monstercat')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.sendMessage(`Еее. Вещаем 10 часовую подборку годноты от Монстеркат! Гоу в голосовой канал!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=YDIj7aP3e5M", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
         });
      });
  }
});

client.login('MjY4NjY1MzY1NzQxOTYxMjE3.C1eHUg.bl6dXC6g5was8qmAcQF_qAEMGF0');
