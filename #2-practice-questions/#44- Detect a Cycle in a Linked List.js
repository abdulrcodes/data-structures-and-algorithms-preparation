// Detect a Cycle in a Linked List
// Question: Determine if the linked list has a cycle (a node whose next points back to a previous node).
// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 2 (cycle back to 2)
// Output: true

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

  // Brute-force approach to detect cycle
  detectCycle() {
    const visitedNodes = new Set();
    let current = this.head;

    while (current) {
      if (visitedNodes.has(current)) {
        // If we encounter a node that's already been visited, there's a cycle
        return true;
      }
      // Add the current node to the set
      visitedNodes.add(current);
      current = current.next;
    }

    // No cycle found
    return false;
  }
}

// Example usage
const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);

// Creating a cycle manually
list.head.next.next.next.next = list.head.next;

console.log(list.detectCycle()); // Output: true
