/* 중앙값 구하기
문제 :중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
제한사항
array의 길이는 홀수입니다.
0 < array의 길이 < 100
-1,000 < array의 원소 < 1,000
입출력 예
array result
[1, 2, 7, 10, 11] 7
[9, -1, 0] 0

처음으로 +4점 맞은 문제. 아주 뿌듯허다! 캡쳐해둘 걸 그랬다. 다시 확인할 수가 없네..
sort로 정렬하고 round로 반올림해서 배열의 중간 인덱스를 구했다.
배열은 0부터 시작하니까 -1까지 빼줘서 중간값을 리턴해줬다. */

function solution(array) {
  array.sort((a, b) => a - b);
  let middle = Math.round(array.length / 2);
  return array[middle - 1];
}
