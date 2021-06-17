// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word="";
function initialPrompt() {
   console.log("Let's play some scrabble!"+ "\n");
    word=input.question("please enter the word to score : ")
   //console.log(oldScrabbleScorer(word));
}

let simpleScore = function(localWord){
  localWord=localWord.toLowerCase();
  let letterPoints=localWord.length;
  return letterPoints;
}
//console.log(simpleScore("Test"));
let vowelBonusScore=function(word) {
  let word1=word.toLowerCase();
  let vowel=0;
  let consonent=0;
  for(let i=0;i<word.length;i++){
    
    if(word1[i]==="a"||
       word1[i]==="e"||
       word1[i]==="i"||
       word1[i]==="o"||
       word1[i]==="u"){
         
          vowel+=1;  
       }else{
         consonent+=1;
       }
  }
  let sum=(vowel*3)+(consonent*1);
  //console.log(sum);
  return sum;

}

let scrabbleScore=function(word){
  word=word.toLowerCase();
  let alphabets;
  let sum=0;
  for(i=0;i<word.length;i++){
    alphabets=word[i];
    sum+=newPointStructure[alphabets];
  }
  return sum;
}

const scoringAlgorithms = [{
          name:"Simple Score",
   description:"Each letter is worth 1 point",
scoringFunction:simpleScore
},

 {
  name:"Bonus Vowels",
  description:"Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction:vowelBonusScore
},

 {
  name:"Scrabble",
  description:"The traditional scoring algorithm.",
  scoringFunction:scrabbleScore
} ];

function scorerPrompt() {
  let response=input.question(`Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `);
  if(response==0){
    //console.log("Algorithm name:",scoringAlgorithms[0].name);
    //console.log("Scorer function Result:"
    console.log(`Score for '${word}' is `+scoringAlgorithms[0].scoringFunction(word));

  }
  if(response==1){
    //console.log("Algorithm name:",scoringAlgorithms[1].name);
    console.log(`Score for  ` +word+ `  is `+scoringAlgorithms[1].scoringFunction(word));
  }
  if(response==2){
    //console.log("Algorithm name:",scoringAlgorithms[2].name);
    console.log(`Score for ${word} is`+scoringAlgorithms[2].scoringFunction(word));
  }


}

function transform(oldPointStructure){
  let newObject={};
  for(const[key,value]of Object.entries(oldPointStructure)){
  for(const newValue of value){
    newObject[newValue.toLowerCase()]=Number(key);
    
  }
  //console.log(`${key}${value}`);
  }return newObject
}console.log(transform(oldPointStructure))



let newPointStructure=transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   

   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

