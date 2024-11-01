// Merge Two Sorted Linked Lists
// Question: Merge two sorted linked lists into one sorted list.
// Example:
// Input: 1 -> 2 -> 4, 1 -> 3 -> 4
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

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

  // Merge two sorted linked lists
  static mergeTwoLinkedLists(list1, list2) {
    // Create a dummy node to simplify merging process
    const dummy = new Node(0);
    let tail = dummy;

    let current1 = list1.head;
    let current2 = list2.head;

    // Traverse both lists and add the smaller node to the merged list
    while (current1 && current2) {
      if (current1.value < current2.value) {
        tail.next = current1;
        current1 = current1.next;
      } else {
        tail.next = current2;
        current2 = current2.next;
      }
      tail = tail.next;
    }

    // If any nodes are left in either list, append them
    tail.next = current1 || current2;

    // Return the merged list, which starts from dummy.next
    const mergedList = new LinkedList();
    mergedList.head = dummy.next;
    return mergedList;
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
list1.addLast(1);
list1.addLast(2);
list1.addLast(4);

const list2 = new LinkedList();
list2.addLast(1);
list2.addLast(3);
list2.addLast(4);

console.log("List 1:");
list1.printList();

console.log("List 2:");
list2.printList();

const mergedList = LinkedList.mergeTwoLinkedLists(list1, list2);
console.log("Merged List:");
mergedList.printList();
