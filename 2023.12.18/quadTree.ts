/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(
  grid: number[][],
  length: number = grid.length,
  startX: number = 0,
  startY: number = 0
): Node | null {
  let isLeaf = true;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[startX + i][startY + j] !== grid[startX][startY]) {
        isLeaf = false;
        break;
      }
    }
    if (!isLeaf) {
      break;
    }
  }

  if (isLeaf) {
    return new Node(!!grid[startX][startY], true);
  }

  const half = length / 2;
  const topLeft = construct(grid, half, startX, startY);
  const topRight = construct(grid, half, startX, startY + half);
  const bottomLeft = construct(grid, half, startX + half, startY);
  const bottomRight = construct(grid, half, startX + half, startY + half);

  return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
}
