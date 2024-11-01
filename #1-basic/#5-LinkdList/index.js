// Understanding Linked Lists
// A linked list is a data structure where each element (node) contains:

// Data: the value of the node.
// Pointer (Next): a reference to the next node in the sequence.

// Linked lists come in two main types:

// Singly Linked List: Each node points to the next node.
// Doubly Linked List: Each node points to both the next and previous nodes.

// Step 1: Creating a Node Class
// Step 2: Creating a Singly Linked List Class

// Append: Add a node at the end.
// Prepend: Add a node at the beginning.
// Print List: Display the list values.

// Insert at a specific position.
// Remove a node by value.
// Search for a node by value.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.haed = null;
    this.tail = null;
    this.length = 0;
  }
  // Append a node to the end

  appent(value) {
    const newNode = new Node(value);
    if (!this.haed) {
      this.haed = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Prepend a node to the beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.haed;
    this.haed = newNode;

    if (!this.tail) this.tail = newNode;
    this.length++;
  }

  // Insert at a specific position

  insert(index, value) {
    if (index < 0 || index > this.length) return;

    const newNode = new Node(value);

    if (index === 0) {
      this.appent(value);
      return;
    }

    let current = this.haed;
    let previous;
    let i = 0;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    newNode.next = current;
    previous.next = newNode;
    this.length++;
  }

  // Remove by value
  remove(value) {
    if (!this.haed) return;

    if (this.haed.value === value) {
      this.haed = this.haed.next;
      this.length--;
    }

    let current = this.haed;
    let previous;

    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
      if (current === this.tail) this.tail = previous;
      this.length--;
    }
  }

  // Search for a node by value
  search(value) {
    let current = this.haed;
    let index = 0;

    while (current) {
      if (current) {
        if (current.value === value) return index;
        current = current.next;
        index++;
      }
    }
    return -1;
  }

  //   Reversing a Linked List
  reverse() {
    let current = this.haed;
    let previous = null;
    let nextNode = null;
    this.tail = this.haed;

    while (current) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    this.haed = previous;
  }
  // Print list values
  printList() {
    let current = this.haed;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const list = new LinkedList();

list.appent(20);
list.appent(10);

list.prepend(80);
list.insert(1, 14);
list.printList();
list.remove(10);
list.printList();
list.reverse();
list.printList();
console.log(list.search(20));
