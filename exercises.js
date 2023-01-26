// Question 1
const isUpperCase = str => {
  const upperStr = str.toUpperCase();
  return str == upperStr;
};

// Question 2
function removeVowels(arr) {
  const vowels = /[aeiou]/ig;
  return arr.map(el => el.replace(vowels,''));
}

// Question 3
const wordCap = str => {
  let results = '';
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if(i === strArr.length - 1) results += strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1, strArr[i].length);
    else results += strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1, strArr[i].length).toLowerCase() + ' ';
  }
  return results;
};

// Question 4
const swapCase = str => {
  let results = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) results += str[i].toLowerCase();
    else results += str[i].toUpperCase();
  }
  return results;
};

// Question 5
const staggeredCase = str => {
  let flag = true;
  let temp = "";
  for(let i = 0; i<str.length; i++){
    if(!Number(str[i]) && flag && str[i] != ' '){
      temp += str[i].toUpperCase()
    }
    else if(Number(str[i]) || str[i] === ' '){
      temp += str[i]
      continue;
    } 
    else{
      temp += str[i].toLowerCase()
    }
    flag = !flag
  }
  return temp
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
const searchWord = (text, word) => {
  return text.replace(/[.!?,]/ig, "").split(" ").filter(w => w.toLowerCase() === word.toLowerCase()).length;
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
