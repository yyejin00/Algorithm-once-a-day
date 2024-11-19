/* 배열 원소의 길이
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.
입출력 예
strlist	result
["We", "are", "the", "world!"]	[2, 3, 3, 6]
["I", "Love", "Programmers."]	[1, 4, 12]
입출력 예 설명
입출력 예 #1

["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
입출력 예 #2

["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
 */

function solution(strlist) {
  let result = [...strlist].map((a) => {
    return [...a].length;
  });
  return result;
}
//간단하게 만들기
// 인수값은 이미 배열인데 왜 스프레드 쓰냐고. length는 배열 길이나 그런 것에만 쓰는게 가능한줄 알았음 ㅋㅎ ㅅㅂ
function solution(strlist) {
  return strlist.map((a) => a.length);
}
