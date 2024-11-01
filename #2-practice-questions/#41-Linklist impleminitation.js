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

list.addLast(20);
list.addLast(40);
list.addLast(50);

list.printList();
