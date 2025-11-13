// 2-14. return문 실습

// --- return 사용하기 ---
console.log("--- return 사용하기 ---");
function getTen() {
  return 10;
}

console.log(getTen()); // console.log(10); 과 동일하게 동작

// --- return과 파라미터 함께 사용하기 ---
console.log("\n--- return과 파라미터 함께 사용하기 ---");
function krwToUsd(krw) {
  let usd = krw / 1350;
  return usd;
}

// --- 반환값을 변수에 저장하기 ---
console.log("\n--- 반환값을 변수에 저장하기 ---");
let myMoneyInUsd = krwToUsd(27000);
console.log("내 돈은 " + myMoneyInUsd + "달러입니다.");
