var videojs = require('video.js');
var renderVideo = require('./render-video');

function videoRendered() {
  var player = this;
  // player.play();
  player.addChild('PlayProgressBar');
}

function videoRendered2() {
  var player = this;
  // player.controlBar.progressControl = new videojs.ProgressControl(player);
  // var PlayProgressBar = videojs.getComponent('PlayProgressBar');
  // var playProgressBar = new PlayProgressBar(player);
}

renderVideo(
  {
    url: 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/924a6001-506a-4af0-b8f3-cdc6873be638/presenter_trimmed.mp4?caches=0.942014982458204',
    id: 'presenter-video'
  },
  videoRendered
);

// renderVideo(
//   {
//     url: 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/d7086069-ec1f-4862-a75f-822cbffdee5f/presentation_trimmed.mp4',
//     id: 'presentation-video'
//   },
//   videoRendered2
// );
