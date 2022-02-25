// Must import functions

import { translateLettersToMorse } from "./translator.js";

// Do our dom stuff here
// const englishToMorseInput = document.getElementById("english-to-morse-input").value;
const englishToMorseButton = document.getElementById("english-to-morse-button");
const translatedEnglish = document.getElementById("translated-english");

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


// const translateLettersToMorse = () => {
//   const englishToMorseInput = document.getElementById("english-to-morse-input").value;
//   // console.log("hello");
//   // console.log(englishToMorseInput);
//   // let letter = englishToMorseInput
//   // console.log(letter);
//   let upperCaseLetter = englishToMorseInput.toUpperCase();
//   // console.log(upperCaseLetter);
//   // console.log(lettersToMorseObject[upperCaseLetter]);
//   let finalTranslation = lettersToMorseObject[upperCaseLetter];
//   // return lettersToMorseObject[upperCaseLetter];
//   translatedEnglish.innerHTML = finalTranslation;
// };



// on button click, a function is run that translates text and changes the innerhtml of translated english div
englishToMorseButton.addEventListener("click", translateLettersToMorse);