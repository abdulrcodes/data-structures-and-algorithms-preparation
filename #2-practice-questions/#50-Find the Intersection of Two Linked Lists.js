// . Find the Intersection of Two Linked Lists
// Question: Determine the node at which two linked lists intersect.
// Example:
// Input: 3 -> 4 -> 5 -> 6, 1 -> 2 -> 5 -> 6
// Output: Node with value 5

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

  interSection(otherList) {
    const nodesSet = new Set();
    let current = this.head;

    // Step 1: Traverse the first list and store its nodes in a set
    while (current) {
      nodesSet.add(current);
      current = current.next;
    }

    // Step 2: Traverse the second list and check for intersection
    current = otherList.head;
    while (current) {
      if (nodesSet.has(current)) {
        console.log("Intersection at node with value:", current.value);
        return current; // Intersection node found
      }
      current = current.next;
    }

    console.log("No intersection found");
    return null; // No intersection
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
const list1 = new LinkedList();
list1.addLast(3);
list1.addLast(4);
list1.addLast(5);
list1.addLast(6);

const list2 = new LinkedList();
list2.addLast(1);
list2.addLast(2);

// Creating an intersection
list2.head.next.next = list1.head.next; // Intersecting at node with value 4

list1.printList(); // Output: 3 -> 4 -> 5 -> 6
list2.printList(); // Output: 1 -> 2 -> 4 -> 5 -> 6

const intersectionNode = list1.interSection(list2);
