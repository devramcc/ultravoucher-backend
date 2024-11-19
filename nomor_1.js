const arr = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function sortStringAlphabetically(input) {
  let chars = [];
  for (let i = 0; i < input.length; i++) {
    chars.push(input[i]);
  }

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length - 1; j++) {
      if (chars[j] > chars[j + 1]) {
        let temp = chars[j];
        chars[j] = chars[j + 1];
        chars[j + 1] = temp;
      }
    }
  }

  return [...chars].join("");
}

function wordGrouping(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    const sortedWord = sortStringAlphabetically(arr[i]);

    if (!result[sortedWord]) {
      result[sortedWord] = [];
    }

    result[sortedWord].push(arr[i]);
  }

  return Object.values(result);
}

console.log(wordGrouping(arr));
