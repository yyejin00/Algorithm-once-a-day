/* 배열의 유사도
문제 : 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
제한사항
1 ≤ s1, s2의 길이 ≤ 100
1 ≤ s1, s2의 원소의 길이 ≤ 10
s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
s1과 s2는 각각 중복된 원소를 갖지 않습니다.
입출력 예
s1 s2 result
["a", "b", "c"]["com", "b", "d", "p", "c"] 2
["n", "omg"]["m", "dot"] 0
입출력 예 설명
입출력 예 #1

"b"와 "c"가 같으므로 2를 return합니다.
입출력 예 #2

같은 원소가 없으므로 0을 return합니다. */

function solution(s1, s2) {
  var result = 0;
  for (let item of s1) {
    s2.includes(item) ? (result += 1) : 0;
  }
  return result;
}
//for문 말고 filter 사용해보기

function solution(s1, s2) {
  return s1.filter((a) => {
    if (s2.includes(a) == true) return true;
  }).length;
}

//다른 사람들 풀이
function solution(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}
//Set을 사용해서 중복을 제거한 후, concat.length와 setConcat.length를 차이로 return
