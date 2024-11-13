/* # 숨어있는 숫자의 덧셈 (1)
- 문제 : 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
입출력 예
my_string	result
"aAb1B2cC34oOp"	10
"1a2b3c4d123"	16
입출력 예 설명
입출력 예 #1

"aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
입출력 예 #2

"1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.
유의사항
연속된 숫자도 각각 한 자리 숫자로 취급합니다.

나의 풀이  */

function solution(my_string) {
  const arr = my_string.split("");
  var total = 0;
  arr.filter((item) => {
    if (Number(item) >= 0) {
      total += Number(item);
    }
  });
  return total;
}

function solution(my_string) {
  var total = 0;
  const arr = my_string.split("").filter((item) => {
    if (Number(item) >= 0) {
      total += Number(item);
    }
  });
  return total;
}
/* 
사람들이 reduce를 많이 쓰더라. 
이럴경우에 숫자는 문자열이라 01234이런식으로 나오는데 어카징
```js
const solution=(my_string)=>{
  return arr = my_string.split('').reduce((a,b)=>Number(b) ? a+b :a
  ,0);


```
split을 어떻게 표현할까 위에서 고민했는데 아래서 문자열을 spread 연산자 해서 각 배열에 하나씩 넣었다.
acc는 최초의 값이면서 누적한 값이고 cur는 각 배열의 값이다.
```js
function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}
```
``+acc + +cur``
아 충격 숫자인 문자열 앞에 +를 붙이면 숫자가 된단다.
뒤에 /1,* 1, -1을 붙여도 같은 값으로 숫자로 나온다. 와놔
parseFloat()이 근본이긴한데 저건 또 처음본 것 같다. */
