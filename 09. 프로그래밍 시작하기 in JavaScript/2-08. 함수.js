// 2-08. 함수(Function) 실습

// --- 함수 선언하기 ---
console.log("--- 함수 선언하기 ---");
function morningRoutine() {
  console.log("잠에서 깨어납니다.");
  console.log("세수를 합니다.");
  console.log("옷을 입습니다.");
  console.log("아침 식사를 합니다.");
}

// --- 함수 호출하기 ---
console.log("\n--- 함수 호출하기 ---");
morningRoutine();

// --- 함수를 사용하는 이유 ---
// 1. 코드의 재사용
console.log("\n--- 코드의 재사용 ---");
morningRoutine();
morningRoutine();

// 2. 코드의 가독성 및 유지보수
console.log("\n--- 코드의 가독성 및 유지보수 ---");
function morningRoutineModified() {
  // 함수 이름 변경하여 충돌 방지
  console.log("잠에서 깨어납니다.");
  console.log("샤워를 합니다."); // 여기만 수정!
  console.log("옷을 입습니다.");
  console.log("아침 식사를 합니다.");
}

morningRoutineModified();
