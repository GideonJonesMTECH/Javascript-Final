class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  remove(value) {
    if(this.head == null) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.listSize--;
    }
    else {
      let previous = this.head;
      let node = previous.next;
      let repeat = true;
      while (repeat) {
        if(node.value == value) {
          previous.next = node.next;
          node = node.next;
          this.listSize--;
          repeat = false;
          return;
        }
        else {
          previous = node;
          node = node.next;
          if(node.next == null) {
            return;
          }
        }
      }
    } 
  }

  insert(value) {
    let newNode = new Node(value);

    let lastNode = this.head;
    if (lastNode == null) {
      this.head = newNode;
      this.listSize++;
      return;
    }
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
    this.listSize++;
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value == value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}
