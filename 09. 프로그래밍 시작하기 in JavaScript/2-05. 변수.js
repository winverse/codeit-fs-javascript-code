// 2-05. 변수(Variable) 실습

// --- 첫 번째 주문 계산 ---
console.log("--- 첫 번째 주문 계산 ---");
console.log(1500 * 3);

// --- 여러 주문 계산 (오타 포함) ---
console.log("\n--- 여러 주문 계산 (오타 포함) ---");
console.log(1500 * 3);
console.log(2000 * 2 + 2500);
console.log(1400 + 2000); // 오타! 1500이 아닌 1400
console.log(1500 * 2 + 2000 + 2500 * 2);
console.log(2500 * 4);

// --- 변수 선언하기 ---
console.log("\n--- 변수 선언하기 ---");
let colaPrice;

// --- 변수에 값 할당하기 ---
console.log("\n--- 변수에 값 할당하기 ---");
colaPrice = 1500;

console.log(colaPrice); // 1500

// --- 선언과 동시에 할당하기 ---
console.log("\n--- 선언과 동시에 할당하기 ---");
let juicePrice = 2000;
let coffeePrice = 2500;

// --- 변수를 사용한 후 ---
console.log("\n--- 변수를 사용한 후 ---");
colaPrice = 1500;
juicePrice = 2000;
coffeePrice = 2500;

console.log(colaPrice * 3);
console.log(juicePrice * 2 + coffeePrice);
console.log(colaPrice + juicePrice);
console.log(colaPrice * 2 + juicePrice + coffeePrice * 2);
console.log(coffeePrice * 4);

// --- 오타 방지 ---
console.log("\n--- 오타 방지 ---");
console.log(colaPrice); // 정상 출력
// console.log(colaPirce); // ReferenceError: colaPirce is not defined

// --- 유지보수 편리 ---
console.log("\n--- 유지보수 편리 ---");
colaPrice = 1700; // 여기만 수정하면 됨!
console.log(colaPrice);
