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

function diameterOfBinaryTree(root: TreeNode | null): number {
  const valueRef = { value: 0 };
  longestPath(root, valueRef);
  return valueRef.value;
}

function longestPath(
  root: TreeNode | null,
  valueRef: { value: number },
): number {
  if (root === null) {
    return 0;
  }

  const rightDiameter = longestPath(root.right, valueRef);
  const leftDiameter = longestPath(root.left, valueRef);

  valueRef.value = Math.max(valueRef.value, rightDiameter + leftDiameter);

  return Math.max(rightDiameter, leftDiameter) + 1;
}

test("case 1", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3),
  );
  expect(diameterOfBinaryTree(root)).toBe(3);
});

test("case 2", () => {
  const root = new TreeNode(1, new TreeNode(2));
  expect(diameterOfBinaryTree(root)).toBe(1);
});
