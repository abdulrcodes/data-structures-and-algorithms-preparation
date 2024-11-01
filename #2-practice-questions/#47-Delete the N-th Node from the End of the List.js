// Delete the N-th Node from the End of the List
// Question: Remove the n-th node from the end of the linked list.
// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2
// Output: 1 -> 2 -> 3 -> 5

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

  deleteNNodeEnd(n) {
    // Step 1: Find the length of the linked list
    let length = 0;
    let current = this.head;

    while (current) {
      length++;
      current = current.next;
    }

    // Step 2: Calculate the position to delete from the beginning
    const positionFromStart = length - n;

    // Edge case: If we need to remove the head
    if (positionFromStart === 0) {
      this.head = this.head.next;
      return;
    }

    // Step 3: Traverse to the node before the one to delete
    current = this.head;
    for (let i = 1; i < positionFromStart; i++) {
      current = current.next;
    }

    // Step 4: Remove the node by adjusting pointers
    if (current && current.next) {
      current.next = current.next.next;
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
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);

list.printList();
list.deleteNNodeEnd(2);
list.printList();
