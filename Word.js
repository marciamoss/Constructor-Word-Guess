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
            console.log("\nCorrect!!!\n ".green);
            
        }else if(correct==undefined){
            this.guessCount--;
            console.log("\nWrong!!!\n".red);
        }
        console.log("\nGuesses Left ".cyan+ this.guessCount+"\n");
        console.log(displayWord.join(" ").bold+"\n\n");
        var countDown=this.guessCount
        return {displayWord,countDown};
    }


};

module.exports=Word;
