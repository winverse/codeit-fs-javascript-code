// 04. 자료형 개요 실습

// --- 1. 숫자 (Number) ---
console.log("--- 1. 숫자 (Number) ---");
console.log(10 + 5); // 15
console.log(3.14 * 2); // 6.28

// --- 2. 문자열 (String) ---
console.log("\n--- 2. 문자열 (String) ---");
console.log("안녕하세요!");
console.log("Let's learn JavaScript!");

// 문자열 이어붙이기
console.log("Hello, " + "world!"); // "Hello, world!"

// --- 3. 불린 (Boolean) ---
console.log("\n--- 3. 불린 (Boolean) ---");
console.log(8 > 6); // true
console.log(10 === 5); // false

// --- 잠깐! 숫자와 문자열의 덧셈 & typeof ---
console.log("\n--- 잠깐! 숫자와 문자열의 덧셈 & typeof ---");
// 숫자 덧셈
console.log(10 + 5);
console.log(typeof (10 + 5)); // "number"

// 문자열 연결
console.log("10" + "5");
console.log(typeof ("10" + "5")); // "string"
