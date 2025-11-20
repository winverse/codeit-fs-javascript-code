// ===================================
// 1. 자료형 복습
// ===================================

// 기본형 (Primitive Type):
// - 숫자(Number)
// - 문자열(String)
// - 불린(Boolean)
// - null
// - undefined

// 참조형 (Reference Type):
// - 객체(Object)
// - 배열(Array)

// ===================================
// 2. 기본형 - 값이 복사됨
// ===================================

let x = 3;
let y = x; // x의 값(3)이 복사됨

console.log(x); // 3
console.log(y); // 3

y = 5; // y만 변경

console.log(x); // 3 (변하지 않음)
console.log(y); // 5

// 문자열도 마찬가지
let name1 = "Alice";
let name2 = name1; // 'Alice'가 복사됨

name2 = "Bob";

console.log(name1); // 'Alice' (변하지 않음)
console.log(name2); // 'Bob'

// 불린도 마찬가지
let isActive = true;
let status = isActive; // true가 복사됨

status = false;

console.log(isActive); // true (변하지 않음)
console.log(status); // false

// ===================================
// 3. 참조형 - 주소가 복사됨 (객체)
// ===================================

let obj1 = { name: "CodeCamp" };
let obj2 = obj1; // 주소가 복사됨 (같은 객체를 가리킴)

console.log(obj1); // { name: 'CodeCamp' }
console.log(obj2); // { name: 'CodeCamp' }

obj2.job = "프로그래밍 교육"; // obj2를 수정

console.log(obj1); // { name: 'CodeCamp', job: '프로그래밍 교육' } ⚠️
console.log(obj2); // { name: 'CodeCamp', job: '프로그래밍 교육' }

// ===================================
// 4. 참조형 - 주소가 복사됨 (배열)
// ===================================

let arr1 = [1, 2, 3];
let arr2 = arr1; // 주소가 복사됨 (같은 배열을 가리킴)

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

arr2[2] = 4; // arr2를 수정

console.log(arr1); // [1, 2, 4] ⚠️
console.log(arr2); // [1, 2, 4]

// ===================================
// 5. 실전 예제 - 학생 정보 관리
// ===================================

let student1 = {
  name: "김철수",
  score: 85,
};

let student2 = student1; // 주소가 복사됨

student2.score = 95; // student2를 수정

console.log(student1.score); // 95 (함께 변경됨!)
console.log(student2.score); // 95

// ===================================
// 6. 실전 예제 - 장바구니
// ===================================

let cart1 = ["사과", "바나나"];
let cart2 = cart1; // 주소가 복사됨

cart2.push("포도"); // cart2에 추가

console.log(cart1); // ['사과', '바나나', '포도'] (함께 변경됨!)
console.log(cart2); // ['사과', '바나나', '포도']

// ===================================
// 7. 함수 파라미터에서의 참조형
// ===================================

function updateScore(student) {
  student.score = 100; // 원본 객체가 수정됨!
}

let myStudent = {
  name: "이영희",
  score: 80,
};

updateScore(myStudent);

console.log(myStudent.score); // 100 (변경됨!)

// ===================================
// 8. 비교 연산
// ===================================

// 기본형: 값으로 비교
let a = 5;
let b = 5;
console.log(a === b); // true

// 참조형: 주소로 비교
let obj3 = { name: "Alice" };
let obj4 = { name: "Alice" };
console.log(obj3 === obj4); // false (다른 객체)

let obj5 = obj3;
console.log(obj3 === obj5); // true (같은 객체를 가리킴)

// 배열도 마찬가지
let arr3 = [1, 2, 3];
let arr4 = [1, 2, 3];
console.log(arr3 === arr4); // false (다른 배열)

let arr5 = arr3;
console.log(arr3 === arr5); // true (같은 배열을 가리킴)

// ===================================
// 9. 실전 상황 - 의도하지 않은 수정
// ===================================

// 문제 상황
function addItem(cart, item) {
  cart.push(item);
  return cart;
}

let myCart = ["우유", "빵"];
let newCart = addItem(myCart, "계란");

console.log(myCart); // ['우유', '빵', '계란'] (원본이 변경됨!)
console.log(newCart); // ['우유', '빵', '계란']

// ===================================
// 10. 정리 예제
// ===================================

console.log("=== 기본형 ===");
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(`num1: ${num1}, num2: ${num2}`); // num1: 10, num2: 20

console.log("=== 참조형 ===");
let person1 = { name: "철수", age: 20 };
let person2 = person1;
person2.age = 30;
console.log(`person1.age: ${person1.age}, person2.age: ${person2.age}`); // person1.age: 30, person2.age: 30
