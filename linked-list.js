/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals){
        this.push(val);
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);

    newNode.next = this.head; //defined the old head

    this.head = newNode; //defined the new head

  }

  /** pop(): return & remove last item. */

  pop() {

    let current = this.head;

    const oldTail = this.tail;

    while (current.next !== null) {
      if (current.next.next === null) {
        console.log("in conditional")
        this.tail = current;
        current.next = null;
        this.length -= 1;
        break
      }

    }

    return oldTail.val;


  }

  /** shift(): return & remove first item. */

  shift() {

    if ( this.head !== null){

      const oldHead = this.head;

      this.head = this.head.next;

    }

    return  oldHead;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let counter = 0;
        while (counter < idx + 1){
            current = current.next;
            counter += 1;
        }

    return current;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
