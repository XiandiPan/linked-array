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
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;


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

    while (current !== null) {
      if (current.next === oldTail) {

        this.tail = current;
        this.tail.next = null;

      }

    }

    return oldTail;


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

   return this.vals[idx]



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
