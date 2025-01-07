/* 합성수 찾기
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100
입출력 예
n	result
10	5
15	8
입출력 예 설명
입출력 예 #1

10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
입출력 예 #1

15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다. */

function solution(n) {
  let total = 0;
  Array(n)
    .fill()
    .map((a, b) => b + 1)
    .map((a) => (a > 3 && (a % 2 == 0 || a % 3 == 0) ? (total += 1) : total));
  return total;
}
//내풀이.  합성수에 맞는 느낌은 아니긴한데 본인과 1 그리고 거의 모든 수가 2이나 3으로 나눠지기 때문에 이렇게 기준을 줘서 합성수다~ 라고 조건문을 만들었다.

//다들 풀이보면 다 for문쓴다.
// 자신보다 큰값이 약수가 될 수 없으므로 두번째for문 j를 ㅓ<=i라고 만든 것 같다.
//두번째 for문에서 약수값이 3개 이상 나올 경우 answer 값에 +1해서 합성수의 갯수를 센 것 같다.
//비교하는 숫자가 바뀔 때마다 중간에 counter를 0으로 초기화시켜준다.
function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++) {
    let counter = 0;
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        counter += 1;
      }
    }
    if (counter > 2) {
      answer += 1;
    }
  }
  return answer;
}
