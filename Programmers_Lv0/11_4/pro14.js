/* 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

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

두 수의 곱중 최댓값은 31 * 24 = 744 입니다. */

function solution(numbers) {
  var firstNum = 1;
  for (let i = 0; i <= 1; i++) {
    for (let j = 1; j < numbers.length + 1; j++) {
      if (numbers[0] < numbers[j]) {
        numbers[0] = numbers[j];
      }
      firstNum *= numbers[0];
      numbers.shift();
      ++i;
    }
  }
  return firstNum;
}
//sort 사용..
//아니 자꾸 큐나 덱 알고리즘 생각을 해서 for문이랑 if 문 쓰고 자빠졌음
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
