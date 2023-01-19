// Question 1
const isUpperCase = (str) => {
  const upperStr = str.toUpperCase();
  return str == upperStr;
};

// Question 2
const removeVowels = (arr) => {
  return arr.map(el => el !== /[aeiou]/)
};

// Question 3
const wordCap = (str) => {
  const results = [];
  const strArr = str.split(' ');
  for(let i = 0; i < str.length; i++) {
    results.push(strArr[i][0].toUpperCase()+strArr[i].substring(1, strArr[i].length));
  }
};

// Question 4
const swapCase = (str) => {
  let results = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i].toUpperCase()) results += str[i].toLowerCase();
    else results += str[i].toUpperCase();
  }
  return results;
};

// Question 5
const staggeredCase = (str) => {
  let stagStr = '';
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(count % 2 === 0) stagStr += str[i].toUpperCase();
    else stagStr += str[i].toLowerCase();
  }
  return stagStr;
};

// Question 6
const wordLengths = (str) => {
  const lengthWord = [];
  const strArr = str.split(' ');
  for(let i = 0; i < strArr.length; i++) {
    lengthWord.push(`${strArr[i]} ${strArr[i].length}`);
  }
  return lengthWord;
};

// Question 7
const searchWord = (str) => {
  let obj = {};
  const splitArr = str.split(' ')
  for(let i = 0; i < arr.length; i++) {
    
  }
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
