// 3-13. while 반복문

// while 반복문 - 기본 구조
// 이 코드는 설명용이며, 직접 실행되지 않습니다.
/*
while (조건) {
  // 조건이 참(true)일 동안 반복 실행될 코드
}
*/

// ---

// while 반복문 - 카운트다운 예제
let count = 5;

while (count > 0) {
  console.log(count);
  count--; // count 값을 1씩 감소
}

console.log('발사!');

// ---

// while 반복문 - 랜덤 숫자 맞추기 게임 예제
let targetNumber = Math.floor(Math.random() * 100) + 1; // 1~100 사이의 랜덤 숫자
let guess = 0; // 사용자의 추측 값

console.log('1부터 100 사이의 숫자를 맞춰보세요!');

while (guess !== targetNumber) {
  // 실제 게임에서는 사용자로부터 입력을 받지만, 여기서는 임의의 값으로 대체합니다.
  guess = Math.floor(Math.random() * 100) + 1; 
  console.log(`추측: ${guess}`);

  if (guess < targetNumber) {
    console.log('더 큰 숫자입니다!');
  } else if (guess > targetNumber) {
    console.log('더 작은 숫자입니다!');
  }
}

console.log(`정답! ${targetNumber}을 맞췄습니다!`);
