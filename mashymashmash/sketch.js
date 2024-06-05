let name = ['kay', 'becky', 'gus', 'amber', 'maisy', 'scarlet', 'maz','sara', 'macey', 'aoife', 'immie'];
let partner = [ 'ethel cain', 'mark corrigan', 'jeremy usborne','barefoot joe', 'charli xcx', 'martin lewis money saving expert','kay', 'becky', 'gus', 'amber', 'maisy', 'emily', 'scarlet', 'maz', 'sara', 'macey', 'aoife', 'immie','the whole of boygenius', '' ];
let job =['money saving expert', 'shein warehouse employee', 'barefoot joe pizza jail', 'deliveroo driver', 'cci technican', 'tfl bus driver', 'gay barista', 'bar staff', 'handyperson', 'postperson', 'optician'];
let babiesN = [0, 42, 12, 8, 2 , 3 , 5, 7, 'ant colony', 'too many'];
let house = ['the nags head','barefoot joes', 'widnes vikings stadium', 'avalon cafe', 'venue mot', 'big house, huge even', 'creative computing institute','camberwell college of arts', 'angelina house', 'aspinall road'];
let country = ['new zealand', 'UK', 'Ghana', 'scotland', 'ireland', 'america', ''];
let weddingtheme= ['under the sea', 'harry potter', 'english breakfast', 'lavender wedding', 'vegan', 'rooftop bar', 'blue and black or white and gold', 'christian girl autumn', 'twee', 'forest', 'northern soul', 'beach', 'woods', ];
let honeymoon = ['go to ASDA', 'Ghana', 'Russia', 'Egypt', 'divorce office', 'the hospital', 'the job centre', 'parents house', 'stay in bed',  'widnes', 'pond',];
let vehicle = ['ferrari', 'quad bike', 'motor bike', 'pony', 'pogostick', 'shopping trolley', 'lime bike', 'voi scooter', 'dream convertible', 'aeroplane', 'desk chair', 'piggy back', 'suitcase', 'by running really fast',]; 
// let groombrides = [];

function setup() {
    createCanvas(800, 800);
    background(220);
    textSize(25);
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
    text(' and will work as a ' + jobran, 50, 50);
    text(' they will have ' + babiesNran + ' babies', 50, 70 );
    text(' and they will all live together in  ' + houseran, 50, 90);
    text(' in' + countryran +'.', 50, 110);
    text(' their wedding was ' + weddingthemeran + ' themed', 50, 130);
    text(' and after they went to ' + honeymoonran + ' on their honeymoon', 50, 150)
    text(' they travel everywhere in their ' + vehicleran, 50, 170);
//  text('and the consequence was they', 50, 120);
//     text(Rconsequence, 50, 130);

    
  }
  