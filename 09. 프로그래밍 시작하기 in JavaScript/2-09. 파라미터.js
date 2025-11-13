// 2-09. 파라미터(Parameter) 실습

// --- 파라미터가 없는 함수 ---
console.log("--- 파라미터가 없는 함수 ---");
function morningRoutine() {
  console.log("잠에서 깨어납니다.");
  console.log("세수를 합니다.");
  console.log("옷을 입습니다.");
  console.log("아침 식사를 합니다.");
}

morningRoutine();

// --- 파라미터 선언과 사용 ---
console.log("\n--- 파라미터 선언과 사용 ---");
function makeDrink(drinkName) {
  console.log(drinkName + "를 만듭니다.");
}

// --- 아규먼트(Argument) 전달하기 ---
console.log("\n--- 아규먼트(Argument) 전달하기 ---");
makeDrink("아메리카노");
makeDrink("녹차라떼");
makeDrink("자몽에이드");

// --- 다양한 자료형을 파라미터로 활용하기 ---
console.log("\n--- 다양한 자료형을 파라미터로 활용하기 ---");
function printOrderCount(count) {
  console.log("총 " + count + "잔을 주문하셨습니다.");
}

printOrderCount(3); // 숫자 3을 아규먼트로 전달
printOrderCount(5); // 숫자 5를 아규먼트로 전달
