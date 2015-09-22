var videojs = require('video.js');

function renderVideo(opts, done) {
  var {
    id,
    url    
  } = opts;

  var video = document.createElement('video');
  video.id = id;
  video.src = url;
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
