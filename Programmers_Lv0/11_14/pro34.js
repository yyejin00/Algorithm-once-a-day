/* # 짝수 홀수 개수
-문제 :정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000
입출력 예
num_list	result
[1, 2, 3, 4, 5]	[2, 3]
[1, 3, 5, 7]	[0, 4]
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
입출력 예 #2

[1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.
 */

function solution(num_list) {
  var result = [0, 0];
  num_list.forEach((a) => {
    a % 2 == 0 ? (result[0] += 1) : (result[1] += 1);
  });
  return result;
}
```
reduce 사용. 
``cur&1`` : 비트연산자.조건식을 홀수를 기준으로 잡았네.
```;
function solution(list) {
  return list.reduce(
    (acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc),
    [0, 0]
  );
}

```
저기 가운데 acc는 뭔값이지..
삼항연산자를 실행하고 accu의 초기값인가..? 뭐지
삼항연산자도아니고 ()친거보면 reduce 해당하는 거 아닌 거 같은데..
```;
