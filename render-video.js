function renderVideo(opts, done) {
  var {
    id,
    url,
    parent,
    progressControlTop
  } = opts;

  var video = document.createElement('video');
  video.id = id;
  video.src = url;
  video.type = 'video/mp4';
  // parent.classList.add('vjs-default-skin');
  parent.appendChild(video);
  return video;
  
  // var videojsOpts = {
  //   controls: {
  //     playToggle: {},
  //     fullscreenToggle: {},
  //     currentTimeDisplay: {},
  //     timeDivider: {},
  //     durationDisplay: {},
  //     remainingTimeDisplay: {},
  //     progressControl: {},
  //     volumeControl: {},
  //     muteToggle: {}
  //   },
  //   textTrackDisplay: false,
  //   textTrackSettings: false,
  //   autoplay: false,
  //   preload: 'auto',
  //   // poster: TODO,
  //   loop: false,
  //   width: 784,
  //   height: 441,
  //   controlBar: false
  // };

  // videojs(video, videojsOpts, setUpControls);

  // function setUpControls() {
  //   var player = this;
  //   var progressControl = new ProgressControl(player);
  //   var pcEl = progressControl.el();
  //   pcEl.style.top = progressControlTop;
  //   parent.appendChild(pcEl);
  //   done(player);
  // }

}

module.exports = renderVideo;
