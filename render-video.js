var videojs = require('video.js');

function renderVideo(done) {
  var video = document.createElement('video');
  video.id = 'presenter-video';
  video.src = 'https://da4w749qm6awt.cloudfront.net/engage-player/83ebde9d-0812-4071-8fb7-a97c1472ceb9/924a6001-506a-4af0-b8f3-cdc6873be638/presenter_trimmed.mp4?caches=0.942014982458204';
  video.type = 'video/mp4';
  document.body.appendChild(video);

  var videojsOpts = {
    controls: {
      playToggle: {},
      fullscreenToggle: {},
      currentTimeDisplay: {},
      timeDivider: {},
      durationDisplay: {},
      remainingTimeDisplay: {},
      progressControl: {},
      volumeControl: {},
      muteToggle: {}
    },
    textTrackDisplay: false,
    textTrackSettings: false,
    autoplay: false,
    preload: 'auto',
    // poster: TODO,
    loop: false,
    width: 784,
    height: 441,
    controlBar: false
  };

  videojs(video, videojsOpts, done);
}

module.exports = renderVideo;
