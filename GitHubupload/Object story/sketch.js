// ml5.js: Object Detection with COCO-SSD (Webcam)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/1.3-object-detection.html
// https://youtu.be/QEzRxnuaZCk

// p5.js Web Editor - Image: https://editor.p5js.org/codingtrain/sketches/ZNQQx2n5o
// p5.js Web Editor - Webcam: https://editor.p5js.org/codingtrain/sketches/VIYRpcME3
// p5.js Web Editor - Webcam Persistence: https://editor.p5js.org/codingtrain/sketches/Vt9xeTxWJ

// let img;
let video;
let detector;
let detections = [];
let placevar = ['a house', 'a shed', 'a moose', 'the belly of a whale', 'fridge magnet factory'];
let timevar = ['yesterday', 'the year 3000', 'a month ago', 'the exact moment when you hung up the phone, the last time you called your mother'];
let objectLabelS = object.label[i];

function preload() {
  // img = loadImage('dog_cat.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video, gotDetections);
}

function setup() {
  createCanvas(640, 600);
  background(50, 150, 170);
//   trying to write the sentences out - maybe needs to be in a if statement - if object detected then ... show text

 let Rplacevar = random(placevar);
 let Rtimevar = random(timevar);



  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections);

 if (detections.length > 0 ) {
  let objectLabelS = object.label[i];
  console.log(detections);
  fill(255, 204, 0);
  textSize(30);
  text('This is a' + objectLabelS + 'it was made in' + Rplacevar + Rtimevar, 10, 550);
  // text(object.label, 20, 10);
  // text('it was made in', 30, 10);
  // text(Rplacevar, 50, 10);
  // text(Rtimevar, 60, 10);}
}}



function draw() {
  image(video, 0, 0);
  // text('hello', 10, 570);
  // text('This is a' + objectLabelS + 'it was mad
// e in' + Rplacevar + Rtimevar, 10, 550);

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
  }

  // fill(30, 40, 50);

}
