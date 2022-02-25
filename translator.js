
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
  let upperCaseLetter = englishToMorseInput.toUpperCase();
  let finalTranslation = lettersToMorseObject[upperCaseLetter];
  translatedEnglish.innerHTML = finalTranslation;
};