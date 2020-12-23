document.addEventListener("DOMContentloaded", setup);

function setup() {
  alert("jaja");
 creatCanvas(100, 100);
  /*let cnv = createCanvas(100, 100);
  alert("jaja");
  cnv.mousePressed(canvasPressed);
  background(220);

  text('tap here to play', 10, 20);*/
}

function draw() {
  // put drawing code here
}
let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/doorbell');
  
}


function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}