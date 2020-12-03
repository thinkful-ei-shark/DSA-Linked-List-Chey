// NODE CLASSS //
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
// LINKED LIST CLASS //
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertBefore(valBefore, item) {
    if (!this.head) {
      return null;
    }
    if (this.head === null) {
      this.insertFirst(item);
    }
    if (this.head.value === valBefore) {
      let temp = this.head;
      this.head = new _Node(item, temp);
      return;
    }
    let currNode = this.head;
    let next;
    let previousNode;
    while (currNode.value !== valBefore) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    previousNode.next = new _Node(item, currNode);
  }
  insertAfter(valAfter, item) {
    //if empty
    if (!this.head) {
      return null;
    }
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    //if at head
    if (this.head.value === valAfter) {
      let temp = this.head.next;
      this.head.next = new _Node(item, temp);
      return;
    }
    // else
    let currNode = this.head;
    let next = "";
    while (currNode.value !== valAfter) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      this.insertLast(item);
      return;
    }
    next = currNode.next;
    currNode.next = new _Node(item, next);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertAt(pos, item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    } else {
      let currNode = this.head;
      let index = 0;
      while (currNode.next !== null && pos !== index) {
        currNode = currNode.next;
        index++;
      }
      const temp = new _Node(item, currNode.next);
      currNode.next = temp;
    }
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList();
  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  // console.log(SLL);
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  console.log(SLL);
}
const SLL = main();
