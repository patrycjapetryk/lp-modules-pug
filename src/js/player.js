// handle video source

const videoTag = document.querySelector('.header__video--js');
const videoSourceTag = document.querySelector('.header__video--js source');
const videoSourceSrc = videoSourceTag.getAttribute('src');
const videoSourceDataSrc = videoSourceTag.getAttribute('data-src');
const tabletMediaQuery = 764;

function setVideoSource() {
  const windowWidth = window.innerWidth;
  const videoSource = videoSourceTag.getAttribute('src');

  if (windowWidth > tabletMediaQuery) {
    if (videoSource !== videoSourceDataSrc) {
      videoSourceTag.setAttribute('src', videoSourceDataSrc);
      videoTag.load();
    }
  } else {
    if (videoSource !== videoSourceSrc) {
      videoSourceTag.setAttribute('src', videoSourceSrc);
      videoTag.load();
    }
  }
}

window.addEventListener('load', setVideoSource);
window.addEventListener('resize', setVideoSource);

// handle audio button

const audioBtn = document.querySelector('.header__audio-btn--js');
const audioIconOff = document.querySelector('.header__audio-btn-icon--off-js');
const audioIconOn = document.querySelector('.header__audio-btn-icon--on-js');

audioBtn.addEventListener('click', function () {
  if (videoTag.muted === false) {
    videoTag.muted = true;
    audioIconOn.style.opacity = '0';
    audioIconOff.style.opacity = '1';
  } else {
    videoTag.muted = false;
    audioIconOn.style.opacity = '1';
    audioIconOff.style.opacity = '0';
  }
});

// handle play/pause

function playPause() {
  if (videoTag.paused) {
    videoTag.play();
  } else {
    videoTag.pause();
  }
}

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 32:
      event.preventDefault();
      playPause();
      break;
  }
};
