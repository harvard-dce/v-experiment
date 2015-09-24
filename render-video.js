var videojs = require('video.js');
import ProgressControl from '../video.js/src/js/control-bar/progress-control/progress-control.js';

function renderVideo(opts, done) {
  var {
    id,
    url,
    parent
  } = opts;

  var video = document.createElement('video');
  video.id = id;
  video.src = url;
  video.type = 'video/mp4';
  parent.classList.add('vjs-default-skin');
  parent.appendChild(video);

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

  videojs(video, videojsOpts, setUpControls);

  function setUpControls() {
    var player = this;
    var progressControl = new ProgressControl(player);
    var pcEl = progressControl.el();
    pcEl.style.top = 600;
    parent.appendChild(pcEl);
    done(player);
  }
  // var progressControl = new ProgressControl(createMockPlayer());
  // var pcEl = progressControl.el();
  // pcEl.style.height = 64;
  // video.appendChild(pcEl);

}


function noop() {
}

function createMockPlayer() {
  var isScrubbing = false;

  function scrubbing(val) {
    if (val === undefined) {
      return isScrubbing;
    }
    else {
      isScrubbing = val;
    }
  }

  return {
    id: noop,
    on: noop,
    ready: noop,
    tech_: {
      'featuresVolumeControl': false
    },
    volume: noop,
    muted: noop,
    reportUserActivity: noop,
    duration: () => 10000,
    scrubbing: scrubbing,
    currentTime: () => 5000
  };
}

module.exports = renderVideo;
