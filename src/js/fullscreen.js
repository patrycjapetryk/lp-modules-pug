const scrollbarWidth = window.innerWidth - document.body.clientWidth;
if (navigator.appVersion.indexOf('Win') != -1) {
  document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);
} else {
  document.body.style.setProperty('--scrollbarWidth', '0px');
}
