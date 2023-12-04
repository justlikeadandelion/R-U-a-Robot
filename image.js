class Imagee {
  // let IMG;
  // let x;
  // let y;
  // let wordLength = 5;

  // let posX_arr =[];

  constructor(IMG) {
    // this.wordLength = 5;
    // this.word = word;
    this.posX_arr = [];
    // this.x = random(0, windowWidth - 100);
    // this.y = random(0, windowHeight - 100);
    this.IMG = IMG;

    // for (this.posX=0; this.posX < this.word.length; this.posX++){
    //   this.posX_arr.push (this.posX);
    // }
    // shuffle (this.posX_arr, true);
  }

  typing() {
    
    // random sections in an image
    for (this.posX = 0; this.posX < staticLength; this.posX++) {
      this.posX_arr.push(this.posX);
      this.posX_arr.splice(0,this.posX_arr.length-staticLength);
    }
    shuffle(this.posX_arr, true);
    print (this.posX_arr); 
    
    //random position of the image
    this.x = random(-100, windowWidth - 400);
    this.y = random(-100, windowHeight - 400);
    
  } //end typing

  show() {
    //   image(IMG,0,0);

    //   let PART = IMG.get(0,0,IMG.width/2,IMG.height/2);
    //   image (PART,x,y);

    for (this.n = 1; this.n <= this.posX_arr.length; this.n++) {
      this.PART = this.IMG.get(
        (this.IMG.width / this.posX_arr.length) * (this.n - 1),
        0,
        this.IMG.width / this.posX_arr.length,
        this.IMG.height
      );

      image(
        this.PART,
        (this.IMG.width / this.posX_arr.length) * this.posX_arr[this.n - 1] +
          this.x,
        this.y
      );
      // to separate each section with lines
      // image(PART, IMG.width / 5 *(n - 1)+x+n*5, y);
    } //end loop for
  } //end show function
} //end class Imagee
