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

// function matchParens(string) {
//   string = string.toLowerCase().replace(/[^()]/g, ' ');
//   const newStack = new stack();

//   let currentIndex = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '(') {
//       newStack.push(string[i]);
//       currentIndex = i;
//     }
//     else if (string[i] === ')') {
//       if (newStack.top === null) {
//         throw new Error('error at position ' + i);
//       }
//       newStack.pop();
//     }
//   }

//   if (newStack.top !== null) {
//     throw new Error('error at position ' + currentIndex);
//   }
//   return true;
// }
// console.log(matchParens('3 * (4 + 1)'));

// ------------------------- Extension Exercise-----------------------

function matchParens(string) {
  const newStack = new stack();

  for (let i = 0; i < string.length; i++) {
    switch(string[i]){
    case '(':
    case '{':
    case '[':
      newStack.push({
        value: string[i],
        location: i,
      });
      console.log('after push', JSON.stringify(newStack));
      break;
    case ')': 
      if (newStack.top === null || newStack.pop().value !== '(') {
        throw new Error(`Error at index: ${i}`);
      }
      break;
    case '}':
      if (newStack.top === null || newStack.pop().value !== '{') {
        throw new Error(`Error at index: ${i}`);
      }
      break;
    case ']':
      if (newStack.top === null || newStack.pop().value !== '[') {
        throw new Error(`Error at index:${i} `);
      }
      console.log('after pop', JSON.stringify(newStack));
      break; 
    default :
      break;
    }
  }
  if (newStack.top !== null) {
    throw new Error(`Error at index: ${newStack.pop().location}`);
  }
  return true;
}

console.log(matchParens('( () () ) ( () () ]'));



/*
Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize two types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.
*/

// console.log(x('{', '}'));
