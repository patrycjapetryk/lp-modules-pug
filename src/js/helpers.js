export function waitForElement(id, callback) {
  var interval = setInterval(function () {
    if (document.querySelector(id)) {
      clearInterval(interval);
      callback();
    }
  }, 200);
}
