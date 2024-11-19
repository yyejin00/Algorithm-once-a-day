/* # 최댓값만들기(2)
- 문제 : 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100
입출력 예
numbers	result
[1, 2, -3, 4, -5]	15
[0, -31, 24, 10, 1, 9]	240
[10, 20, 30, 5, 5, 20, 5]	600
입출력 예 설명
입출력 예 #1

두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.
입출력 예 #2

두 수의 곱중 최댓값은 10 * 24 = 240 입니다.
입출력 예 #3

두 수의 곱중 최댓값은 20 * 30 = 600 입니다.

나의 풀이 +10점*/

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] * numbers[1] >
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
    ? numbers[0] * numbers[1]
    : numbers[numbers.length - 1] * numbers[numbers.length - 2];
}

/*너 진짜 갈수록 `일치얼짱`이구나~

다른 사람 풀이에서 Math.max()함수를 많이 사용했다.
나도 굳이 저렇게 지저분하게 안풀었어도됐는뎈ㅋㅋㅋ
numbers.length-1도 numbers.at(-1);써서 깔굼하게 쓸 수 있따.
간단하게 바꿔보기
*/

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers.at(-1) * numbers.at(-2));
}

/*
### Math.max() ,Math.Min()
위 함수는 더 큰 값을 반환, 작은 값을 반환하기 때문에 따로 변수를 지정할 필요 없다.
### Array.at(-1) 배열의 맨끝 요소 */
