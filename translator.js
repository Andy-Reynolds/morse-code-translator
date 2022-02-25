//  stub out functions we need

// english to morse translator function
// export const translateEnglishToMorse = (englishWord) => {
  
  // };
  

const A =	".-";	
const B =	"-...";	
const C =	"-.-.";
const D =	"-..";	
const E =	".";	
const F =	"..-.";
const G =	"--.";	
const H =	"....";	
const I =	"..";	
const J =	".---";	
const K =	"-.-";	
const L =	".-..";
const M =	"--";	
const N =	"-.";	
const O =	"---";	
const P =	".--.";	
const Q =	"--.-";	
const R =	".-.";
const S =	"...";	
const T =	"-";	
const U =	"..-";	
const V =	"...-";	
const W =	".--";	
const X =	"-..-";
const Y =	"-.--";	
const Z =	"--..";



let englishWord = "abc";

for (let i = 0; i < englishWord.length; i++) {
  let wordCharacters = englishWord.charAt(i);
  console.log(wordCharacters);
  if (wordCharacters == "a") {
    console.log(A);
  };
  if (wordCharacters == "b") {
    console.log(B);
  };
  if (wordCharacters == "c") {
    console.log(C);
  };
}

// each combo of morse can be a string variable. e.g.
// const a = ".-";

// first need a function that returns each character of a string
// for each character, the


