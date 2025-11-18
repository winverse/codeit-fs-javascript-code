// 1-18. 템플릿 문자열 실습

// --- '+' 연산자를 사용한 문자열 연결 ---
console.log("--- '+' 연산자를 사용한 문자열 연결 ---");
let name = "김코딩";
let message = "안녕하세요, " + name + "님!";
console.log(message);

let item = "노트북";
let price = 1200000;
let quantity = 3;
let orderSummary =
  item +
  " " +
  quantity +
  "개를 주문하셨습니다. 총 " +
  price * quantity +
  "원입니다.";
console.log(orderSummary);

// --- 템플릿 문자열 사용법 ---
console.log("\n--- 템플릿 문자열 사용법 ---");
let message2 = `안녕하세요, ${name}님!`;
console.log(message2);

// --- 템플릿 문자열의 장점 ---
console.log("\n--- 템플릿 문자열의 장점 ---");
// 1. 가독성 향상
let orderSummary2 = `${item} ${quantity}개를 주문하셨습니다. 총 ${
  price * quantity
}원입니다.`;
console.log(orderSummary2);

// 2. 표현식 삽입 가능
function getGreeting(name) {
  return `반갑습니다, ${name} 고객님!`;
}
let customerName = "박해커";
let greetingMessage = `${getGreeting(customerName)} 즐거운 쇼핑 되세요.`;
console.log(greetingMessage);
