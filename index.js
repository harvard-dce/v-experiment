var videojs = require('video.js');
var renderVideo = require('./render-video');

var videojs = require('video.js');
var renderVideo = require('./render-video');

function videoRendered() {
  var player = this;
  // player.play();
}

function videoRendered2() {
  var player = this;
}

renderVideo(
  {
    url: 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/924a6001-506a-4af0-b8f3-cdc6873be638/presenter_trimmed.mp4?caches=0.942014982458204',
    id: 'presenter-video',
    parent: document.querySelector('#video-root-1'),
    progressControlTop: 450
  },
  videoRendered
);

renderVideo(
  {
    url: 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/d7086069-ec1f-4862-a75f-822cbffdee5f/presentation_trimmed.mp4',
    id: 'presentation-video',
    parent: document.querySelector('#video-root-2'),
    progressControlTop: 900
  },
  videoRendered2
);
