// ========================================
// 1. const를 변수 선언에 사용한다?
// ========================================

// 프로그래밍에 익숙해지고 다른 사람들의 코드를 보다 보면,
// const 키워드를 변수 선언에 사용하는 경우를 자주 보게 됩니다.

// ========================================
// 2. let vs const
// ========================================

// 2-1. 가장 큰 차이: 재할당

let x = 1;
console.log(x); // 1
x = 2; // 재할당 가능 ✅
console.log(x); // 2

const y = 3;
console.log(y); // 3
// y = 4; // ❌ 에러! Assignment to constant variable.
// console.log(y);

// 2-2. const는 상수 아닌가요?

const PI = 3.14159;
const MAX_SIZE = 100;
const API_KEY = "abc123";

// ========================================
// 3. 변수와 상수의 새로운 관점
// ========================================

// 3-1. 검색 기능 예제

// 사용자가 입력한 검색어
const searchKeyword = "자바스크립트";

// 검색 실행
function search(keyword) {
  console.log(`"${keyword}" 검색 중...`);
  // 검색 로직...
}

search(searchKeyword);

// 3-2. 실제 상황

// 현재 날짜 - 실행할 때마다 다르지만, 실행 중에는 고정
const today = new Date();

// 사용자 이름 - 사용자마다 다르지만, 실행 중에는 고정
const userName = "김철수";

// 장바구니 합계 - 계산 시점마다 다르지만, 한 번 계산되면 고정
// const totalPrice = calculateTotal(cart);

// ========================================
// 4. 왜 const를 권장할까?
// ========================================

// 4-1. 코드의 일관성

// let을 사용하면 값이 언제든 바뀔 수 있습니다
let x2 = 3;
let y2 = x2 + 2;

console.log(x2); // 3
console.log(y2); // 5

x2 = 4; // 값이 바뀜!
console.log(x2); // 4

y2 = x2 * y2; // 또 바뀜!
console.log(y2); // 20

// 4-2. const를 사용하면

const x3 = 3;
let y3 = x3 + 2;

console.log(x3); // 3 (항상 3)
console.log(y3); // 5

// x3 = 4; // ❌ 에러! 변경 불가

y3 = x3 * y3; // y3만 변경 가능
console.log(y3); // 15

// 4-3. 실전 예제

// ❌ 나쁜 예: let 남용
// let userId = getUserId();
// let userName = getUserName(userId);
// let userAge = getUserAge(userId);

// 나중에 실수로...
// userId = 999; // 😱 원하지 않은 변경!

// ✅ 좋은 예: const 사용
// const userId = getUserId();
// const userName = getUserName(userId);
// const userAge = getUserAge(userId);

// userId = 999; // ❌ 에러로 바로 알 수 있음!

// ========================================
// 5. 변수와 상수 구분하기
// ========================================

// 5-1. 명명 규칙으로 구분

// 변수: camelCase (중간에 값이 바뀔 수 있음을 의미)
let currentScore = 0;
currentScore = 10; // 값이 바뀔 예정

// 상수 (const로 선언하지만 변수처럼 사용)
const userName2 = "김철수"; // 이 실행에서는 고정
const searchKeyword2 = "자바스크립트"; // 이 검색에서는 고정

// 진짜 상수: UPPER_SNAKE_CASE
const MAX_LOGIN_ATTEMPTS = 5; // 프로그램 전체에서 고정
const API_BASE_URL = "https://api.example.com"; // 절대 바뀌지 않음
const TAX_RATE = 0.1; // 세율 - 프로그램 전체에서 동일

// 5-2. 실전 활용

// 설정값 (진짜 상수)
const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ALLOWED_EXTENSIONS = [".jpg", ".png", ".gif"];

// 함수 내부 (const로 선언하지만 변수처럼 사용)
function uploadFile(file) {
  const fileName = file.name;
  const fileSize = file.size;
  const fileExtension = getExtension(fileName);

  if (fileSize > MAX_FILE_SIZE) {
    console.log("파일이 너무 큽니다.");
    return false;
  }

  if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
    console.log("허용되지 않는 파일 형식입니다.");
    return false;
  }

  return true;
}

function getExtension(fileName) {
  return fileName.slice(fileName.lastIndexOf("."));
}

// ========================================
// 6. 주의: const와 참조형
// ========================================

// 6-1. const는 재할당만 막습니다

const numbers = [1, 2, 3];

// ❌ 재할당은 불가능
// numbers = [4, 5, 6]; // 에러!

// ✅ 배열 내용 변경은 가능
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers[0] = 100;
console.log(numbers); // [100, 2, 3, 4]

// 6-2. 객체도 마찬가지

const person = {
  name: "김철수",
  age: 20,
};

// ❌ 재할당은 불가능
// person = { name: '이영희', age: 25 }; // 에러!

// ✅ 프로퍼티 변경은 가능
person.age = 21;
person.job = "개발자";

console.log(person);
// { name: '김철수', age: 21, job: '개발자' }

// 6-3. 왜 이런 일이 일어날까?

const arr = [1, 2, 3];
// arr 변수에 저장된 주소: 0x001

arr.push(4); // 0x001 주소의 배열 내용 변경 ✅

// arr = [5, 6]; // 새로운 배열의 주소(0x002)로 재할당 ❌

// 6-4. 실전 예제

const cart = [];

// 장바구니에 상품 추가 - 가능!
cart.push({ name: "사과", price: 1000 });
cart.push({ name: "바나나", price: 1500 });

console.log(cart);
// [
//   { name: '사과', price: 1000 },
//   { name: '바나나', price: 1500 }
// ]

// ❌ 장바구니를 완전히 새것으로 교체 - 불가능!
// cart = []; // 에러!

// ✅ 장바구니 비우기 - 이렇게는 가능!
cart.length = 0;
console.log(cart); // []

// ========================================
// 7. 실전 가이드
// ========================================

// 7-1. 기본 원칙

// 1. 기본적으로 const 사용
const userName3 = "김철수";
const age = 20;
const items = ["사과", "바나나"];

// 2. 값이 바뀌어야 하면 let 사용
let score = 0;
for (let i = 0; i < 10; i++) {
  score += i;
}

// 3. 진짜 상수는 대문자로
const MAX_SIZE2 = 100;
const API_KEY2 = "abc123";

// 7-2. 좋은 예시

function calculateTotal(items) {
  const TAX_RATE = 0.1; // 진짜 상수

  let subtotal = 0; // 값이 바뀜
  for (const item of items) {
    // item은 각 순회마다 새로 할당됨
    subtotal += item.price;
  }

  const tax = subtotal * TAX_RATE; // 계산 후 고정
  const total = subtotal + tax; // 계산 후 고정

  return total;
}

// 7-3. 나쁜 예시

function calculateTotalBad(items) {
  let TAX_RATE = 0.1; // 바뀔 일 없는데 let 사용 ❌

  let subtotal = 0;
  for (let item of items) {
    // item은 재할당 안 하는데 let ❌
    subtotal += item.price;
  }

  let tax = subtotal * TAX_RATE; // 재할당 안 하는데 let ❌
  let total = subtotal + tax; // 재할당 안 하는데 let ❌

  return total;
}

// ========================================
// 8. 정리
// ========================================

// 실무 팁

// ✅ 권장
const userName4 = "getUserName()";
const items2 = ["item1", "item2"];
let count = 0; // 값이 바뀔 예정

// ❌ 비권장
// let userName5 = 'getUserName()'; // 바뀔 일 없는데 let
// let items3 = ['item1', 'item2']; // 바뀔 일 없는데 let
// const count2 = 0; // 값이 바뀌어야 하는데 const
