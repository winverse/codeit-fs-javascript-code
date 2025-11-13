// 3-16. break와 continue

// break 예제: 특정 숫자 찾기 (for문)
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 7) {
    console.log('7을 찾았습니다! 반복을 중단합니다.');
    break; // i가 7이 되면 반복문 즉시 종료
  }
}
console.log('반복문 종료.');

// ---

// continue 예제: 짝수 건너뛰고 홀수만 출력하기 (for문)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) { // i가 짝수이면
    continue; // 현재 반복을 건너뛰고 다음 반복으로
  }
  console.log(i); // 홀수만 출력됩니다.
}

// ---

// while문에서 continue 사용 시 주의사항 (while문)
let j = 1;
while (j <= 10) {
  if (j % 2 === 0) { // j가 짝수이면
    j++; // 중요: continue 전에 j를 증가시켜야 무한 루프를 방지합니다.
    continue; // 현재 반복을 건너뛰고 다음 반복으로
  }
  console.log(j); // 홀수만 출력됩니다.
  j++; // 홀수인 경우에도 j를 증가시킵니다.
}
