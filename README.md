# Problem Set: Test Driven Development



### Directions
1. Run `npm install` to load project dependencies.
2. See the problems below for a description of what each function is supposed to do. Each problem has 2 to 6 examples which you will write the test cases for! For example, Problem 1 has six examples, so you should write six `expect` statements (one testing each example). Problem 2 has four examples, so you must write four `expect` statements for those examples. 
3. For each problem, first write the unit tests in the `exercises.test.js` file.
4. Then, run `npm test` to ensure the test case you just wrote FAILS! This is because you have not written the code for the tests yet.
5. Once you've written the tests for a problem, implement your solution to the problem in `exercises.js` so that it passes all test cases before moving on to the next problem.
6. Repeat Steps 3 through 5 for each problem until you have finished all problems and all test cases are correctly written and are passing.

When you are done, push your final commits and submit through Canvas.


### Problems

1. Write a function that returns `true` if the string passed as an argument is a palindrome, or `false` otherwise. your function should be case-insensitive, and should ignore all non-alphanumeric characters.
```javascript
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
```

2. Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.
```javascript
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
```

3. Given a string of words separated by spaces, write a function that swaps the first and last letters of every word. You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
```javascript
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
```

4. Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes. Words consist of any sequence of non-space characters. In the first example below, there is one sequence of length `3`, one sequence of length `4`, one sequence of length `5` and one sequence of length `6`.
```javascript
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
```

5. Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
```javascript
union([1, 3, 5], [3, 6, 9]);     // [1, 3, 5, 6, 9]
union([2, 2, 2, 2], [10, 5, 2]); // [2, 10, 5]
```

6. Find the [first recurring character](https://www.youtube.com/watch?v=GJdiM-muYqc) in a string. If a string does not have a recurring character, return an empty string.
```javascript
firstRecurring('reuben');           // "e"
firstRecurring('anne');             // "n"
firstRecurring('restaurant');       // "r"
firstRecurring('paul');             // ""
```

7. Write a _multiplicative average_ function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
```javascript
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
```

8. Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
```javascript
multiplyList([3, 5, 7], [9, 10, 11]);  // [27, 50, 77]
multiplyList([5, 10, 15, 20], [1, 2, 3, 4]);  // [5, 20, 45, 80]
```

9. Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order. You may assume that the argument will always be a positive integer.
```javascript
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
```

10. Write a function that takes a string argument, and returns `true` if all of the alphabetic characters inside the string are uppercase; `false` otherwise. Ignore characters that are not alphabetic.

```javascript
isUpperCase('t');               // false
isUpperCase('T');               // true
isUpperCase('Four Score');      // false
isUpperCase('FOUR SCORE');      // true
isUpperCase('4SCORE!');         // true
isUpperCase('');                // true
```

11. Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

```javascript
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
```

12. Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase. You may assume that a word is any sequence of non-whitespace characters.

```javascript
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
```

13. Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

```javascript
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
```

14. Write a function that takes a string argument and returns that string with alternating cases for letter characters. The first letter character should be capitalized and subsequent letter characters will be alternating between lower and upper case. **Non-alphabetic characters should not be counted toward the alternation pattern.**

```javascript
staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
```

15. Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array. You may assume that every pair of words in the string will be separated by a single space.

```javascript
wordLengths('cow sheep chicken');                     // ["cow 3", "sheep 5", "chicken 7"]
wordLengths('baseball hot dogs and apple pie');       // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
wordLengths("It ain't easy, is it?");                 // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
wordLengths('Supercalifragilisticexpialidocious');    // ["Supercalifragilisticexpialidocious 34"]
wordLengths('');                                      // []
wordLengths();                                        // []
```
