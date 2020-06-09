let audioFile;
let amp;

function preload() {
  audioFile = loadSound('assets/audio/schmidt.mp3');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(toggleSound);
  amp = new p5.Amplitude();
}


function draw() {
  background(255);
  let level = amp.getLevel();
  ellipse(width / 2, height / 2, level * 1000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleSound() {
  if (audioFile.isPlaying()) {
    audioFile.stop();
  } else {
    audioFile.play();
  }
}