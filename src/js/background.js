const background = document.querySelector('.background--js');

function backgroundAnimation() {
  const opacityValue = function () {
    let opacity = 1 - 0.0001 * window.scrollY;
    if (opacity < 0.3) {
      opacity = 0.3;
    }
    return opacity;
  };
  background.style.opacity = opacityValue();
}

document.addEventListener('scroll', backgroundAnimation);
window.addEventListener('resize', backgroundAnimation);
window.addEventListener('load', backgroundAnimation);

//- handle background animation
//- script.
//-   (function () {
//-   var background = document.querySelector('.background--js');
//-   var backgroundAnimation = function () {
//-     var opacityValue = function () {
//-       var opacity = 1 - 0.0001 * window.scrollY;
//-       if (opacity < 0.3) {
//-         opacity = 0.3;
//-       }
//-       return opacity;
//-     };
//-     background.style.opacity = opacityValue();
//-   };
//-   backgroundAnimation();
//-   document.addEventListener('scroll', backgroundAnimation);
//-   window.addEventListener('resize', backgroundAnimation);
//-   })();
