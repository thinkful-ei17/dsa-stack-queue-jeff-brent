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

  }
}

const main = () => {
  const test = new Stack();
  test.push(10);
  test.push(11);
  test.push(12);
  test.push(13);
  console.log(JSON.stringify(test));
};

main();
