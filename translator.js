
const translatedEnglish = document.getElementById("translated-english");
const englishToMorseButton = document.getElementById("english-to-morse-button");

const lettersToMorseObject = {
  "A" :	".-",
  "B" :	"-...",	
  "C" :	"-.-.",
  "D" :	"-..",	
  "E" :	".",	
  "F" :	"..-.",
  "G" :	"--.",	
  "H" :	"....",	
  "I" :	"..",	
  "J" :	".---",	
  "K" :	"-.-",	
  "L" :	".-..",
  "M" :	"--",
  "N" :	"-.",	
  "O" :	"---",	
  "P" :	".--.",	
  "Q" :	"--.-",	
  "R" :	".-.",
  "S" :	"...",	
  "T" :	"-",	
  "U" :	"..-",	
  "V" :	"...-",
  "W" :	".--",	
  "X" :	"-..-",
  "Y" :	"-.--",	
  "Z" :	"--.."
}


export const translateLettersToMorse = () => {
  const englishToMorseInput = document.getElementById("english-to-morse-input").value;
  // console.log("hello");
  // console.log(englishToMorseInput);
  // let letter = englishToMorseInput
  // console.log(letter);
  let upperCaseLetter = englishToMorseInput.toUpperCase();
  // console.log(upperCaseLetter);
  // console.log(lettersToMorseObject[upperCaseLetter]);
  let finalTranslation = lettersToMorseObject[upperCaseLetter];
  // return lettersToMorseObject[upperCaseLetter];
  translatedEnglish.innerHTML = finalTranslation;
};


//  stub out functions we need

// english to morse translator function
// export const translateEnglishToMorse = (englishWord) => {
  
  // };
  

// const A =	".-";	
// const B =	"-...";	
// const C =	"-.-.";
// const D =	"-..";	
// const E =	".";	
// const F =	"..-.";
// const G =	"--.";	
// const H =	"....";	
// const I =	"..";	
// const J =	".---";	
// const K =	"-.-";	
// const L =	".-..";
// const M =	"--";	
// const N =	"-.";	
// const O =	"---";	
// const P =	".--.";	
// const Q =	"--.-";	
// const R =	".-.";
// const S =	"...";	
// const T =	"-";	
// const U =	"..-";	
// const V =	"...-";	
// const W =	".--";	
// const X =	"-..-";
// const Y =	"-.--";	
// const Z =	"--..";
// const space = "/";

// const lettersToMorseObject = {
//   "A" :	".-",
//   "B" :	"-...",	
//   "C" :	"-.-.",
//   "D" :	"-..",	
//   "E" :	".",	
//   "F" :	"..-.",
//   "G" :	"--.",	
//   "H" :	"....",	
//   "I" :	"..",	
//   "J" :	".---",	
//   "K" :	"-.-",	
//   "L" :	".-..",
//   "M" :	"--",
//   "N" :	"-.",	
//   "O" :	"---",	
//   "P" :	".--.",	
//   "Q" :	"--.-",	
//   "R" :	".-.",
//   "S" :	"...",	
//   "T" :	"-",	
//   "U" :	"..-",	
//   "V" :	"...-",
//   "W" :	".--",	
//   "X" :	"-..-",
//   "Y" :	"-.--",	
//   "Z" :	"--.."
// }

// console.log(lettersToMorseObject["A"]);

// let letter = "z"
// let upperCaseLetter = letter.toUpperCase();

// export const translateLettersToMorse = (upperCaseLetter) => {
//     return lettersToMorseObject[upperCaseLetter]
//   };


// console.log(translateLettersToMorse(upperCaseLetter));



// function to convert each letter to morse
// const convertLetterToMorse = (letter) => {
//   if (letter == "a") {
//     console.log(A);
//   };
//   if (letter == "a") {
//     console.log(A);
//   };
// }


// function to split word into characters, each character then run through convert letter function



// let englishWord = "abc";

// for (let i = 0; i < englishWord.length; i++) {
//   let wordCharacters = englishWord.charAt(i);
//   console.log(wordCharacters);
// }

// each combo of morse can be a string variable. e.g.
// const a = ".-";

// first need a function that returns each character of a string
// for each character, the


