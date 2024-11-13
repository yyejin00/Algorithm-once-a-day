/* # 가장 큰 수 찾기
- 문제 : 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.
입출력 예
array	result
[1, 8, 3]	[8, 1]
[9, 10, 11, 8]	[11, 2]
입출력 예 설명
입출력 예 #1

1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
입출력 예 #2

9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

내풀이 */

function solution(array) {
  const real = array.map((a) => (a > 0 ? a : 0));
  array.sort((a, b) => a - b);

  return [array[array.length - 1], real.indexOf(array[array.length - 1])];
}

```
sort가 왜 이상하게 되지? 했다가 숫자는 정렬이 이상하다는 걸 깨닫고...
a-b로 정렬해주었다....
map부분을 잘못했나 한참 헤맸네..

하지만~ 우리에겐 max라는 함수가 있었다. 그리고 min()함수도 있다는거 잊지마...
```;
function solution(array) {
  const max = Math.max(array);
  return [max, array.indexOf(max)];
}
