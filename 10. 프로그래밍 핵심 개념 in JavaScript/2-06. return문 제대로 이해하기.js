// 2-06. return문 제대로 이해하기

function calculateFee(age) {
  // 나이에 따라 입장료 계산
  if (age < 19) {
    return 8000; // 청소년 요금
  } else {
    return 10000; // 성인 요금
  }
}

const fee = calculateFee(25); // 함수 호출
console.log(`당신의 입장료는 ${fee}원 입니다.`);

// ---

function checkAvailability(age) {
  console.log(`${age}살 고객님, 입장 가능 여부 확인 중...`);

  if (age < 8) {
    console.log("보호자 동반이 필요합니다.");
    return "입장 불가"; // 여기서 함수가 종료됨
  }

  console.log("확인 완료. 즐거운 시간 보내세요!");
  return "입장 가능";
}

console.log(checkAvailability(7));
console.log("---");
console.log(checkAvailability(25));

// ---

function getTicket(type) {
  return type + " 티켓";
  console.log("티켓 발급이 완료되었습니다."); // 이 코드는 절대 실행되지 않음
}
