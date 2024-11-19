/* # 제곱수판별하기
-문제 : 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000
입출력 예
n	result
144	1
976	2
입출력 예 설명
입출력 예 #1

144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.
입출력 예 #2

976은 제곱수가 아닙니다. 따라서 2를 return합니다.

내풀이 +3점~!*/

function solution(n) {
  return Math.sqrt(n) - Math.floor(Math.sqrt(n)) == 0 ? 1 : 2;
}

/*
다른 사람 풀이
```js
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
```
### Number.isInteger() : 정수판별
반환 값은 정수라면 불리언 값 true, 그렇지 않으면 false 이다. */
