var videojs = require('video.js');

var video = document.createElement('video');
video.id = 'presenter-video';
video.src = 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/924a6001-506a-4af0-b8f3-cdc6873be638/presenter_trimmed.mp4?caches=0.942014982458204';
video.type = 'video/mp4';
document.body.appendChild(video);

var videojsOpts = {

};

videojs(video, videojsOpts, init);

function init() {
  var player = this;
  player.play();
}
