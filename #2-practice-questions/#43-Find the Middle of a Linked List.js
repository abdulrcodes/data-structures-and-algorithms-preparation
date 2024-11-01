// Find the Middle of a Linked List
// Question: Write a function to find the middle node in a linked list. If
// there are two middle nodes, return the second one.
// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: 3

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
    this.length = 0;
  }

  addLast(value) {
    const newNode = new Node(value);

    if (!this.head) {
      (this.head = newNode), (this.tail = newNode);
    } else {
      (this.tail.next = newNode), (this.tail = newNode);
    }
  }
  lengthList() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }

    console.log("Lenghth", count);
  }
  findMiddle() {
    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }

    const middleIndex = Math.floor(length / 2);

    current = this.head;
    for (let i = 0; i < middleIndex; i++) {
      current = current.next;
    }

    return current ? current.value : null;
  }
  printList() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }
}

const list = new LinkedList();

list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);

list.printList();
list.lengthList();
console.log("Middle", list.findMiddle());
