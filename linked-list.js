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
    for (let val of vals) {
      this.push(val);
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {


    let n = new Node(val);

    if (this.length === 0) {
      this.head = n;
      this.tail = n;
    } else {
      const oldTail = this.tail;
      this.tail = n;
      oldTail.next = this.tail;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {


    const n = new Node(val);

    if (this.length === 0) {
      this.head = n;
      this.tail = n;
    } else {
      n.next = this.head;
      this.head = n;
    }
    this.length++;


  }

  /** pop(): return & remove last item. */

  pop() {



    if (this.length === 0) {
      return null;
    }
    let val = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

    } else {
      let current = this.head;

      while (current.next.next !== null) {
        current = current.next;
      }

      current.next === null;// 1, 2 ,3
      this.tail = current;
    }

    this.length--;
    return val;

  }



  /** shift(): return & remove first item. */

  shift() {


    if (this.length === 0) {
      return null;
    }
    let val = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;//1,2,3
    }
    this.length--;
    return val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let idxCounter = 0;
    while (this.length > idx && idx >= 0) {
      if (idx === idxCounter) {
        return current.val;
      }
      current = current.next;
      idxCounter++;

    }
    throw new error("error");

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
