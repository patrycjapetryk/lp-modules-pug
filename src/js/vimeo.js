import { waitForElement } from './helpers.js';

function vimeoCallback() {
  var mainVideo = document.querySelector('.main-video--js');
  var player = new Vimeo.Player(mainVideo);
  var videoWrapper = document.querySelector('.player__button--js');
  var audioBtn = document.querySelector('.player__audio-btn--js');
  var audioIconOff = document.querySelector('.player__audio-icon--js');
  var audioIconOn = document.querySelector('.player__audio-icon--on--js');

  player.setVolume(0);

  audioBtn.addEventListener('click', function () {
    player.getVolume().then(function (volume) {
      if (volume !== 0) {
        player.setVolume(0);
        audioIconOn.style.opacity = '0';
        audioIconOff.style.opacity = '1';
      } else {
        player.setVolume(1);
        audioIconOn.style.opacity = '1';
        audioIconOff.style.opacity = '0';
      }
    });
  });

  function playPause() {
    player.getPaused().then(function (paused) {
      if (paused) {
        player.play();
      } else {
        player.pause();
      }
    });
  }

  document.onkeydown = function (event) {
    switch (event.keyCode) {
      case 32:
        event.preventDefault();
        playPause();
        break;
    }
  };

  videoWrapper.addEventListener('click', function () {
    playPause();
  });
}

waitForElement('.main', vimeoCallback);
