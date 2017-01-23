console.log("hello array mehtods");

// FOR EACH LOOP:

var colors = ["red", "blue", "green", "yellow", "orange", "teal"];

colors.forEach(function(item, index) {
  var newColorString = "I like this color" + item;
  console.log("newColorString", index, newColorString);
});

// for each loop takes 3 arguments:
// 1. item in array
// 2. index
// 3. optional what array you're looking at, ex. colors array

// same as:
for (var i = 0; i < colors.length; i++) {
}

// _____ will allow you to execute some logic based on the items in the array

// .MAP, SPLIT, REVERSE, JOIN

var reversedColors = colors.map(function(color) {
  console.log("split", color.split(""));
  return color.split("").reverse().join("");
});
// RETURN should be the last thing you do in a function ***

console.log("reversedColors", reversedColors);

// from JN: sometimes i find it easier to read a function created within a prop like this:
// var reversedColors = colors.map(
//     function(color) {
//         return color.split("").reverse().join("");
//     });

// the map & the filter create new arrays for you
// .map returns a new array with the same # of elements without affecting the original;
// **** BEST PRACTICE: ****  USE .map to do a function on the array without affecting the original

// same as the following:
var reversedColors = [];
for (var i = 0; i < colors.length; i++) {
  var reversed = colors[i].split("").reverse().join("");
  reversedColors.push(reversed);
}

// FILTER:
// you can populate a new array from the original/existing array

var fourLetters = colors.filter(function(color){
  return color.length === 4;
});

console.log("fourLetters", fourLetters);
// this returns "blue" & "teal" b/c these are the items in the original array that have 4 ltrs

// equiv to running a loop, comparing if item === 4, & putting in new array

// same as:
var fourLetters = [];
for (var i = 0; i < colors.length; i++) {
  if (colors[i].length === 4) {
    fourLetters.push(colors[i]);
  }
}
console.log("fourLetters", fourLetters);

// REDUCE method will take all the numbers & reduce them to one value:

var numbers = [51, 10, 62, 4, 13, 9];

var sum = numbers.reduce(function(prev, curr){
  console.log("prev:", prev, "curr:", curr);
  return prev + curr;
});
console.log("sum", sum);

// same as:
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// CONSOLE.LOG returns:
// prev: 51 curr: 10
// main.js:72 prev: 61 curr: 62
// main.js:72 prev: 123 curr: 4
// main.js:72 prev: 127 curr: 13
// main.js:72 prev: 140 curr: 9
// main.js:75 sum 149

// whenever you're using a built-in method, POSITION ALWAYS MATTERS

// CHAINING EXAMPLE:

// instructions:
// sort the numbers in descending order
// remove any integers > 19
// multiply each remaining # by 1.5 and then subtract 1.
// then output (console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers
.sort(function(a, b){return a - b})
.reverse()
// console.log("chainingResult", chainingResult);
// returns: [29, 25, 21, 20, 18, 13, 12, 11, 8, 7, 6, 3, 2, 1]
// sorts nums in descending order
.filter(function(num){return num < 19})
// only returns numbers that are > 19
.map(function(num){return (num * 1.5) - 1})
// multiplies each remaining # by 1.5 and then subtracts 1
.reduce(function(prev, curr){return prev + curr});
// outputs the sum of all the resulting numbers
console.log("chainingResult", chainingResult);
// CL result: chainingResult 111.5

// a & b are first two values inside the array ***

// if you don't do sort with this compare function, 100 will come before 20, because 1 comes before 2.
// WHEN YOU SORT NUMBERS, YOU ALWAYS HAVE TO ADD THE SORT & COMPARE FUNCTION

// compareFunction Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}
// When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// When comparing 40 and 100, the sort() method calls the compare function(40,100).
// The function calculates 40-100, and returns -60 (a negative value).
// The sort function will sort 40 as a value lower than 100.
