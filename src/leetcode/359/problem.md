link: https://leetcode.com/problems/logger-rate-limiter/



메시지 스트림과 해당 타임스탬프를 수신하는 로거 시스템을 설계하세요. 각 고유한 메시지는 최대 10초마다 한 번만 출력되어야 합니다(즉, 타임스탬프 t에서 출력된 메시지는 t + 10까지 동일한 메시지가 출력되지 않도록 방지합니다).

모든 메시지는 시간 순서대로 도착합니다. 여러 메시지가 동일한 타임스탬프에 도착할 수 있습니다.

Logger 클래스를 구현하세요:

- Logger() 로거 객체를 초기화합니다.
- bool shouldPrintMessage(int timestamp, string message) 주어진 타임스탬프에서 메시지가 출력되어야 하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.

예시 1:

입력
["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
[[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
출력
[null, true, true, false, false, false, true]

설명
Logger logger = new Logger();
logger.shouldPrintMessage(1, "foo");  // true 반환, "foo"에 대한 다음 허용 타임스탬프는 1 + 10 = 11
logger.shouldPrintMessage(2, "bar");  // true 반환, "bar"에 대한 다음 허용 타임스탬프는 2 + 10 = 12
logger.shouldPrintMessage(3, "foo");  // 3 < 11, false 반환
logger.shouldPrintMessage(8, "bar");  // 8 < 12, false 반환
logger.shouldPrintMessage(10, "foo"); // 10 < 11, false 반환
logger.shouldPrintMessage(11, "foo"); // 11 >= 11, true 반환, "foo"에 대한 다음 허용 타임스탬프는 11 + 10 = 21

제약 조건:

- 0 <= timestamp <= 10^9
- 모든 타임스탬프는 증가하는 순서로 전달됩니다(시간 순서).
- 1 <= message.length <= 30
- shouldPrintMessage에 최대 10^4번의 호출이 이루어집니다.
