/* 자릿수 더하기
-문제 : 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

제한사항
0 ≤ n ≤ 1,000,000
입출력 예
n result
1234 10
930211 16
입출력 예 설명
입출력 예 #1

1 + 2 + 3 + 4 = 10을 return합니다.
입출력 예 #2

9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다. */

function solution(n) {
  var total = 0;
  while (n > 0) {
    total += n % 10;
    n = parseInt(n / 10);
  }
  return total;
}
//아니 아까 전까지만해도 String 안먹히더니... 내가 잘못본거일지도

function solution(n) {
  const ntostring = n.toString();
  return [...n].reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
}

/* 중괄호 사용 시 리듀서 함수에 return 문 넣어 줄 것

⭕[...n].reduce((a,b)=>{
	return Number(a)+Number(b);
},0);
 ❌[...n].reduce((a,b)=>{
	 Number(a)+Number(b);
},0);
 ⭕[...n].reduce((a,b)=>Number(a)+Number(b),0); */
