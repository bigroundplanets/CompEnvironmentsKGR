let noun = ['bed ', 'cheese', 'teeth', 'house', 'friend', 'food', 'town', 'time', 'joy', 'fish', 'hands', 'potential', 'stocks', 'stock', 'like', 'arms', 'anger' ];
 let verb = ['ran', 'run', 'sing', 'dance', 'clap', 'commit', 'plead', 'regurgitate', 'hold', 'fried', 'attacked', 'smiled', 'cried', 'cry'] ;
let adjective = ['nice', 'bad', 'ugly', 'gross', 'smart', 'incessant', 'happily'];

let kadjective = [
    "glamorous",
    "fashion-forward",
    "flawless",
    "fabulous",
    "sultry",
    "chic",
    "stylish",
    "iconic",
    "trend-setting",
    "extravagant",
    "luxurious",
    "sensational",
    "radiant",
    "glitzy",
    "opulent",
    "dazzling",
    "alluring",
    "sophisticated",
    "bold",
    "charismatic"
]

let name1 = 
[
    "Gary Busey",
    "Corey Feldman",
    "Lindsay Lohan",
    "Spencer Pratt",
    "Tila Tequila",
    "Dustin Diamond",
    "Farrah Abraham",
    "Scott Baio",
    "Jenna Jameson",
    "Octomom",
    "Chris Kattan",
    "Carrot Top",
    "Bai Ling",
    "Tommy Wiseau",
    "Snooki",
    "Honey Boo Boo",
    "Courtney Stodden",
    "Stephen Baldwin",
    "Vanilla Ice",
    "Carrot Top"
];
let name2 = [
    "Jennifer Lawrence",
    "Leonardo DiCaprio",
    "Scarlett Johansson",
    "Brad Pitt",
    "Angelina Jolie",
    "Tom Cruise",
    "Emma Watson",
    "Chris Hemsworth",
    "Gal Gadot",
    "Dwayne Johnson",
    "Margot Robbie",
    "Will Smith",
    "Natalie Portman",
    "Ryan Reynolds",
    "Zendaya",
    "Robert Downey Jr.",
    "Charlize Theron",
    "Chris Evans",
    "Beyoncé",
    "Keanu Reeves"
];
let place = [
    "A cozy café",
    "A bustling city park",
    "A quirky neighborhood street",
    "An old-fashioned diner",
    "A rooftop bar with a view",
    "A trendy co-working space",
    "A family-owned restaurant",
    "A karaoke bar",
    "A busy subway station",
    "A comedy club",
    "A laundromat",
    "A corner pub with live music",
    "A community center",
    "A street market",
    "A riverside promenade",
    "A vintage record store",
    "A local sports arena during a game",
    "A comedy improv theater",
    "A street corner with street performers",
    "A dog park with quirky dog owners"
];
let action = [
    "Cook a meal together",
    "Go for a hike",
    "Watch a movie",
    "Play board games",
    "Have a picnic in the park",
    "Go for a bike ride",
    "Take a dance class",
    "Visit a museum or art gallery",
    "Go on a road trip",
    "Attend a concert or live performance",
    "Go bowling",
    "Have a karaoke night",
    "Play mini-golf",
    "Go camping",
    "Take a cooking or baking class",
    "Go wine tasting",
    "Build a fort and have a movie marathon",
    "Attend a sports game",
    "Go ice skating",
    "Volunteer together at a local charity"
];
let consequence = [
    "Ended up with a pineapple stuck on their head",
    "Accidentally dyed their hair a bright color",
    "Got chased by a flock of angry geese",
    "Fell into a fountain while taking a selfie",
    "Mistakenly wore their shirt inside out all day",
    "Tripped over their own shoelaces in front of a crowd",
    "Accidentally sent a text meant for their crush to their boss",
    "Got their foot stuck in a toilet",
    "Lost a bet and had to wear a ridiculous costume all day",
    "Got locked out of their own house wearing only pajamas",
    "Spilled coffee on themselves right before an important meeting",
    "Accidentally sat on a whoopee cushion during a serious conversation",
    "Got chased by a small dog and climbed a tree to escape",
    "Got stuck in a revolving door",
    "Sneezed while drinking and sprayed everyone nearby",
    "Dropped their phone in the toilet while taking a selfie",
    "Fell asleep in a public place and woke up with marker drawings on their face",
    "Accidentally called their teacher 'mom' in class",
    "Got their finger stuck in a bowling ball",
    "Slipped on a banana peel in front of their crush"
];



function setup() {
    createCanvas(400, 400);
    background(220);
    let nounran = random(noun);
    let Rname1 = random(name1);
    let Rname2 = random(name2);
    let Rplace = random(place);
    let Raction = random(action);
    let Rconsequence = random(consequence);
    text(nounran, 50, 30);
    text(Rname1, 50, 50);
    text('and', 50, 60 );
    text(Rname2, 50, 70);
    text('went to', 50, 80);
    text(Rplace, 50, 90);
    text('where they', 50, 100)
    text(Raction, 50, 110);
 text('and the consequence was they', 50, 120);
    text(Rconsequence, 50, 130);

    
  }
  
  function draw() {
    fill(120, 100, 200);
    text('hello', 20, 30);
  }