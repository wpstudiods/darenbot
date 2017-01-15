let RssFeedEmitter = require('rss-feed-emitter');
let feeder = new RssFeedEmitter();
feeder.add({
  url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCcJFUDfukVWvTfkILUu2nzg',
  refresh: 2000
});