205. Isomorphic Strings

두 문자열 s와 t가 주어졌을 때, 이 두 문자열이 동형인지 확인하세요.
두 문자열 s와 t가 동형이라는 것은 s의 문자를 치환하여 t를 얻을 수 있는 경우를 말합니다.

문자의 순서를 유지하면서 모든 문자를 다른 문자로 대체해야 합니다. 두 문자가 동일한 문자로 매핑될 수는 없지만, 하나의 문자가 자기 자신으로 매핑될 수는 있습니다.

예시 1:

입력: s = "egg", t = "add"
출력: true
예시 2:

입력: s = "foo", t = "bar"
출력: false
예시 3:

입력: s = "paper", t = "title"
출력: true


제약사항:

1 <= s.length <= 5 * 10^4
t.length == s.length

link: https://leetcode.com/problems/isomorphic-strings
