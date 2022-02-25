// Import functions
import { translateLettersToMorse } from "./translator.js";

// variables
const englishToMorseInput = document.getElementById("english-to-morse-input").value;
const englishToMorseButton = document.getElementById("english-to-morse-button");
const translatedEnglish = document.getElementById("translated-english");



// on button click, runs translateLettersToMorse function
englishToMorseButton.addEventListener("click", translateLettersToMorse);