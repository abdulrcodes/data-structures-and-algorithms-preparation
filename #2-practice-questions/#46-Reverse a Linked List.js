// Reverse a Linked List
// Question: Reverse a singly linked list.
// Example:
// Input: 1 -> 2 -> 3 -> 4
// Output: 4 -> 3 -> 2 -> 1

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

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next; // Store the next node
      current.next = prev; // Reverse the current node's pointer
      prev = current; // Move prev one step forward
      current = next; // Move current one step forward
    }
    this.head = prev; // Set head to the last node, which is now the first
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
list.addLast(2);
list.addLast(3);

list.printList();
list.reverse();
list.printList();
