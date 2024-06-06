let mobilenet;
let video;
let label = '';
let label1 = '';
let label2 = '';
let label3 = '';
let speech;

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        label = results[0].label;
      label1 = results[1].label;
      label2 = results[2].label;
        mobilenet.predict(gotResults);
    }
}

function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    video.hide();  // Hide the video element, and just show the canvas
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);

    // Initialize the p5.Speech object
    speech = new p5.Speech(); // Default speech synthesis object
    speech.onStart = startSpeaking;
    //speech.onEnd = endSpeaking;

    console.log(speech.voices);

    // Generate random number for word spoken
    amount = round(random(0, 7));
}

function voiceReady() {
    console.log(speech.voices);
}

function mousePressed() {
    amount = round(random(0, 7));
    // speech.setVoice('Moira');
    speech.setRate(0.5);
  
   let sentence = "I combined a" + label + "and" + label1 + "to make a" + label2;
    speech.speak(sentence); // Say something
}

function draw() {
    background(0);
    image(video, 0, 0);
    fill(255);
    textSize(20);

  text('I combined a', 20, 30);
    text(label, 20, 50);
    text('and a', 20, 70);
    text(label1, 20, 90);
    text('to make a', 20, 110);
    text(label2, 20, 130);
}

function startSpeaking() {
    console.log('Speech started');
}

