//select elements
var screenSize = document.querySelector("#screenSize"),
    windowSize = document.querySelector("#windowSize");

//intial function to start processes, get screen size, window size, and check if screen resizing
function init(){
  getScreenSize();
  getWindowSize();
  window.onresize = resize;
}

//if window resize, run window and screen functions to get and set new sizes to page
function resize(){
  getWindowSize();
  getScreenSize();
}

// define screen size and set to page
function getScreenSize(){
  var sSizes = {
    sh : screen.height,
    sw : screen.width,
  };
  screenSize.innerHTML = sSizes.sw + 'w &times; ' + sSizes.sh + 'h';
}

// define window inner sizes and set to page
function getWindowSize(){
  var wSizes = {
    ww : window.innerWidth,
    wh : window.innerHeight
  };
  windowSize.innerHTML = wSizes.ww + 'w &times; ' + wSizes.wh+ 'h';
}

// initialize page
init();