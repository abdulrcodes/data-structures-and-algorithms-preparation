// Check if a Linked List is Palindromic
// Question: Check if a linked list reads the same forward and backward.
// Example:
// Input: 1 -> 2 -> 2 -> 1
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

  isPalindrome() {
    // Step 1: Convert the linked list to an array
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    // Step 2: Check if the array is a palindrome
    const length = values.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (values[i] !== values[length - 1 - i]) {
        return false; // Not a palindrome
      }
    }

    return true; // It is a palindrome
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
list.addLast(2);
list.addLast(1);

list.printList();
console.log("Is Palindrome?", list.isPalindrome()); // Output: true
