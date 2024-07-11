1122. Relative Sort Array

link:https://leetcode.com/problems/relative-sort-array

두 배열 arr1과 arr2가 주어졌을 때, arr2의 요소는 서로 다르며, arr2의 모든 요소는 arr1에도 존재합니다.
arr1의 요소들을 arr2의 상대적인 순서에 맞게 정렬하세요. arr2에 없는 요소들은 arr1의 끝에 오름차순으로 배치되어야 합니다.

예제 1:
입력: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
출력: [2,2,2,1,4,3,3,9,6,7,19]

예제 2:
입력: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
출력: [22,28,8,6,17,44]

제약 조건:

- 1 <= arr1.length, arr2.length <= 1000
- 0 <= arr1[i], arr2[i] <= 1000
- arr2의 모든 요소는 서로 다릅니다.
- arr2의 각 요소는 arr1에 존재합니다.
