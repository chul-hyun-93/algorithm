21. Merge Two Sorted Lists

link: https://leetcode.com/problems/merge-two-sorted-lists

두 개의 정렬된 연결 리스트 list1과 list2의 헤드가 주어집니다.

이 두 리스트를 하나의 정렬된 리스트로 병합하세요. 첫 번째 두 리스트의 노드를 결합하여 리스트를 만드세요.

병합된 연결 리스트의 헤드를 반환하세요.

예시 1:

입력: list1 = [1,2,4], list2 = [1,3,4]
출력: [1,1,2,3,4,4]

예시 2:

입력: list1 = [], list2 = []
출력: []

예시 3:

입력: list1 = [], list2 = [0]
출력: [0]

제약 사항:

	•	두 리스트의 노드 수는 [0, 50] 범위에 있습니다.
-100 <= Node.val <= 100
•	list1과 list2는 모두 비내림차순으로 정렬되어 있습니다.
