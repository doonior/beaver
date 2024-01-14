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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  function add(
    l1: ListNode | null,
    l2: ListNode | null,
    answer: ListNode | null,
    carry: number
  ) {
    if (!l1 && !l2 && !carry) {
      return;
    }
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const nextCarry = Math.floor(sum / 10);
    answer.val = sum % 10;
    if (l1?.next || l2?.next || nextCarry) {
      answer.next = new ListNode();
      add(l1?.next ?? null, l2?.next ?? null, answer.next, nextCarry);
    }
    return answer;
  }

  const answer = new ListNode();
  return add(l1, l2, answer, 0);
}
