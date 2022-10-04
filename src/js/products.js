// products animation on scroll

const scrollAnimationItems = document.querySelectorAll('.product--js');
const animationStartDistance = 0;
const animationStartClassName = 'product--before';

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function animationOnScroll() {
  scrollAnimationItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

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
window.addEventListener('scroll', animationOnScroll);
window.addEventListener('load', animationOnScroll);
window.addEventListener('resize', animationOnScroll);

// menage tooltip position

const galleryItems = document.querySelectorAll('.gallery__item--js');

function menageClasses(tooltip, imageWrapper) {
  const tooltipRightPosition =
    tooltip.getBoundingClientRect().x + tooltip.getBoundingClientRect().width;
  const imageWrapperBottomPosition =
    imageWrapper.getBoundingClientRect().y +
    imageWrapper.getBoundingClientRect().height;
  const tooltipBottomPosition =
    tooltip.getBoundingClientRect().y + tooltip.getBoundingClientRect().height;

  if (tooltipRightPosition > window.innerWidth) {
    tooltip.classList.add('product__link--left');
  }
  if (tooltipBottomPosition > imageWrapperBottomPosition) {
    tooltip.classList.add('product__link--top');
  }
}

function setTooltipPosition(product, imageWrapper) {
  const tooltip = product.querySelector('.product__link--js');

  product.addEventListener('click', function () {
    menageClasses(tooltip, imageWrapper);
  });
  product.addEventListener('mouseover', function () {
    menageClasses(tooltip, imageWrapper);
  });
}

galleryItems.forEach(function (galleryItem) {
  const imageWrapper = galleryItem.querySelector('.gallery__wrapper--js');
  const products = galleryItem.querySelectorAll('.product--js');

  products.forEach(function (product) {
    setTooltipPosition(product, imageWrapper);
  });
});
