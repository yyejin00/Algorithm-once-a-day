/* 인덱스 바꾸기
문제: 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
제한사항
1 < my_string의 길이 < 100
0 ≤ num1, num2 < my_string의 길이
my_string은 소문자로 이루어져 있습니다.
num1 ≠ num2
입출력 예
my_string num1 num2 result
"hello" 1 2 "hlelo"
"I love you" 3 6 "I l veoyou"
입출력 예 설명
입출력 예 #1

"hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.
입출력 예 #2

"I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

내풀이*/

function solution(my_string, num1, num2) {
  my_string = [...my_string];
  let emt = my_string.at(num1);
  my_string[num1] = [...my_string].at(num2);
  my_string[num2] = emt;
  return my_string.join("");
}
//너무 원초적으로 했다..!

//💥다른 사람 풀이 */

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
//다른 사람들 풀이를 보면 구조분해할당으로 자리만 바꿨는데, 아니 어떻게 저렇게 생각하지? 저게 되긴하나 보다.
//구조분해할당이랑 정규식사용이 가끔 되게 쉽게 만들때가 있다.
