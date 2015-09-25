var renderVideo = require('./render-video');
var d3 = require('d3-selection');

var video1 = renderVideo(
  {
    url: 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/924a6001-506a-4af0-b8f3-cdc6873be638/presenter_trimmed.mp4?caches=0.942014982458204',
    id: 'presenter-video',
    parent: document.querySelector('#video-container'),
    progressControlTop: 450
  }
);

var video2 = renderVideo(
  {
    url: 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/d7086069-ec1f-4862-a75f-822cbffdee5f/presentation_trimmed.mp4',
    id: 'presentation-video',
    parent: document.querySelector('#video-container'),
    progressControlTop: 900
  }
);

var videos = [
  video1,
  video2
];

d3.select('#controls-container').append('button')
  .text('Play')
  .on('click', playVideos);

d3.select('#controls-container').append('button')
  .text('Stop')
  .on('click', stopVideos);

function playVideos() {
  videos.forEach(video => video.play());
}

function stopVideos() {
 videos.forEach(video => video.pause());
}
