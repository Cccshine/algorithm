import { List, Node } from "./type";
// 不带头单链表
class SingleLinkList<T> implements List<T> {
  head: SingleNode<T> | null;
  constructor() {
    this.head = null;
  }

  // 头部插入 时间复杂度最好O(1) 最坏O(1) 平均复杂度O(1)
  insertToHead(value: T): void {
    let newNode = new SingleNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 尾部插入 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
  insertToTail(value: T): void {
    let newNode = new SingleNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let p = this.head;
      while (p.next !== null) {
        p = p.next;
      }
      p.next = newNode;
    }
  }

  // 向指定位置插入 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
  insertToIndex(value: T, index: number): void {
    if (index === 0) {
      this.insertToHead(value);
      return;
    }
    let findNode = this.findByIndex(index - 1);
    if (!findNode) {
      return;
    }
    let newNode = new SingleNode(value);
    newNode.next = findNode.next;
    findNode.next = newNode;
  }

  // 根据value查找 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
  findByValue(value: T): SingleNode<T> | null {
    if (this.head === null) {
      return null;
    }
    let p: SingleNode<T> | null = this.head;
    while (p !== null && p.value !== value) {
      p = p.next;
    }
    return p;
  }

  // 根据index查找 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
  findByIndex(index: number): SingleNode<T> | null {
    if (this.head === null) {
      return null;
    }
    let count = 0;
    let p: SingleNode<T> | null = this.head;
    while (p !== null && count !== index) {
      count++;
      p = p.next;
    }
    return p;
  }

  // 根据value删除  时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
  removeByValue(value: T): Boolean {
    if (this.head === null) {
      return false;
    }
    let p: SingleNode<T> | null = this.head;
    if (p.value === value) {
      this.head = p.next;
      return true;
    }
    while (p.next !== null && p.next.value !== value) {
      p = p.next;
    }
    if (p.next === null) {
      return false;
    }
    p.next = p.next.next;
    return true;
  }
  // 根据index删除  时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
  removeByIndex(index: number): Boolean {
    if (this.head === null) {
      return false;
    }
    let p: SingleNode<T> | null = this.head;
    if (index === 0) {
      this.head = p.next;
      return true;
    }
    let lastNode = this.findByIndex(index - 1);
    if (lastNode === null || lastNode.next === null) {
      return false;
    }
    lastNode.next = lastNode.next.next;
    return true;
  }

  toString(): string {
    if (this.head === null) {
      return "";
    }
    let p = this.head;
    let ret: string = `${p.value}`;
    while (p.next !== null) {
      p = p.next;
      ret = `${ret} ${p.value}`;
    }
    return ret;
  }
}

// 带头单链表
class SingleLinkList1<T> implements List<T> {
  readonly head: SingleNode<T>;
  constructor() {
    this.head = new SingleNode<any>(null);
  }
  insertToHead(value: T): void {
    let newNode = new SingleNode(value);
    newNode.next = this.head.next;
    this.head.next = newNode;
  }
  insertToTail(value: T): void {
    let newNode = new SingleNode(value);
    let p = this.head;
    while (p.next !== null) {
      p = p.next;
    }
    p.next = newNode;
  }
  insertToIndex(value: T, index: number): void {
    if (index === 0) {
      this.insertToHead(value);
      return;
    }
    let findNode = this.findByIndex(index - 1);
    if (!findNode) {
      return;
    }
    let newNode = new SingleNode(value);
    newNode.next = findNode.next;
    findNode.next = newNode;
  }
  findByIndex(index: number): SingleNode<T> | null {
    let count = 0;
    // 因为是带头单链表，所以index的起始是头结点的下一个
    let p = this.head.next;
    while (p !== null && count !== index) {
      p = p.next;
      count++;
    }
    return p;
  }
  findByValue(value: T): SingleNode<T> | null {
    // 因为是带头单链表，所以index的起始是头结点的下一个
    let p = this.head.next;
    while (p !== null && p.value !== value) {
      p = p.next;
    }
    return p;
  }
  removeByIndex(index: number): Boolean {
    let p = this.head.next;
    if (!p) {
      return false;
    }
    if (index === 0) {
      this.head.next = p.next;
      return true;
    }
    let findNode = this.findByIndex(index - 1);
    if (!findNode || !findNode.next) {
      return false;
    }
    findNode.next = findNode.next.next;
    return true;
  }
  removeByValue(value: T): Boolean {
    let p = this.head;
    while (p.next !== null && p.next.value !== value) {
      p = p.next;
    }
    if (!p.next) {
      return false;
    }
    p.next = p.next.next;
    return true;
  }
  toString(): string {
    let p = this.head;
    let ret: string = "";
    while (p.next !== null) {
      p = p.next;
      ret = `${ret} ${p.value}`;
    }
    return ret;
  }
}

