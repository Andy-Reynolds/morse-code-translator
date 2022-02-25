//  create scaffolding for our tests
import { translateEnglishToMorse } from "./translator.js";
import { expect, it, describe } from "@jest/globals";


describe("translate words from english to morse", () => {
  // positive test case for a single letter
  it("letter should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("s");
    expect(result).toBe("...");
  });
  
  // positive tests for a single word
  it("word should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  
  // positive tests for multiple words
  it("sentence should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("hello I am Andy");
    expect(result).toBe(".... . .-.. .-.. --- / .. / .- -- / .- -. -.. -.--");
  });
  
  
  // negative tests for edge cases
});



// describe("translate words from morse to english", () => {
//   // positive test case for a single letter
//   it("letter should translate correctly to morse code", () => {
//     const result = translateMorseToEnglish("...");
//     expect(result).toBe("s");
//   });
  
//   // positive tests for a single word
//   it("word should translate correctly to morse code", () => {
//     const result = translateMorseToEnglish(".... . .-.. .-.. ---");
//     expect(result).toBe("hello");
//   });
  
//   // positive tests for multiple words
//   it("sentence should translate correctly to morse code", () => {
//     const result = translateMorseToEnglish(".... . .-.. .-.. --- / .. / .- -- / .- -. -.. -.--");
//     expect(result).toBe("hello i am andy");
//   });

//   // negative tests for edge cases

// });
