/**
 * 2.两数相加
 */

/**定义单链 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {}

/**单链数据结构js实现完整源码 */

/**
 * class Node 单链节点类
 */
class Node {
  constructor(val) {
    this.val = val || 0
    this.pre = null
    this.next = null
  }
}

class linkedList {
  constructor() {
    this.size = 0 // 链表的长度
    this.head = new Node('head') // 链表的head
    this.currentNode = ''
  }

  /**在单链表中寻找item元素 */
  find(item) {
    let currentNode = this.head
    // 迭代指针的方式去找寻目标元素
    while (currentNode && currentNode.val !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  /** 向单链表中插入元素 */
  insert(item, element) {
    let itemNode = this.find(item)
    if (!itemNode) return
    // 当前插入元素next指针指向目标节点next指针  目标节点的next指针指向当前插入元素
    let insertNode = new Node(element)
    insertNode.next = item.next
    item.next = insertNode
    this.size++
  }
  /**在单链表中删除一个节点 */
  remove(item) {
    if (!this.find(item)) return
  }
  /**在单链表的尾部添加元素 */
  append(element) {
    let currentNode = this.findLast()
    let newNode = new Node(element)

    currentNode.next = newNode
    this.size++
  }
  /**获取单链表的最后一个节点 */
  findLast() {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  /**判断单链表是否为空 */
  isEmpty() {
    return this.size === 0
  }
  /**显示当前节点*/
  show() {
    console.log(this.currentNode.val)
  }
  /**获取单链表的长度 */
  getLength() {
    return this.size
  }
  /**从当前节点向前移动n个位置 */
  advance(n, currNode = this.head) {
    this.currNode = currNode

    while (n-- && this.currNode.next) {
      this.currNode = this.currNode.next
    }

    return this.currNode
  }
  /**单链表的遍历显示 */
  display() {
    let result = ''
    let currentNode = this.head
    while (currentNode) {
      result += currentNode.val
      currentNode = currentNode.next
      if (currentNode) {
        result += '->'
      }
    }
    console.log(result)
    return result
  }
  /**清空单链表*/
  clear() {
    this.head.next = null
    this.size = 0
  }
}
