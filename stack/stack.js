class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this.array;
  }

  pop() {
    if(this.array.length == 0){
      return null;
    } else {
    let popResult = this.array.pop();
    return popResult;
    }
  }

  peek() {
    if(this.array.length == 0){
      return null;
    } else {
      let peekResult = this.array[this.array.length-1];
      return peekResult;
    }
  }

  size() {
    return this.array.length;
  }
}
