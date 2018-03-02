'use strict';

const _node = require('./_NodeQueue.js');

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }
    return node.value; 
  }

  dump() {
    for (let node = this.first; node; node = node.prev) console.log(node.value);

    console.log('---');

    for (let node = this.last; node; node = node.next) 
      console.log(node.value);
  }
}


const main = () => {
  const test = new Queue();
  test.enqueue('Rachael');
  test.enqueue('Deckered');
  // console.log(test);
  console.log(test);
  test.dump();
  test.dequeue();
  test.dump();
  console.log(test);
};

main();


