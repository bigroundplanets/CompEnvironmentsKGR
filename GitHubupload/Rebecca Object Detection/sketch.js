let video;
let detector;
let detections = [];
let placevar = ['a house', 'a shed', 'a moose', 'the belly of a whale', 'fridge magnet factory'];
let timevar = ['yesterday', 'the year 3000', 'a month ago', 'the exact moment when you hung up the phone, the last time you called your mother'];

function preload() {
  detector = ml5.objectDetector('cocossd');
  console.log('model loaded!')
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
}

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections);
}

function draw() {
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
    console.log(detections)
    
    // Randomize and display text if an object is detected
    let Rplacevar = random(placevar);
    let Rtimevar = random(timevar);
    text('This is a ' + object.label + ' made in ' + Rplacevar + ' ' + Rtimevar, object.x, object.y - 10);

}
}