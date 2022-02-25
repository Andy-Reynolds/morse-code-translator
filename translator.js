
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


export const translateEnglishToMorse = () => {
  const englishToMorseInput = document.getElementById("english-to-morse-input").value;
  let upperCaseWord = englishToMorseInput.toUpperCase();
  for (let i = 0; i < upperCaseWord.length; i++) {
    let character = upperCaseWord.charAt(i)
    console.log(character);
    let finalTranslation = lettersToMorseObject[character];
    console.log(finalTranslation);
    translatedEnglish.innerHTML += finalTranslation;
  };
};

// const word = "hello";

// for (let i = 0; i < word.length; i++) {
//   let character = word.charAt(i)
//   console.log(character);
// };