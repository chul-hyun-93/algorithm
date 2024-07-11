link: https://leetcode.com/problems/valid-palindrome



문구가 대문자를 소문자로 변환하고 모든 영숫자가 아닌 문자를 제거한 후에도 앞으로 읽으나 뒤로 읽으나 동일하다면, 그 문구는 팰린드롬입니다. 영숫자 문자는 문자와 숫자를 포함합니다.

문자열 s가 주어졌을 때, 그것이 팰린드롬이면 true를, 그렇지 않으면 false를 반환하세요.

예제 1:

입력: s = "A man, a plan, a canal: Panama"
출력: true
설명: "amanaplanacanalpanama"는 팰린드롬입니다.

예제 2:

입력: s = "race a car"
출력: false
설명: "raceacar"는 팰린드롬이 아닙니다.

예제 3:

입력: s = " "
출력: true
설명: 영숫자가 아닌 문자를 제거한 후 s는 빈 문자열 ""이 됩니다. 빈 문자열은 앞으로 읽으나 뒤로 읽으나 동일하기 때문에 팰린드롬입니다.

제약 조건:

1 <= s.length <= 2 * 10^5
s는 인쇄 가능한 ASCII 문자로만 구성됩니다.
