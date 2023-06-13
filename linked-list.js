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
    let current = this.head;
    let idxCounter = 0;
    while (this.length > idx && idx >= 0) {
      if (idx === idxCounter) {
        return current.val = val;
      }
      current = current.next;
      idxCounter++;

    }
    throw new error("error");
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < 0 || idx > this.length){
        throw new error(Error);
    }

    if (idx === 0){
        this.unshift(val);
    }
    else if(idx === this.length){
        this.push(val);
    }
    else{
        let newNode = new Node(val);
        let previous = null;
        let current = this.head;
        let idxCounter = 0;
        while (idxCounter < idx){
            previous = current;
            current = current.next;
            idxCounter++;
        }
        newNode.next = current;
        previous.next = newNode;
        this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length){
        throw new error(Error);
    }

    if (idx === 0){
        return this.shift();
    }
    else if(idx === this.length-1){
        return this.pop();
    }
    else{
        let previous = null;
        let current = this.head;
        let idxCounter = 0;
        while (idxCounter < idx){
            previous = current;
            current = current.next;
            idxCounter++;
        }
        previous.next = current.next;
        this.length--;
        return current.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let totalVal = 0;
    let idxCounter = 0;
    if (this.length === 0) return 0;
    if (current.next === null){
        return current.val;
    }
    while (idxCounter < this.length){
        totalVal = totalVal += current.val;
        current = current.next;
        idxCounter += 1;
    }
    console.log("totalVal", totalVal);
    return totalVal/this.length;

  }
}

module.exports = LinkedList;
