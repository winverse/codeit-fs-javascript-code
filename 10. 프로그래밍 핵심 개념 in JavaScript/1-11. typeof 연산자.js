// 1-11. typeof 연산자 실습

// --- typeof 사용법 ---
console.log("--- typeof 사용법 ---");
console.log(typeof 101);
console.log(typeof "Hello");
console.log(typeof true);

let name = "김코딩";
function sayHello() {
  console.log("Hello");
}

console.log(typeof name);
console.log(typeof sayHello);

// --- typeof와 연산자 우선순위 ---
console.log("\n--- typeof와 연산자 우선순위 ---");
// typeof가 +보다 먼저 실행됨
console.log(typeof "Hello" + "World");

// 소괄호를 사용하여 연산 우선순위 지정
console.log(typeof ("Hello" + "World"));
console.log(typeof (10 - 3));
