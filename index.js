var renderVideo = require('./render-video');
var d3 = require('d3-selection');
var slideways = require('slideways');

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

var controls = d3.select('#controls-container')

controls.append('button')
  .text('Play')
  .on('click', playVideos);

controls.append('button')
  .text('Stop')
  .on('click', stopVideos);

function playVideos() {
  videos.forEach(video => video.play());
}

function stopVideos() {
 videos.forEach(video => video.pause());
}

function setVideosCurrentTime(time) {  
  videos.forEach(video => video.currentTime = time);
}

function setVideosCurrentTimeByPercent(percent) {
  videos.forEach(setVideoCurrentTimeByPercent);

  function setVideoCurrentTimeByPercent(video) {
    video.currentTime = getTimeForPercent(percent, video.duration);
  }
}

function getTimeForPercent(percent, duration) {
  var time = 0;
  if (duration > 0) {
    time = percent/100.0 * duration;
  }
  return time;
}

var slider = slideways({ min: 0, max: 100, snap: 1, init: 0 });
slider.appendTo('#controls-container');

slider.on('value', function (value) {
  console.log(value);
  setVideosCurrentTimeByPercent(value);
});
