const Letter=require('./Letter.js');

const Word = function (word) {

    this.letterObjects=[];
    this.guessCount=10;

    for(var i=0;i<word.length;i++){
        this.letterobj= new Letter(word[i]);
        this.letterObjects.push(this.letterobj);   
    }
    this.placeholder = (letterGuess) => {
        var displayWord=[];var correct;

        for(var i=0;i<word.length;i++){
            
            displayWord.push(this.letterObjects[i].returnChar(letterGuess));
            if(letterGuess==undefined){
                correct=0;
            }else if(this.letterObjects[i].guessed){
                correct=1;
            }
        }
        if(correct==1){
            console.log("Correct!!! ");
            
        }else if(correct==undefined){
            this.guessCount--;
            console.log("Wrong!!! ");
        }
        console.log("Guesses Left "+ this.guessCount);
        console.log(displayWord.join(" ")+"\n");
        var countDown=this.guessCount
        return {displayWord,countDown};
    }


};

module.exports=Word;
