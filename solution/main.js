import { translateEnglishToMorse } from "./translator.js";

const englishInput = document.querySelector("#english-word");
const morseTranslateResult = document.querySelector("#morse-translate-result");

const handleInput = (event) => {
  const inputValue = event.target.value;
  const result = translateEnglishToMorse(inputValue);
  morseTranslateResult.innerText = result;
};

englishInput.addEventListener("input", handleInput);