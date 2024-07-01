class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) return 0;

  const isLower = low > root.val;
  const isHigher = high < root.val;

  let total = isLower || isHigher ? 0 : root.val;
  if (!isLower) total += rangeSumBST(root.left, low, high);
  if (!isHigher) total += rangeSumBST(root.right, low, high);

  return total;
}

test("case 1", () => {
  const root = new TreeNode(
    10,
    new TreeNode(5, new TreeNode(3), new TreeNode(7)),
    new TreeNode(15, null, new TreeNode(18)),
  );

  expect(rangeSumBST(root, 7, 15)).toBe(32);
});

test("case 2", () => {
  const root = new TreeNode(
    10,
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(1)),
      new TreeNode(7, new TreeNode(6)),
    ),
    new TreeNode(15, new TreeNode(13), new TreeNode(18)),
  );

  expect(rangeSumBST(root, 6, 10)).toBe(23);
});
