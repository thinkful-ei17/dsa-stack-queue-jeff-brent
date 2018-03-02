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
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome("10121121201"));
console.log(is_palindrome("Tauhida"));
