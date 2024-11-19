/* # 순서쌍의 개수

- 문제 : 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000
입출력 예
n	result
20	6
100	9
입출력 예 설명
입출력 예 #1

n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.
입출력 예 #2

n이 100 이므로 곱이 100인 순서쌍은 (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1) 이므로 9를 return합니다.

나의 풀이 +5점 받음 !!
*/
function solution(n) {
  var result = 0;
  for (let item = 0; item <= Math.floor(Math.sqrt(n)); item++) {
    n % item === 0 ? (result += 1) : result;
  }
  Number.isInteger(Math.sqrt(n))
    ? (result = 2 * (result - 1) + 1)
    : (result *= 2);
  return result;
} /*
```
생각보다 점수가 높아서 기분이 좋달까?

내 풀이 중에 이 부분이 마음에 들지않기때문에 변경해보겠다.
```js
Number.isInteger(Math.sqrt(n)) ? result= 2*(result-1)+1 : result *=2;
```
for문에서 조건문이 true일 때 2를 더하는 이유는 
4의 값을 순서쌍으로 나타낼 때 (1,4)(4,1)이렇게 숫자는 같지만 위치는 다른 쌍을 표현하기 위해서이다.
n이 제곱되는 숫자가 있을 경우를 대비해서 +1을해주는 센스~
*/
function solution(n) {
  var result = 0;
  for (let item = 0; item <= Math.floor(Math.sqrt(n)); item++) {
    n % item === 0 ? (result += 2) : result;
  }
  return Number.isInteger(Math.sqrt(n)) ? (result += 1) : result;
}
