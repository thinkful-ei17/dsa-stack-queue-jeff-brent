const stack = require('./Stack.js');


function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const newStack = new stack();
  for (let i = 0; i < string.length; i++){
    newStack.push(string[i]);
  }
  let x = '';
  for (let i = 0; i < string.length; i++){
    x += newStack.pop();
  }
  return x === string; 
}


// if string length % 2 === 1
// s[0] === stack.pop()
// for(i=0; i<s.length/2; i++){
// if (s[i] !== stack.pop()) return false
// "amanaplana c analpanama" = 21 length
// true, true, true
console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
