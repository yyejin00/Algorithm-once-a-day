/* 중복된 문자 제거
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string ≤ 110
my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
대문자와 소문자를 구분합니다.
공백(" ")도 하나의 문자로 구분합니다.
중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
입출력 예
my_string result
"people" "peol"
"We are the world" "We arthwold"
입출력 예 설명
입출력 예 #1

"people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
입출력 예 #2

"We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.
 */
function solution(my_string) {
  return my_string
    .split("")
    .filter((a, b, c) => c.indexOf(a) === b)
    .join("");
}
/* 항상 filter를 첫번째 인수(item)만 사용했던 터라 사용방법을 잘 모르겠다는 생각이 들었다.
indexOf() :특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드이다. 인덱스 값만 반환이 가능

c는 배열을 나타내고, indexOf()를 이용해서 a 의 인덱스 값을 반환시키는게 그 값이 현재 값과 같을 때만 a를 반환한다. 라는 뜻~

예시로 [t,r,e,e] 일때,
첫번째 e에서는 통과가 되지만, 두번째 e에서는 첫번째 인덱스 값과 일치하지 않기때문에 두 번째 값은 없어지게된다~

set 사용
return [...new Set(my_string)].join("");

set은 중복이 없다. 중복되는 데이터는 삭제한다.
배열과 다르게 순서가 없다. 인덱스를 참조해서 값을 불러올 수 없다.
set */
