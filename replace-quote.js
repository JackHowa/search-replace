/*jshint esversion: 6 */

function myReplace(str, before, after) {
  const firstLetterAfter =
    before[0].toUpperCase() === before[0]
      ? after[0].toUpperCase()
      : after[0].toLowerCase();

  const newAfter = after.replace(after[0], firstLetterAfter);

  return str.replace(before, newAfter);
}

const output = myReplace(
  "A quick brown fox jumped over the lazy dog",
  "Jumped",
  "leaped"
);
console.log(output);
