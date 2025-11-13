// 2-12. 여러 개의 파라미터 실습

// --- 여러 개의 파라미터 선언하기 ---
console.log("--- 여러 개의 파라미터 선언하기 ---");
function printSum(num1, num2) {
  console.log(num1 + num2);
}

// --- 여러 개의 아규먼트 전달하기 ---
console.log("\n--- 여러 개의 아규먼트 전달하기 ---");
printSum(10, 5);

// --- 여러 파라미터 활용 예제 ---
console.log("\n--- 여러 파라미터 활용 예제 ---");
function printShippingInfo(recipient, item) {
  console.log(recipient + "님에게 " + item + "을(를) 배송합니다.");
}

printShippingInfo("김코딩", "노트북");
printShippingInfo("박해커", "키보드");
