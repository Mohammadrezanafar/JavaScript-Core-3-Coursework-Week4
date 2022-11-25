let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let input = ["Mamad", "Ted", "ali"];
  // Act
  let expected = ["Mmd", "Td", "l"];
  // Assert
  let output =removeVowelsFromWords(input);
   expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
