'use strict';

const _node = require('./_Node.js');

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    if (this.top === null){
      this.top = new _node(data, null);
    } else {
      const newNode = new _node(data, this.top);
      this.top = newNode;
    }
  }

  pop(){
    const node = this.top;
    this.top = this.top.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top;
}

function display(stack) {

  let currentStack = stack.top;
  let nextStack = stack.top.next;
  const stackDisplay = [];

  while (currentStack !== null) {
    stackDisplay.push(currentStack);
    nextStack = currentStack.next;
    currentStack = nextStack;
  }
  return stackDisplay;
}

const main = () => {
  const test = new Stack();
  test.push('Kirk');
  test.push('Spock');
  test.push('McCoy');
  test.push('Scotty');
  // console.log(JSON.stringify(test));
  // console.log(test.pop());
  // console.log(JSON.stringify(test));
  // console.log(peek(test));
  // console.log(display(test));
  test.pop();
  test.pop();
  console.log(display(test));
};

main();
