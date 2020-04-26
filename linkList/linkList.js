"use strict";
exports.__esModule = true;
// 不带头单链表
var SingleLinkList = /** @class */ (function () {
    function SingleLinkList() {
        this.head = null;
    }
    // 头部插入 时间复杂度最好O(1) 最坏O(1) 平均复杂度O(1)
    SingleLinkList.prototype.insertToHead = function (value) {
        var newNode = new SingleNode(value);
        newNode.next = this.head;
        this.head = newNode;
    };
    // 尾部插入 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
    SingleLinkList.prototype.insertToTail = function (value) {
        var newNode = new SingleNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var p_1 = this.head;
            while (p_1.next !== null) {
                p_1 = p_1.next;
            }
            p_1.next = newNode;
        }
    };
    // 向指定位置插入 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
    SingleLinkList.prototype.insertToIndex = function (value, index) {
        if (index === 0) {
            this.insertToHead(value);
            return;
        }
        var findNode = this.findByIndex(index - 1);
        if (!findNode) {
            return;
        }
        var newNode = new SingleNode(value);
        newNode.next = findNode.next;
        findNode.next = newNode;
    };
    // 根据value查找 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
    SingleLinkList.prototype.findByValue = function (value) {
        if (this.head === null) {
            return null;
        }
        var p = this.head;
        while (p !== null && p.value !== value) {
            p = p.next;
        }
        return p;
    };
    // 根据index查找 时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
    SingleLinkList.prototype.findByIndex = function (index) {
        if (this.head === null) {
            return null;
        }
        var count = 0;
        var p = this.head;
        while (p !== null && count !== index) {
            count++;
            p = p.next;
        }
        return p;
    };
    // 根据value删除  时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
    SingleLinkList.prototype.removeByValue = function (value) {
        if (this.head === null) {
            return false;
        }
        var p = this.head;
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
    };
    // 根据index删除  时间复杂度最好O(1) 最坏O(n) 平均复杂度O(n)
    SingleLinkList.prototype.removeByIndex = function (index) {
        if (this.head === null) {
            return false;
        }
        var p = this.head;
        if (index === 0) {
            this.head = p.next;
            return true;
        }
        var lastNode = this.findByIndex(index - 1);
        if (lastNode === null || lastNode.next === null) {
            return false;
        }
        lastNode.next = lastNode.next.next;
        return true;
    };
    SingleLinkList.prototype.toString = function () {
        if (this.head === null) {
            return "";
        }
        var p = this.head;
        var ret = "" + p.value;
        while (p.next !== null) {
            p = p.next;
            ret = ret + " " + p.value;
        }
        return ret;
    };
    return SingleLinkList;
}());
// 带头单链表
var SingleLinkList1 = /** @class */ (function () {
    function SingleLinkList1(limit) {
        this.head = new SingleNode(null);
        this.limit = limit;
        this.current = 0;
    }
    SingleLinkList1.prototype.insertToHead = function (value) {
        var newNode = new SingleNode(value);
        newNode.next = this.head.next;
        this.head.next = newNode;
    };
    SingleLinkList1.prototype.insertToTail = function (value) {
        var newNode = new SingleNode(value);
        var p = this.head;
        while (p.next !== null) {
            p = p.next;
        }
        p.next = newNode;
    };
    SingleLinkList1.prototype.insertToIndex = function (value, index) {
        if (index === 0) {
            this.insertToHead(value);
            return;
        }
        var findNode = this.findByIndex(index - 1);
        if (!findNode) {
            return;
        }
        var newNode = new SingleNode(value);
        newNode.next = findNode.next;
        findNode.next = newNode;
    };
    SingleLinkList1.prototype.findByIndex = function (index) {
        var count = 0;
        // 因为是带头单链表，所以index的起始是头结点的下一个
        var p = this.head.next;
        while (p !== null && count !== index) {
            p = p.next;
            count++;
        }
        return p;
    };
    SingleLinkList1.prototype.findByValue = function (value) {
        // 因为是带头单链表，所以index的起始是头结点的下一个
        var p = this.head.next;
        while (p !== null && p.value !== value) {
            p = p.next;
        }
        return p;
    };
    // 根据value查找前一个结点
    SingleLinkList1.prototype.findPreByValue = function (value) {
        // 因为是带头单链表，所以index的起始是头结点的下一个
        var p = this.head;
        while (p.next !== null && p.next.value !== value) {
            p = p.next;
        }
        return p;
    };
    SingleLinkList1.prototype.removeByIndex = function (index) {
        var p = this.head.next;
        if (!p) {
            return false;
        }
        if (index === 0) {
            this.head.next = p.next;
            return true;
        }
        var findNode = this.findByIndex(index - 1);
        if (!findNode || !findNode.next) {
            return false;
        }
        findNode.next = findNode.next.next;
        return true;
    };
    SingleLinkList1.prototype.removeByValue = function (value) {
        var p = this.head;
        while (p.next !== null && p.next.value !== value) {
            p = p.next;
        }
        if (!p.next) {
            return false;
        }
        p.next = p.next.next;
        return true;
    };
    // LRU---放里面实现一次
    SingleLinkList1.prototype.put = function (value) {
        var _a = this, limit = _a.limit, current = _a.current;
        if (current === 0) {
            //没有缓存时
            var newNode = new SingleNode(value);
            newNode.next = this.head.next;
            this.head.next = newNode;
            this.current++;
        }
        else {
            //又缓存
            var p_2 = this.head;
            var preNode = null; // 若查到缓存，则为缓存的前一个结点
            var tail2Node = null; // 倒数第二个结点
            // 遍历查找缓存是否已存在
            while (p_2.next !== null && p_2.next.value !== value) {
                if (p_2.next.next === null) {
                    tail2Node = p_2;
                }
                p_2 = p_2.next;
                preNode = p_2;
            }
            if (p_2.next) {
                //如果查到缓存，则把该结点挪到头部
                var findNode = p_2.next;
                preNode.next = findNode.next;
                findNode.next = this.head.next;
                this.head.next = findNode;
            }
            else {
                //如果没查到
                var newNode = new SingleNode(value);
                // 缓存已满，删掉尾结点
                if (current >= limit) {
                    tail2Node.next = null;
                }
                else {
                    this.current++;
                }
                // 在头部插入新结点
                newNode.next = this.head.next;
                this.head.next = newNode;
            }
        }
    };
    SingleLinkList1.prototype.toString = function () {
        var p = this.head;
        var ret = "";
        while (p.next !== null) {
            p = p.next;
            ret = ret + " " + p.value;
        }
        return ret;
    };
    SingleLinkList1.prototype.reserve = function () {
        var p = this.head.next;
        var pre = this.head;
        while (p !== null) {
            var next = p.next;
            p.next = pre;
            pre = p;
            p = next;
        }
        if (this.head.next)
            this.head.next.next = null;
        this.head.next = pre;
    };
    return SingleLinkList1;
}());
// 单链表节点
var SingleNode = /** @class */ (function () {
    function SingleNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return SingleNode;
}());
// 循环单链表节点
var SingleLoopNode = /** @class */ (function () {
    function SingleLoopNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return SingleLoopNode;
}());
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
// let sl2 = new SingleLinkList1<string>();
// sl2.insertToTail("a");
// sl2.insertToTail("b");
// sl2.insertToTail("c");
// sl2.insertToTail("d");
// sl2.insertToTail("e");
// console.log(sl2.toString());
// sl2.reserve();
// console.log(sl2.toString());
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
// let find1 = sl2.findPreByValue("d");
// find1!.next = find1!.next!.next;
// console.log(find1);
// sl2.insertToIndex("aa", 0);
// console.log(sl2.removeByIndex(2));
// console.log(sl2.removeByValue("a"));
// console.log(sl2.toString());
// console.log(find1);
// console.log(find2);
// console.log(find3);
// console.log(find4);
// 时间复杂度O(n) 空间复杂度O(1)
function isPalindrome(sl) {
    // 空链表或只有一项的链表
    if (sl.head.next === null || sl.head.next.next === null) {
        return true;
    }
    var slow = sl.head.next;
    var fast = sl.head.next;
    var prev = sl.head;
    // 偶数链表到末尾||奇数链表到末尾
    while (fast !== null && fast.next !== null) {
        var slowNext = slow.next;
        fast = fast.next.next; //要先对fast进行移动，不然下面反转后，fast就往回走了
        slow.next = prev;
        prev = slow;
        slow = slowNext;
    }
    // 奇数链表-此时slow刚好在中点，所以再往后走一位
    if (fast !== null) {
        slow = slow.next;
    }
    while (slow !== null) {
        if (slow.value !== prev.value) {
            return false;
        }
        slow = slow.next;
        prev = prev.next;
    }
    return true;
}
// 时间复杂度O(n) 空间复杂度O(n)
function isPalindrome1(sl) {
    // 空链表或只有一项的链表
    if (sl.head.next === null || sl.head.next.next === null) {
        return true;
    }
    var slow = sl.head.next;
    var fast = sl.head.next;
    var prevHalf = [];
    // 偶数链表到末尾||奇数链表到末尾
    while (fast !== null && fast.next !== null) {
        prevHalf.push(slow.value);
        fast = fast.next.next;
        slow = slow.next;
    }
    // 奇数链表-此时slow刚好在中点，所以再往后走一位
    if (fast !== null) {
        slow = slow.next;
    }
    while (slow !== null) {
        if (slow.value !== prevHalf.pop()) {
            return false;
        }
        slow = slow.next;
    }
    return true;
}
// console.log(isPalindrome1(sl2));
var LRUCache = /** @class */ (function () {
    function LRUCache(limit) {
        this.limit = limit;
        this.current = 0;
        this.cacheList = new SingleLinkList1();
    }
    LRUCache.prototype.put = function (value) {
        var _a = this, current = _a.current, cacheList = _a.cacheList, limit = _a.limit;
        if (current === 0) {
            cacheList.insertToHead(value);
            this.current++;
        }
        else {
            var node = cacheList.findPreByValue(value);
            if (node && node.next) {
                node.next = node.next.next;
                // cacheList.removeByValue(value);
                cacheList.insertToHead(value);
            }
            else {
                if (current >= limit) {
                    cacheList.removeByIndex(current - 1);
                    // node
                    cacheList.insertToHead(value);
                }
                else {
                    cacheList.insertToHead(value);
                    this.current++;
                }
            }
        }
    };
    LRUCache.prototype.toString = function () {
        return this.cacheList.toString();
    };
    return LRUCache;
}());
// const lru = new LRUCache<string>(5);
// const lru = new SingleLinkList1<string>(5);
// lru.put("1");
// lru.put("2");
// lru.put("3");
// lru.put("4");
// lru.put("5");
// lru.put("6");
// lru.put("4");
// lru.put("2");
// // lru.put("6");
// // lru.put("8");
// // lru.put("2");
// console.log(lru.toString());
// 带头循环单链表
var SingleLinkList2 = /** @class */ (function () {
    function SingleLinkList2() {
        this.head = new SingleLoopNode(null, this.head);
        this.head.next = this.head;
    }
    SingleLinkList2.prototype.insertToHead = function (value) {
        var newNode = new SingleLoopNode(value, this.head.next);
        this.head.next = newNode;
    };
    SingleLinkList2.prototype.insertToTail = function (value) {
        var newNode = new SingleLoopNode(value, this.head);
        var p = this.head;
        while (p.next !== this.head) {
            p = p.next;
        }
        p.next = newNode;
    };
    SingleLinkList2.prototype.insertToIndex = function (value, index) {
        if (index === 0) {
            this.insertToHead(value);
            return;
        }
        var findNode = this.findByIndex(index - 1);
        if (!findNode) {
            return;
        }
        var newNode = new SingleLoopNode(value, findNode.next);
        findNode.next = newNode;
    };
    SingleLinkList2.prototype.findByIndex = function (index) {
        var count = 0;
        // 因为是带头单链表，所以index的起始是头结点的下一个
        var p = this.head.next;
        while (p !== this.head && count !== index) {
            p = p.next;
            count++;
        }
        return p === this.head ? null : p;
    };
    SingleLinkList2.prototype.findByValue = function (value) {
        // 因为是带头单链表，所以index的起始是头结点的下一个
        var p = this.head.next;
        while (p !== this.head && p.value !== value) {
            p = p.next;
        }
        return p === this.head ? null : p;
    };
    // 根据value查找前一个结点
    SingleLinkList2.prototype.findPreByValue = function (value) {
        // 因为是带头单链表，所以index的起始是头结点的下一个
        var p = this.head;
        while (p.next !== this.head && p.next.value !== value) {
            p = p.next;
        }
        return p === this.head ? null : p;
    };
    SingleLinkList2.prototype.removeByIndex = function (index) {
        var p = this.head.next;
        if (!p) {
            return false;
        }
        if (index === 0) {
            this.head.next = p.next;
            return true;
        }
        var findNode = this.findByIndex(index - 1);
        if (!findNode || findNode.next === this.head) {
            return false;
        }
        findNode.next = findNode.next.next;
        return true;
    };
    SingleLinkList2.prototype.removeByValue = function (value) {
        var p = this.head;
        while (p.next !== this.head && p.next.value !== value) {
            p = p.next;
        }
        if (p.next === this.head) {
            return false;
        }
        p.next = p.next.next;
        return true;
    };
    SingleLinkList2.prototype.toString = function () {
        var p = this.head;
        var ret = "";
        while (p.next !== this.head) {
            p = p.next;
            ret = ret + " " + p.value;
        }
        return ret;
    };
    return SingleLinkList2;
}());
// let sl3 = new SingleLinkList2<string>();
// sl3.insertToTail("a");
// sl3.insertToTail("f");
// sl3.insertToTail("k");
// sl3.insertToTail("f");
// sl3.insertToTail("a");
// sl3.insertToHead("a");
// sl3.insertToHead("b");
// sl3.insertToHead("c");
// sl3.insertToHead("d");
// let find1 = sl3.findByValue("a");
// console.log(find1!.next);
// let find2 = sl3.findByValue("c");
// let find3 = sl3.findByValue("d");
// let find4 = sl3.findByValue("bb");
// let find1 = sl3.findByIndex(0);
// let find2 = sl3.findByIndex(2);
// let find3 = sl3.findByIndex(3);
// let find4 = sl3.findByIndex(5);
// let find1 = sl3.findPreByValue("d");
// find1!.next = find1!.next!.next;
// console.log(find1);
// sl3.insertToIndex("aa", 3);
// console.log(sl3.removeByIndex(2));
// console.log(sl3.removeByValue("a"));
// console.log(sl3);
// console.log(sl3.toString());
// console.log(find1);
// console.log(find2);
// console.log(find3);
// console.log(find4);
function toString(list) {
    var p = list;
    var ret = "";
    while (p !== null) {
        ret = ret + " " + p.value;
        p = p.next;
    }
    return ret;
}
function reverse(list) {
    var currentNode = list;
    var preNode = null;
    while (currentNode !== null) {
        var node = currentNode.next;
        currentNode.next = preNode;
        preNode = currentNode;
        currentNode = node;
    }
    return preNode;
}
// 如果有环，fast一定会先进入环，而slow后进入环。当两个指针都进入环之后，经过一定步的操作之后
// 二者一定能够在环上相遇，并且此时slow还没有绕环一圈，也就是说一定是在slow走完第一圈之前相遇
function hasRing(list) {
    var currentNode = list;
    var slow = currentNode;
    var fast = currentNode;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
function getCenterNode(list) {
    var currentNode = list;
    var slow = currentNode;
    var fast = currentNode;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    // 没环
    if (!fast || !fast.next) {
        return slow;
    }
    var ringLen = 0;
    // 有环，求环长
    while (fast !== slow || ringLen === 0) {
        fast = fast.next.next;
        slow = slow.next;
        ringLen++;
    }
    console.log("ringLen", ringLen);
    // 有环，求入环点，fast从head开始，slow继续往前，再次相遇的点即为入环点
    var listLen = ringLen;
    fast = currentNode;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
        listLen++;
    }
    console.log("入环点", fast);
    console.log("listLen", listLen);
    // 获取中点
    var centerLen = Math.floor(listLen / 2);
    var len = 0;
    fast = currentNode;
    while (len < centerLen) {
        fast = fast.next;
        len++;
    }
    console.log("centerLen", centerLen);
    return fast;
}
function removeByReverseIndex(list, index) {
    if (hasRing(list)) {
        return;
    }
    // let reserveList = reverse(list);
    // let currentNode = reserveList!;
    // let count = 0;
    // while(currentNode.next !== null && count !== index - 1){
    //   currentNode = currentNode.next;
    //   count++;
    // }
    // console.log(currentNode)
    // if(!currentNode.next){
    //   return
    // }else{
    //   currentNode.next = currentNode.next.next;
    // }
    // reverse(reserveList!);
    var currentNode = list;
    var len = 0;
    while (currentNode !== null) {
        currentNode = currentNode.next;
        len++;
    }
    var count = 0;
    var startIndex = len - index - 1 - 1;
    currentNode = list;
    while (currentNode.next !== null && count !== startIndex) {
        currentNode = currentNode.next;
        count++;
    }
    if (!currentNode.next) {
        return;
    }
    else {
        currentNode.next = currentNode.next.next;
    }
}
function mergeSortedList(lista, listb) {
    var p = lista;
    var q = listb;
    var mergeList = null;
    if (p.value < q.value) {
        mergeList = p;
        p = p.next;
    }
    else {
        mergeList = q;
        q = q.next;
    }
    var currentNode = mergeList;
    while (p !== null && q !== null) {
        if (p.value < q.value) {
            currentNode.next = p;
            p = p.next;
        }
        else {
            currentNode.next = q;
            q = q.next;
        }
        currentNode = currentNode.next;
    }
    if (p) {
        currentNode.next = p;
    }
    else {
        currentNode.next = q;
    }
    return mergeList;
}
// const node1 = new SingleNode(1)
// node1.next = new SingleNode(3)
// node1.next.next = new SingleNode(5)
// node1.next.next.next = new SingleNode(7)
// console.log(toString(node1));
// console.log(toString(reverse(node1)))
var node2 = new SingleNode(1);
node2.next = new SingleNode(3);
node2.next.next = new SingleNode(5);
node2.next.next.next = new SingleNode(7);
var p = (node2.next.next.next.next = new SingleNode(9));
node2.next.next.next.next.next = new SingleNode(11);
node2.next.next.next.next.next.next = new SingleNode(13);
node2.next.next.next.next.next.next.next = new SingleNode(15);
// node2.next.next.next.next.next.next.next.next = p;
// console.log(hasRing(node2));
// console.log(getCenterNode(node2));
// removeByReverseIndex(node2, 3);
// console.log(toString(node2));
var node3 = new SingleNode(1);
node3.next = new SingleNode(2);
node3.next.next = new SingleNode(4);
node3.next.next.next = new SingleNode(7);
node3.next.next.next.next = new SingleNode(10);
console.log(toString(mergeSortedList(node2, node3)));
