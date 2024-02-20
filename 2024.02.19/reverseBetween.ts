/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let node = head;
    
    for (let i = 1; i < left; i++) {
        node = node.next;
    }

    let node2 = node;
    const stack = [];

    for (let i = left; i <= right; i++) {
        stack.push(node.val);
        node = node.next;
    }

    for (let i = left; i <= right; i++) {
        node2.val = stack.pop();
        node2 = node2.next;
    }

    return head;
};
