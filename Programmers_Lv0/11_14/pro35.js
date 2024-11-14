/* # 최댓값 만들기 (1)
- 문제 : 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
입출력 예
numbers	result
[1, 2, 3, 4, 5]	20
[0, 31, 24, 10, 1, 9]	744
입출력 예 설명
입출력 예 #1

두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
입출력 예 #1

두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
 */

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
}
```
sort 조건식을 b-a로해서 인덱스 값을 0이랑 1로 하면되는데, 그짧은 시간에 귀찮다!로 그냥 넘어갔음
```;
