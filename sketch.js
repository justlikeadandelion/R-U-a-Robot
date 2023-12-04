let textfield;
let words;
let word;
let shuffledWord = [];
let multipleWords = [];
let index;
let output;
let currentTyping = [];

let wordString;
let wordStringShuffle;
let wordArray;

let G2;
let Anthony;
let opening = ['R U a Robot?'];

let IMG;
let image1; //object
let image_arr = [];
let obj_order;
let value;
let staticLength = [];
let kittens = [];

// let x;
// let y;
// let wordLength = 5;
// let posX_arr =[];

function preload() {
  G2 = loadFont("G2-Erika-Mono.otf");
  Anthony = loadFont("Anthony.otf");
  
  for (let i = 0; i < 10; i++) {
    kittens[i] = loadImage("assets2/IMG-0" + i + ".jpg");
    kittens['1'+i] = loadImage("assets2/IMG-1" + i + ".jpg");
    kittens['2'+i] = loadImage("assets2/IMG-2" + i + ".jpg");
    kittens['3'+i] = loadImage("assets2/IMG-3" + i + ".jpg");
    kittens['4'+i] = loadImage("assets2/IMG-4" + i + ".jpg");
  }
  
  // kittens[50] = loadImage("assets2/IMG-50.jpg");
  // kittens[51] = loadImage("assets2/IMG-51.jpg");
  
  // kitten = loadImage('assets2/IMG-20.jpg');
  // kittens[0] = loadImage('assets2/IMG-00.jpg');
  
  // IMG = loadImage("assets/IMG2.png");
  print("hey");
  
} //end preload

function setup() {
  createCanvas(windowWidth, windowHeight);
  textfield = createInput("Talk to me in sentences.");
  textfield.position(windowWidth / 2 - textfield.width / 2, windowHeight - 50);
  textfield.input(newTyping);
  output = select("#output");

  // wordLength = 5;
  // posX_arr =[];
  // let x = random(0, windowWidth - 100);
  // let y = random(0, windowHeight - 100);
  //   for (var posX=0; posX < wordLength; posX++){
  //   posX_arr.push (posX);
  // }
  // shuffle (posX_arr, true);
  
  obj_order = 0;
  
  shuffle(kittens, true);
  // print (kittens);
  // kittens_shuf = 
  
  for (let i = 0; i < 50; i++) {
    IMG = kittens[i];
    image1 = new Imagee(IMG);
    image_arr.push(image1);
  }
  
} // end setup

function newTyping() {
  print(textfield.value());
  opening = [];

  words = textfield.value().split(" ");

  for (var i = 0; i < words.length; i++) {
    word = words[i].split("");
    // shuffledWord = shuffle(word);
    // currentTyping = word.join("");
    
    if (word.length < 4) {
      shuffledWord = word;
      currentTyping = shuffledWord.join("");
    } else {
      wordString = word.join("");
      wordStringShuffle = wordString.substring(1, word.length - 1);
      var firstLetter = wordString[0];
      var lastLetter = wordString[wordString.length - 1];

      wordArray = wordStringShuffle.split("");
      shuffledWord = shuffle(wordArray);

      shuffledWord.unshift(firstLetter);
      shuffledWord.push(lastLetter);

      console.log(word, shuffledWord);
      currentTyping = shuffledWord.join("");
    }

    print(word.length);
    print(shuffledWord.length);
    staticLength.push(shuffledWord.length);
    staticLength.splice(0, staticLength.length - 1);
    print(staticLength);
    
    // for (let i = 0; i < image_arr.length; i++) {
    // image_arr[i].typing();
    // }
    
    image_arr[obj_order].typing();
    print (obj_order);
    
  } // end for loop

} // end newtyping function


function keyPressed() {
  if (key === " ") {
    multipleWords.push(shuffledWord.join(""));
    value = 1;
  } else {
    value = 0;
  }
  
  if (key === " "){
    obj_order++
    if (obj_order >= image_arr.length){
      obj_order = 0;
    }
  }

  if (keyCode === BACKSPACE && textfield.elt !== document.activeElement) {
    multipleWords.pop();
  }
}

function draw() {
  // input.value();
  background(0);
  
  colorMode(HSB);
  fill(67,67,100);
  textSize(250);
  textAlign(LEFT, TOP);
  textFont(Anthony);
  textLeading(200);
  text(opening[0], 0,0, windowWidth, windowHeight);
  
  colorMode(HSB);
  fill(67,67,100);
  textSize(200);
  textAlign(CENTER, CENTER);
  textFont(Anthony);
  text(currentTyping, 0,0, windowWidth, windowHeight-100);
  
  fill(255);
  textSize(48);
  // rectMode(CORNERS);
  textAlign(CENTER, CENTER);
  textFont(G2);
  textLeading(45);
  text(multipleWords.join(" "), windowWidth/8, windowHeight/8, windowWidth - windowWidth/4, windowHeight - windowHeight/4);

  if (value == 1) {
    // for (let i = 0; i < image_arr.length; i++) {
    // image_arr[i].show();
    // }
    image_arr[obj_order].show();
    print (obj_order);
  } 

  // image(kittens[49], 0, 0);
  // image(kitten,0,0);
}
