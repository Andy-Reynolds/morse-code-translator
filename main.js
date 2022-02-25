// Import functions
import { translateEnglishToMorse } from "./translator.js";

// variables
// const englishToMorseInput = document.getElementById("english-to-morse-input").value;
// const translatedEnglish = document.getElementById("translated-english");
const englishToMorseButton = document.getElementById("english-to-morse-button");


// on button click, runs translateLettersToMorse function
englishToMorseButton.addEventListener("click", translateEnglishToMorse);