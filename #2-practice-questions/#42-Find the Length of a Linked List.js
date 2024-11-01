// Find the Length of a Linked List
// Question: Write a function to find the number of nodes in a linked list.
// Example:
// Input: 1 -> 2 -> 3 -> 4
// Output: 4

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

list.printList();
list.lengthList();
