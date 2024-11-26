/* # 외계행성의 나이
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

제한사항
age는 자연수입니다.
age ≤ 1,000
PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
입출력 예
age	result
23	"cd"
51	"fb"
100	"baa"
입출력 예 설명
입출력 예 #1

age가 23이므로 "cd"를 return합니다.
입출력 예 #2

age가 51이므로 "fb"를 return합니다.
입출력 예 #3

age가 100이므로 "baa"를 return합니다. */

function solution(age) {
  return [...String(age)].map((a) => "abcedfghij"[a]).join("");
}
//내풀이
```js
function solution(age) {
    const alpha =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return [...String(age)].map(a=>alpha[parseInt(a)]).join("");
}
```//아니 숫자 0~9까지만 표현하면됐는데, 알파벳을 다써버렸네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ근데 이렇게 하나하나 다표현안해도되는게, abcdefghij 문자열 나열해서 뒤에 split붙여서 해도됐는뎅,,
```js
function solution(age) {
    return [...String(age)].map(a=>"abcedfghij"[a]).join("");
}
```;
//저기 `parseInt(a)`로 표현한 것도 alpha[+a] 이렇게 앞에 부호만 붙여주면 문자열에서 숫자로 바뀐다. 저번에 정리했는데 똑같이 써버렸넹.. 근데 사실 문자열도 인덱스 접근이 가능하다. parseInt 빼고 작성해봤더니 가능하다.
