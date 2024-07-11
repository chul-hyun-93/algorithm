824. Goat Latin

link: https://leetcode.com/problems/goat-latin/description/

당신에게 단어들이 공백으로 구분된 문자열 sentence가 주어집니다. 각 단어는 소문자와 대문자로만 이루어져 있습니다.

우리는 이 문장을 "염소 라틴어(Goat Latin)"로 변환하고자 합니다 (Pig Latin과 유사한 가상의 언어). 염소 라틴어의 규칙은 다음과 같습니다:

단어가 모음('a', 'e', 'i', 'o', 'u')으로 시작하면, 단어의 끝에 "ma"를 추가합니다.
예를 들어, 단어 "apple"은 "applema"가 됩니다.
단어가 자음(즉, 모음이 아닌 문자)으로 시작하면, 첫 번째 글자를 제거하고 단어의 끝에 붙인 후, "ma"를 추가합니다.
예를 들어, 단어 "goat"은 "oatgma"가 됩니다.
각 단어의 인덱스(1부터 시작)에 따라 각 단어의 끝에 'a'를 추가합니다.
예를 들어, 첫 번째 단어는 끝에 "a"가 추가되고, 두 번째 단어는 끝에 "aa"가 추가되는 식입니다.
sentence를 염소 라틴어로 변환한 최종 문장을 반환하세요.



예제 1:

입력: sentence = "I speak Goat Latin"
출력: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
예제 2:

입력: sentence = "The quick brown fox jumped over the lazy dog"
출력: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


제약 조건:

- sentence.length는 1 이상 150 이하입니다.
- sentence는 영어 문자와 공백으로 구성되어 있습니다.
- sentence는 선행 또는 후행 공백이 없습니다.
- sentence의 모든 단어는 단일 공백으로 구분됩니다.
