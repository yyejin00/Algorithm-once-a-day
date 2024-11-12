/* # 가위 바위 보
- 문제 : 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

제한사항
0 < rsp의 길이 ≤ 100
rsp와 길이가 같은 문자열을 return 합니다.
rsp는 숫자 0, 2, 5로 이루어져 있습니다.
입출력 예
rsp	result
"2"	"0"
"205"	"052"
입출력 예 설명
입출력 예 #1

"2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.
입출력 예 #2

"205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다. */

function solution(rsp) {
  const arr = rsp.split("");
  const newarr = [];
  arr.map((item) => {
    if (item == 2) {
      newarr.push(0);
    } else if (item == 5) {
      newarr.push(2);
    } else {
      newarr.push(5);
    }
  });
  return newarr.join("");
}
```
맵핑을 한다고해도 if문때문에 굳이~였던 코드였다.
if문을 삼항연산자로 요즘 자주 바꾸고 있는데
혼자 삼항연산자안에 삼항연산자를 또넣어도 되나? 생각했었는데 딱 이번문제에 다른 사람이 푼 문제를 보니까 있었다.

```;
function solution(rsp) {
  const arr = rsp.split("");
  const newarr = [];
  arr.map((item) => {
    item == 2 ? 0 : item == 5 ? 2 : 0;
  });
  return newarr.join("");
}
