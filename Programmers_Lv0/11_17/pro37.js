/* 모음 제거
문제 : 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
제한사항
my_string은 소문자와 공백으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string result
"bus" "bs"
"nice to meet you" "nc t mt y"
입출력 예 설명
입출력 예 #1

"bus"에서 모음 u를 제거한 "bs"를 return합니다.
입출력 예 #1

"nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다. */

function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  return [...my_string].filter((a) => !vowel.includes(a)).join("");
}
/*return [...my_string].reduce((a,b)=>{
        vowel.includes(a) ? a+b : a;
    });

    [...my_string].filter(a=>{
        vowel.includes(a) ? "" :a ;
    }).join("");
    */
/* 아 오늘 문제는 점수가 짜네. 간좀 맞춰라.
reduce는 왜 못쓰는건지 모르겠네 내가 식을 잘 못 쓴건가.. 두번째 인자값을 잘 못쓴것인가..안에 조건식을 어떻게 바꾸던 안나오네..
filter는 필터함수 자체가 조건식을 만족하면 값을 리턴하는 거라서 오히려 삼항식을 사용하니까 빈배열로 나왔다.리듀스는.. 어렵다.
생각해보니까 리듀서함수에 b가 들어가 있어야하는데 그러면 모음인 글자를 거를 수가 없다. 흑흑
아래 코딩하다가 알게되었는데 reduce함수 안에 return을 안넣어서 그런가보다 */
