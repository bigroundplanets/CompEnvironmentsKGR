noun = ['Whole Foods', 'Erewhon', 'Trader Joes', 'Costco', 'Kroger', 'Publix', 'Safeway', 'Wegmans', 'Starbucks', 'Chipotle', 'Panera Bread', 'Subway', 'Shake Shack', 'In-N-Out Burger', 'Chick-fil-A', 'Five Guys', 'Dominos', 'Dunkin Donuts', 'The Cheesecake Factory', 'Olive Garden', 'Red Lobster', 'Applebees', 'IHOP', 'Outback Steakhouse', 'Buffalo Wild Wings'];

names = ['Beyonce', 'Elton John', 'Taylor Swift', 'Joe Biden', 'Chris Hemsworth','Dwayne Johnson', 'Will Smith', 'Robert Pattinson', 'Leonardo DiCaprio'];

verbs = ["walked", "ran", "jumped", "talked", "sang", "wrote", "read", "slept", "ate", "drank",
"played", "thought", "fought", "bought", "fought", "taught", "learned", "listened", "danced", "painted",
"cooked", "laughed", "cried", "smiled", "drove", "flew", "built", "destroyed", "created", "saw",
"met", "won", "lost", "asked", "answered", "found", "lost", "helped", "hurt", "shared",
"visited", "smoked", "loved", "knew", "freaked out", "began", "networked", "spoke", "moved", "stayed"];


adjectives = ['Beautiful', 'Brave', 'Clever', 'Delightful', 'Energetic', 'Fascinating', 'Generous', 'Harmonious', 'Innovative', 'Joyful', 'Kind', 'Luminous', 'Magnificent', 'Noble', 'Optimistic', 'Peaceful', 'Quick', 'Radiant', 'Smart', 'Thoughtful', 'Unique', 'Vibrant', 'Wise', 'Youthful', 'Zealous'];

adverbs = ['Quickly', 'Bravely', 'Quietly', 'Smoothly', 'Eagerly', 'Firmly', 'Warmly', 'Sincerely', 'Gradually', 'Happily', 'Cleverly', 'Patiently', 'Carefully', 'Deliberately', 'Effortlessly', 'Graciously', 'Steadily', 'Unusually', 'Surprisingly', 'Casually', 'Frequently', 'Interestingly', 'Immediately', 'Energetically', 'Cheerfully']

function setup() {
  createCanvas(400, 400);
  amount = round(random(0, 24),0);
  amount1 = round(random(0, 24),0);
  verbnum = round(random(0, 49),0);
  namesnum = round(random(0, 7),0);
  namesnum1 = round(random(0, 7),0);
  
  
}

function mouseClicked() {  
  amount = round(random(0, 24),0);
  amount1 = round(random(0, 24),0);
  verbnum = round(random(0, 49),0);
  namesnum = round(random(0, 7),0);
  namesnum1 = round(random(0, 7),0);};

function draw() {
  background(220);
  
  text(names[namesnum], 20, 30);
  text('and', 20, 50);
  text(names[namesnum1], 20, 70);
  text('went to', 20, 90);
  text(noun[amount], 20, 110);
    text('where they', 20, 130);
  text(verbs[verbnum], 20, 150);
   text('it was', 20, 170);
  text(adverbs[amount1], 20, 190);
  text(adjectives[amount], 20, 210);
  textSize(20)
}