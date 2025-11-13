// 1-16. 형 변환(Type Conversion) II 실습

// --- 암시적 형 변환 ---
console.log("--- 암시적 형 변환 ---");
console.log("100" - "50");
console.log("100" * "50");

// --- '+' 연산자의 특별한 규칙 ---
console.log("\n--- + 연산자의 특별한 규칙 ---");
// 숫자 + 숫자 -> 덧셈
console.log(100 + 50);

// 문자열 + 숫자 -> 문자열 연결
console.log("100" + 50);

// 숫자 + 문자열 -> 문자열 연결
console.log(100 + "50");

// 문자열 + 문자열 -> 문자열 연결
console.log("100" + "50");

// --- 그 외 산술 연산자 ---
console.log("\n--- 그 외 산술 연산자 ---");
console.log("100" - 50);
console.log(100 * "2");
console.log(true + 1);
console.log(100 - false);

// --- 같음 비교 연산자 (== vs ===) ---
console.log("\n--- 같음 비교 연산자 (== vs ===) ---");
// === (일치 비교)
console.log(100 === "100");
console.log(1 === true);

// == (동등 비교)
console.log(100 == "100");
console.log(1 == true);
