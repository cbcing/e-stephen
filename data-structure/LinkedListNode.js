/**
 * 单向链表Node
 */

export default class LinkedListNode {
    constructor (value, next = null) {
        this.value = value;
        this.next = null;
    }

    toString (callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}