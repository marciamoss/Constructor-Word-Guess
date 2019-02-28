# Constructor-Word-Guess

**Video link for Demo :** https://drive.google.com/open?id=1LzQMD9sZuWZM2pyDMPTID7hLDstYMJDZ 

* A node.js version of hangman game.
* To run the app first clone the git hub repo to your computer by following the below steps.
    1. In git bash window type git clone https://github.com/marciamoss/Constructor-Word-Guess.git
    2. Then type npm i
* Once the above two steps are done you can run the app by typing **node index**
* Rules are the same as hangman game. 
* You have 10  guesses to get the word right.
* Guess one letter at a time. If the letter is part of the word the guess count does not change and the letter 
  shows up in the spot as where it appears in the word.
* If you enter more than one letter or enter any non alphabet characters the game warns you to enter only one 
  alphabet and guess count does not change.
* If you get the word right you see a congratulatory message and moves on to play next word.
* It you get the word wrong it shows you the right word and moves on to play next word. 
* If you don't finish guessing the word within 10 guesses along with displaying the right word it shows you list of 
  wrong letters and list of right letters that you guessed for the losing round.
