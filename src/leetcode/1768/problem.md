link: https://leetcode.com/problems/merge-strings-alternately/



두 문자열 word1과 word2가 주어집니다. 두 문자열을 번갈아 가며 문자를 추가하여 병합합니다. word1부터 시작합니다. 만약 한 문자열이 다른 문자열보다 길다면, 추가된 문자를 병합된 문자열 끝에 추가합니다.

병합된 문자열을 반환하세요.

### 예시 1:

입력: word1 = "abc", word2 = "pqr"

출력: "apbqcr"

설명: 병합된 문자열은 다음과 같이 병합됩니다:
```
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
```

### 예시 2:

입력: word1 = "ab", word2 = "pqrs"

출력: "apbqrs"

설명: word2가 더 길기 때문에 "rs"가 끝에 추가됩니다.
```
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
```

### 예시 3:

입력: word1 = "abcd", word2 = "pq"

출력: "apbqcd"

설명: word1이 더 길기 때문에 "cd"가 끝에 추가됩니다.
```
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
```

### 제약 조건:

- 1 <= word1.length, word2.length <= 100
- word1과 word2는 소문자 영어 문자로만 구성됩니다.
