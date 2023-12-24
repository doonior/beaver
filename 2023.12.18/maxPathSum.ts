/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
  let answer = Number.MIN_SAFE_INTEGER;

  function traversal(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const leftValue = traversal(node.left);
    const rightValue = traversal(node.right);
    const cand = leftValue + node.val + rightValue;

    if (cand > answer) {
      answer = cand;
    }

    return Math.max(node.val + Math.max(leftValue, rightValue), 0);
  }

  traversal(root);

  return answer;
}
