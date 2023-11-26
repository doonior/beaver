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

function search(
  node: TreeNode | null,
  depth: number,
  nums: number[]
): number[] {
  if (node === null) {
    return nums;
  }

  if (depth > nums.length) {
    nums.push(node.val);
  }

  search(node.right, depth + 1, nums);
  search(node.left, depth + 1, nums);

  return nums;
}

function rightSideView(root: TreeNode | null): number[] {
  return search(root, 1, []);
}
