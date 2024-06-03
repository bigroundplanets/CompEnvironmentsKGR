let name = ['Esti', 'Hev', 'Jamie', 'Box', 'Jake', 'Gus'];
let partner = [ 'Will Smith', 'Beyonce', 'Jodie', 'Jeff Bezos', 'Scott', 'racheal', 'P J harvey', 'Marget Thatchers rotting corpse', 'Boris JOhnson left foot', ' a cup', 'shark', 'bass hunter', 'kascadia', 'skrillex', 'Jared Lee', 'Ozzy Osbourne', 'Heather', 'Jamie', 'Rebecca', 'Jules Holland', 'Toe nail', 'Sonos', 'Karl', 'Katie', 'Molly', 'Tom', 'Jake',];
let job =['work at Isla Ray', 'famous movie star', 'punk band lord', 'sea lord', 'aristocrat', 'pickpocket', 'bungee jump operator', 'sumbarine man', 'naavy', 'pirate', 'steal Jamies Job', 'locksmith', 'bow and arrow hunter', 'paint the yellow lines on the street', 'green box operator', 'basket weaver', 'therapist', 'dermatoligist', 'geanacologist', 'urologist', 'toe masoose'];
let babiesN = [0, 42, 12, 8, 2 , 3 , 5, 7, 'ant colony', 'primodial soup'];
let house = ['hobbit hole', 'lighthouse', 'James Camerons house', 'titanic', 'igloo', 'Isla Ray', 'big Shoe', 'Hev right eye', 'hole', ' carboard kingdom', 'jelly bouncy castle', 'meatball', 'jamies shoes', 'top of the mountain', 'tattoo parlour', 'brothel', 'amazon factory', 'under a speed bump', 'shopping trolley', 'sky garden', 'treehouse', 'rocket', 'the moon'];
let country = ['new zealand', 'UK', 'Ghana',];
let weddingtheme= ['underwater', 'harry potter', 'sausage', 'crochet even the people', 'burp', 'saftey pin', 'black and gild', 'auttumn pinterest board', 'Isla Ray Basment', 'bird nest', 'treehouse', 'beach', 'woods', ];
let honeymoon = ['go to ASDA', 'Ghana', 'Russia', 'Egypt', 'divorce office', 'the hospitcal', 'the job centre', 'Isla Ray', 'pillow factory', 'stay in bed', 'get shrunk and go into heather belly', 'swim in th avocado', 'pond',];
let vehicle = ['ferrari', 'quad bike', 'motor bike', 'pony', 'pogostick', 'shopping trolley', 'lime bike', 'dream friend', 'dream converible', 'death chair', 'desk chair', 'brother piggy back', 'suitcase', 'running really fast',]; 
// let groombrides = [];

function setup() {
    createCanvas(600, 600);
    background(220);
    textSize(20);
    let nameran = random(name)
    let partnerran = random(partner);
    let jobran = random(job);
    let babiesNran = random(babiesN);
    let houseran = random(house);
    let countryran = random(country);
    let weddingthemeran = random(weddingtheme);
    let honeymoonran = random(honeymoon);
    let vehicleran = random(vehicle);
    text( nameran + ' will marry ' + partnerran, 50, 30);
    text('and will work' + jobran, 50, 50);
    text('they will have' + babiesNran + 'babies', 50, 70 );
    text('and they will all live together in a ' + houseran, 50, 90);
    text('in' + countryran +'.', 50, 110);
    text('their wedding was' + weddingthemeran + 'themed', 50, 130);
    text('and after they went to' + honeymoonran + 'on their honeymoon', 50, 150)
    text('they travel everywhere in their' + vehicleran, 50, 170);
//  text('and the consequence was they', 50, 120);
//     text(Rconsequence, 50, 130);

    
  }
  
  function draw() {
    fill(120, 100, 200);
    text('hello', 20, 30);
  }