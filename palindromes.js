'use strict';

const stack = require('./Stack.js');

// -----------V1---------------
// function is_palindrome(string) {
//   string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   const newStack = new stack();
//   for (let i = 0; i < string.length; i++){
//     newStack.push(string[i]);
//   }
//   let x = '';
//   for (let i = 0; i < string.length; i++){
//     x += newStack.pop();
//   }
//   return x === string; 
// }

// -----------V2------------------
function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const newStack = new stack();
  for (let i = 0; i < string.length; i++) {
    newStack.push(string[i]);
  }
  for (let i = 0; i < string.length / 2; i++){
    if (string[i] !== newStack.pop()){ 
      return false;
    }
  }
  return true;
}


// true, true, true
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome("10121121201"));
// console.log(is_palindrome("Tauhida"));


// -----------Matching Parentheses------------------
//Function: Check if open/closed parens match (true)
// Expected input: '3 * (4 + 1)' -> true
// Wrong input: '2 + 2(2 * 3))' -> false

function matchParens(string) {
  string = string.toLowerCase().replace(/[^()]/g, ' ');
  const newStack = new stack();

  let currentIndex = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      newStack.push(string[i]);
      currentIndex = i;
    }
    else if (string[i] === ')') {
      if (newStack.top === null) {
        throw new Error('error at position ' + i);
      }
      newStack.pop();
    }
  }

  if (newStack.top !== null) {
    throw new Error('error at position ' + currentIndex);
  }
  return true;
}
//1. Replace everything but parens in a string
//2. Iterate over the string length
//3. When we hit a '(' -> push into newStack
//4. When we hit a ')' -> pop from newStack
console.log(matchParens('3 * (4 + 1)'));

