// 1-08. 불린형(Boolean) 실습

// --- 비교 연산자 ---
console.log("--- 비교 연산자 ---");
let myAge = 25;

console.log(myAge > 20);
console.log(myAge === 25);
console.log(myAge !== 25);

let userId = "codeit";

console.log(userId === "codeit");
console.log(userId !== "Codeit");

// --- 논리 연산자 ---
console.log("\n--- 논리 연산자 ---");
// AND 연산자 (&&)
let isLoggedIn = true;
let isPremium = false;
console.log("isLoggedIn && isPremium:", isLoggedIn && isPremium);

// OR 연산자 (||)
let isOwner = false;
let isAdmin = true;
console.log("isOwner || isAdmin:", isOwner || isAdmin);

// NOT 연산자 (!)
console.log("!isLoggedIn:", !isLoggedIn);
