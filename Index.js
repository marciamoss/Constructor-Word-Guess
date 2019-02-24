// Load the NPM Package inquirer
const inquirer = require("inquirer");

const Word = require("./Word.js");

const randomWords = require('random-words');

var theWord=randomWords();

var Wordprocess= new Word(theWord);

var letterArr=[], resultSoFar, dup, wrongLetter=[],correctLetter=[];

resultSoFar=Wordprocess.placeholder();

function getLetter(){
    inquirer.prompt([
        {
            name: "name",
            message: "Guess a letter"
            
        },
    ]).then(function(letter) {

        dup=0;
       
        letterArr.push(letter.name.toLowerCase());

        //each letter check if its already been guessed
        if (letterArr.length>1){
            for( var z = 0; z < (letterArr.length-1); z++){
                lth=letterArr.length-1;
                if (letterArr[z]===letterArr[lth]){
                    console.log("Letter already guesses try another letter");
                    letterArr.pop();
                    dup=1;
                }
            }
        }

        if(dup==0){
            resultSoFar=Wordprocess.placeholder(letterArr[(letterArr.length-1)]);
        }
        
        //this checks only alphabets are entered and if only one alpha is entered each time 
        if(letter.name.length!=1 || (!letter.name.match(/[a-z]/i))){
            console.log("Guess only one letter");
        }
        
        if((resultSoFar.countDown>0 && resultSoFar.countDown<=10) && resultSoFar.displayWord.indexOf("_")>-1){
            getLetter();
        }else{
            
            for(var i=0;i<letterArr.length;i++){
                for(var k=0;k<resultSoFar.displayWord.length;k++){
                    if(letterArr[i]===resultSoFar.displayWord[k]){
                        correctLetter.push(letterArr[i]);
                        letterArr[i]=true; 
                    }
                }

            }

            for(var i=0;i<letterArr.length;i++){
                if(letterArr[i]!=true){
                    wrongLetter.push(letterArr[i]);
                }
            }

            if(resultSoFar.displayWord.indexOf("_")===-1){
                console.log("YOU GOT IT RIGHT!!!!\n\n");
            }

            console.log("Wrong letters guessed "+wrongLetter+"\n\n"+"Right Letters Guessed "+correctLetter);
            
        }
    });
}

getLetter();
