link: https://leetcode.com/problems/happy-number/description



다음 알고리즘을 작성하여 숫자 n이 행복한지 여부를 결정하세요.

행복한 수는 다음 과정으로 정의됩니다:

어떤 양의 정수에서 시작하여, 그 수를 각 자릿수의 제곱의 합으로 대체합니다.
이 과정을 반복하여 숫자가 1이 되면 멈추고, 그렇지 않으면 1을 포함하지 않는 사이클을 무한히 반복합니다.
이 과정이 1에서 끝나는 숫자는 행복한 숫자입니다.
n이 행복한 숫자이면 true를 반환하고, 그렇지 않으면 false를 반환하세요.

예제 1:

입력: n = 19
출력: true
설명:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
예제 2:

입력: n = 2
설명:
2^2 = 4
4^2 = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89
8^2 + 9^2 = 145
1^2 + 4^2 + 5^2 = 42
4^2 + 2^2 = 20
2^2 + 0^2 = 4
위의 과정을 반복하면 4가 무한히 반복되므로, 숫자 2는 행복하지 않습니다.
출력: false


제약 조건:

1 <= n <= 2^31 - 1
