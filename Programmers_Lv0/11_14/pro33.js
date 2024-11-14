/* # 문자 반복 출력하기
- 문제 : 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
2 ≤ my_string 길이 ≤ 5
2 ≤ n ≤ 10
"my_string"은 영어 대소문자로 이루어져 있습니다.
입출력 예
my_string	n	result
"hello"	3	"hhheeellllllooo"
입출력 예 설명
입출력 예 #1

"hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다. 사실 산 repeat을 몰랐다. 그래서 문자열 반복해서 찾아냈다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅅㅂ.외워라 반복 repeat replaceAll("a","c")a라는 모든 문자열을 c로 재배치
 */

function solution(my_string, n) {
  var total = "";
  [...my_string].forEach((a) => {
    total += a.repeat(n);
  });

  return total;
}
