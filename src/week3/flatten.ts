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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  flatten(root.left);
  flatten(root.right);

  let node = root.left;

  if (node === null) {
    return;
  }

  while (node.right !== null) {
    node = node.right;
  }

  node.right = root.right;
  root.right = root.left;
  root.left = null;
}
