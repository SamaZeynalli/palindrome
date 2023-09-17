// Given a list of words: 
// const words = ["level", "radar", "text", "river", "madam", "sales", "mom"];
// Find the count of palindrome words in the list


const words = ["level", "radar", "text", "river", "madam", "sales", "mom"];
let count = 0;

for (const string of words) {
  const length = string.length;
  let palindrome = true;

  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      palindrome = false;
    }
  }
  if (palindrome) {
    count++;
  }
}

console.log(count);



