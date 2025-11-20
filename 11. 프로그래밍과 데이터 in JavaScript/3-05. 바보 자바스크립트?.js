// ===== 1. 이상한 계산 결과 =====
console.log(0.1 + 0.2); // 0.30000000000000004

// 더 많은 예시
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.3 - 0.1); // 0.19999999999999998
console.log(0.7 + 0.1); // 0.7999999999999999
console.log(1.1 + 2.2); // 3.3000000000000003

// ===== 3. 해결 방법 1: toFixed() 메소드 =====
let sum = 0.1 + 0.2;

console.log(sum.toFixed(1)); // '0.3' (문자열)

// 숫자로 변환하기
let sum2 = 0.1 + 0.2;

// Number() 함수
console.log(Number(sum2.toFixed(1))); // 0.3 (숫자)

// 단항 덧셈 연산자
console.log(+sum2.toFixed(1)); // 0.3 (숫자)

// 실전 예제
let price1 = 0.1;
let price2 = 0.2;
let total = price1 + price2;

// 화폐 계산은 소수점 둘째 자리까지
let displayTotal = Number(total.toFixed(2));
console.log(`합계: ${displayTotal}원`); // 합계: 0.3원

// ===== 4. 해결 방법 2: Math.round() 메소드 =====

// 4-1. 기본 원리
let sum3 = 0.1 + 0.2;

console.log(Math.round(sum3 * 10) / 10); // 0.3

// 4-2. 소수점 둘째 자리까지
let num = 0.1 + 0.2;

console.log(Math.round(num * 100) / 100); // 0.3

// 4-3. 함수로 만들기
function roundDecimal(number, precision) {
  let multiplier = Math.pow(10, precision);
  return Math.round(number * multiplier) / multiplier;
}

console.log(roundDecimal(0.1 + 0.2, 1)); // 0.3
console.log(roundDecimal(0.1 + 0.2, 2)); // 0.3
console.log(roundDecimal(1.005, 2)); // 1.01

// ===== 5. 실전 활용 예제 =====

// 5-1. 장바구니 합계
let items = [
  { name: "사과", price: 0.1 },
  { name: "바나나", price: 0.2 },
  { name: "포도", price: 0.3 },
];

let total2 = 0;
for (let item of items) {
  total2 += item.price;
}

// 반올림 처리
let displayTotal2 = Number(total2.toFixed(2));
console.log(`총액: ${displayTotal2}원`);

// 5-2. 평균 계산
let scores = [85.1, 90.2, 78.3];
let sum4 = 0;

for (let score of scores) {
  sum4 += score;
}

let average = sum4 / scores.length;
console.log(Number(average.toFixed(2))); // 84.53

// 5-3. 세금 계산
let price = 10.1;
let taxRate = 0.1;
let tax = price * taxRate;

console.log(tax); // 1.0100000000000002
console.log(Number(tax.toFixed(2))); // 1.01

// ===== 7. 정확한 계산이 필요하다면? =====

// 7-1. 정수로 변환하여 계산
let price3 = 0.1;
let price4 = 0.2;

// 100을 곱해 정수로
let cents1 = price3 * 100; // 10
let cents2 = price4 * 100; // 20
let totalCents = cents1 + cents2; // 30

// 다시 소수로
let total3 = totalCents / 100; // 0.3
console.log(total3); // 0.3
