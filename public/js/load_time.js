let loadTime = function () {
  return performance.now();
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('content loaded =', loadTime(), 'ms', document.cookie);
});
