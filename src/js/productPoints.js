import { waitForElement } from './helpers.js';

function lpCallback() {
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
}

waitForElement('.main', lpCallback);
