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

class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}

test("case 1", () => {
  const list1 = [1, 2, 4].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );
  const list2 = [1, 3, 4].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );

  const expected = [1, 1, 2, 3, 4, 4].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );

  expect(mergeTwoLists(list1, list2)).toStrictEqual(expected);
});

test("case 2", () => {
  const list1 = [].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );
  const list2 = [].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );

  const expected = [].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );

  expect(mergeTwoLists(list1, list2)).toStrictEqual(expected);
});

test("case 3", () => {
  const list1 = [].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );
  const list2 = [0].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );

  const expected = [0].reduceRight<ListNode | null>(
    (next, val) => new ListNode(val, next),
    null,
  );

  expect(mergeTwoLists(list1, list2)).toStrictEqual(expected);
});
