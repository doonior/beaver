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

function isValidBST(root: TreeNode | null, leftMinVal?: number, rightMaxVal?: number): boolean {
    if (!root) {
        return true;
    }

    const isLeftValid = !root.left || ((!leftMinVal || root.left.val > leftMinVal) && root.left.val < root.val);
    const isRightValid = !root.right || ((!rightMaxVal || root.right.val < rightMaxVal) && root.right.val > root.val);
    
    return isLeftValid && isRightValid && isValidBST(root.left, leftMinVal, root.val) && isValidBST(root.right, root.val, rightMaxVal);
};
