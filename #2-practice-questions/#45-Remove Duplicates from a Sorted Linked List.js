// Remove Duplicates from a Sorted Linked List
// Question: Given a sorted linked list, remove duplicates so that each element appears only once.
// Example:
// Input: 1 -> 1 -> 2 -> 3 -> 3
// Output: 1 -> 2 -> 3

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeDuplicates() {
    let current = this.head;

    while (current && current.next) {
      if (current.value === current.next.value) {
        // Skip the duplicate node
        current.next = current.next.next;
      } else {
        // Move to the next node if no duplicate
        current = current.next;
      }
    }
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

// Example usage
const list = new LinkedList();
list.addLast(1);
list.addLast(1);
list.addLast(2);
list.addLast(2);
list.addLast(3);
list.addLast(3);

list.printList();
list.removeDuplicates();
list.printList();
