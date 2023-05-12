import '../scss/main.scss';

function lpCallback() {
  var carousels = document.querySelectorAll('.logo-carousel__wrapper--js');

  carousels.forEach(function (carousel) {
    var carouselClone = carousel.cloneNode(true);
    carousel.after(carouselClone);
  });

  var scrollAnimationItems = document.querySelectorAll('.product--js');
  var animationStartDistance = 0;
  var animationStartClassName = 'product--before';
  var getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  function animationOnScroll() {
    scrollAnimationItems.forEach(function (item) {
      var itemTop = item.getBoundingClientRect().top;
      var itemBottom = item.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
      item.style.transitionDelay = `0.${getRandomNumber(0, 3)}s`;
      if (
        itemTop - windowHeight < 0 - animationStartDistance &&
        itemBottom > animationStartDistance
      ) {
        item.classList.remove(animationStartClassName);
      } else {
        item.classList.add(animationStartClassName);
      }
    });
  }

  animationOnScroll();
  window.addEventListener('scroll', animationOnScroll);
  window.addEventListener('resize', animationOnScroll);

  var galleryItems = document.querySelectorAll('.gallery__item--js');

  function menageClasses(tooltip, imageWrapper) {
    var tooltipRightPosition =
      tooltip.getBoundingClientRect().x + tooltip.getBoundingClientRect().width;
    var imageWrapperBottomPosition =
      imageWrapper.getBoundingClientRect().y +
      imageWrapper.getBoundingClientRect().height;
    var tooltipBottomPosition =
      tooltip.getBoundingClientRect().y +
      tooltip.getBoundingClientRect().height;
    if (tooltipRightPosition > window.innerWidth) {
      tooltip.classList.add('product__link--left');
    }
    if (tooltipBottomPosition > imageWrapperBottomPosition) {
      tooltip.classList.add('product__link--top');
    }
  }

  function setTooltipPosition(product, imageWrapper) {
    var tooltip = product.querySelector('.product__link--js');
    product.addEventListener('click', function () {
      menageClasses(tooltip, imageWrapper);
    });
    product.addEventListener('mouseover', function () {
      menageClasses(tooltip, imageWrapper);
    });
  }

  galleryItems.forEach(function (galleryItem) {
    var imageWrapper = galleryItem.querySelector('.gallery__wrapper--js');
    var products = galleryItem.querySelectorAll('.product--js');

    products.forEach(function (product) {
      setTooltipPosition(product, imageWrapper);
    });
  });

  var videoTag = document.querySelector('.player__video--js');
  var videoSourceTag = document.querySelector('.player__video--js source');
  var videoSourceSrc = videoSourceTag.getAttribute('src');
  var videoSourceDataSrc = videoSourceTag.getAttribute('data-src');
  var tabletMediaQuery = 764;

  function setVideoSource() {
    var windowWidth = window.innerWidth;
    var videoSource = videoSourceTag.getAttribute('src');
    if (windowWidth > tabletMediaQuery) {
      if (videoSource !== videoSourceDataSrc) {
        videoSourceTag.setAttribute('src', videoSourceDataSrc);
      }
    } else {
      if (videoSource !== videoSourceSrc) {
        videoSourceTag.setAttribute('src', videoSourceSrc);
      }
    }
    videoTag.load();
  }

  setVideoSource();
  window.addEventListener('resize', setVideoSource);

  var audioBtn = document.querySelector('.player__audio-btn--js');
  var audioIconOff = document.querySelector('.player__audio-btn-icon--off-js');
  var audioIconOn = document.querySelector('.player__audio-btn-icon--on-js');

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
}

function waitForElement(id, callback) {
  var interval = setInterval(function () {
    if (document.querySelector(id)) {
      clearInterval(interval);
      callback();
    }
  }, 200);
}

waitForElement('.main', lpCallback);
