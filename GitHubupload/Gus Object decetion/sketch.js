let mobilenet;
let video;
let label = '';

// variables for text to speech
let speech;
let word = ['help', 'hello becky', 'goodbye', 'hello', 'friend', 'sad', 'angry', 'noise'];



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
        mobilenet.predict(gotResults);
    }
 }

 function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    // video.hide();  
    //cant seem to get sketch to appear so removing this for now
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);


    speech = new p5.Speech(voiceReady); //callback, speech synthesis object
    // speech.onLOad = voiceReady;
    speech.started(startSpeaking);
    //speech.ended(endSpeaking);

    console.log(voice.voices);
    
    
    //generate random number for word spoken
    amount = round(random(0, 7),0);

    function voiceReady() {
        console.log(speech.voices);
      }

 }

 

 function mousePressed() {
    // speech.voice('Moira');
    //generate random number for word spoken
   amount = round(random(0, 7),0);
   speech.setVoice('Moira');
   speech.speak(label); // say something



 }

 function draw() {
    background(0);
    image(video, 0,0);
    fill(255);
    textSize(20);
    text(label, 200,200);

  
    text(label, 20, 30);
    text('and', 20, 50);
    text(label, 20, 70);
    text('went to', 20, 90);
    text(label, 20, 110);
      text('where they', 20, 130);
    text(label, 20, 150);
     text('it was', 20, 170);
    text(label, 20, 190);
    text(label, 20, 210);
    textSize(20)

 }