// 单链表节点
class SingleNode<T> implements Node<T> {
  value: T;
  next: SingleNode<T> | null;
  constructor(value: T, next: SingleNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

// let sl1 = new SingleLinkList<string>();
// // sl1.insertToTail("a");
// // sl1.insertToTail("b");
// // sl1.insertToTail("c");
// sl1.insertToHead("a");
// sl1.insertToHead("b");
// sl1.insertToHead("c");
// sl1.insertToHead("d");
// sl1.insertToIndex("cshine1", 0);
// sl1.insertToIndex("cshine2", 2);
// sl1.insertToIndex("cshine3", 6);
// sl1.removeByIndex(5);
// // sl1.removeByValue("cshine1");
// // sl1.removeByValue("cshine2");
// // sl1.removeByValue("cshine3");
// console.log(sl1.toString());
// // let findb = sl1.findByValue("a");
// let findd = sl1.findByValue("cshine3");
// // let find0 = sl1.findByIndex(1);
// let find3 = sl1.findByIndex(6);
// // console.log(findb);
// // console.log(findd);
// // console.log(find0);
// console.log(findd);
// console.log(find3);

let sl2 = new SingleLinkList1<string>();
sl2.insertToTail("a");
sl2.insertToTail("f");
sl2.insertToTail("k");
sl2.insertToTail("f");
sl2.insertToTail("a");
// sl2.insertToHead("a");
// sl2.insertToHead("b");
// sl2.insertToHead("c");
// sl2.insertToHead("d");
// let find1 = sl2.findByValue("a");
// let find2 = sl2.findByValue("c");
// let find3 = sl2.findByValue("d");
// let find4 = sl2.findByValue("bb");
// let find1 = sl2.findByIndex(0);
// let find2 = sl2.findByIndex(2);
// let find3 = sl2.findByIndex(3);
// let find4 = sl2.findByIndex(5);
// sl2.insertToIndex("aa", 0);
// console.log(sl2.removeByIndex(2));
// console.log(sl2.removeByValue("a"));
console.log(sl2.toString());
// console.log(find1);
// console.log(find2);
// console.log(find3);
// console.log(find4);

// 时间复杂度O(n) 空间复杂度O(1)
function isPalindrome<T>(sl: SingleLinkList1<T>): Boolean {
  // 空链表或只有一项的链表
  if (sl.head.next === null || sl.head.next.next === null) {
    return true;
  }
  let slow: SingleNode<T> | null = sl.head.next;
  let fast: SingleNode<T> | null = sl.head.next;
  let prev = sl.head;
  // 偶数链表到末尾||奇数链表到末尾
  while (fast !== null && fast.next !== null) {
    let slowNext = slow!.next;
    fast = fast.next.next; //要先对fast进行移动，不然下面反转后，fast就往回走了
    slow!.next = prev;
    prev = slow!;
    slow = slowNext;
  }
  // 奇数链表-此时slow刚好在中点，所以再往后走一位
  if (fast !== null) {
    slow = slow!.next;
  }
  while (slow !== null) {
    if (slow.value !== prev.value) {
      return false;
    }
    slow = slow.next;
    prev = prev.next!;
  }
  return true;
}

// 时间复杂度O(n) 空间复杂度O(n)
function isPalindrome1<T>(sl: SingleLinkList1<T>): Boolean {
  // 空链表或只有一项的链表
  if (sl.head.next === null || sl.head.next.next === null) {
    return true;
  }
  let slow: SingleNode<T> | null = sl.head.next;
  let fast: SingleNode<T> | null = sl.head.next;
  let prevHalf: T[] = [];
  // 偶数链表到末尾||奇数链表到末尾
  while (fast !== null && fast.next !== null) {
    prevHalf.push(slow!.value);
    fast = fast.next.next;
    slow = slow!.next;
  }
  // 奇数链表-此时slow刚好在中点，所以再往后走一位
  if (fast !== null) {
    slow = slow!.next;
  }
  while (slow !== null) {
    if (slow.value !== prevHalf.pop()) {
      return false;
    }
    slow = slow.next;
  }
  return true;
}

console.log(isPalindrome1(sl2));
