const Letter = function (wordLetter) {
    this.underlyingLetters=wordLetter;
    this.guessed=false;
    this.blank='_';

    this.returnChar = (letterGuess) => {
        if (letterGuess===this.underlyingLetters) {
          this.guessed= true;
          this.blank=this.underlyingLetters;
          return this.underlyingLetters;
        }
        else {
            this.guessed=false;
            return this.blank;
        }
    };
};

module.exports=Letter;