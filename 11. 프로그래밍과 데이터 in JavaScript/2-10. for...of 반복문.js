// ===== 1. 배열을 반복하는 또 다른 방법 =====
let books = ["해리포터", "반지의 제왕", "나니아 연대기", "어린왕자"];

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

// ===== 3. for...of 사용 예제 =====
let books2 = ["해리포터", "반지의 제왕", "나니아 연대기", "어린왕자"];

for (let book of books2) {
  console.log(book);
}

// 출력:
// 해리포터
// 반지의 제왕
// 나니아 연대기
// 어린왕자

// ===== 4. 일반 for문과 비교 =====

// 일반 for문
let colors = ["빨강", "파랑", "노랑"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for...of문
let colors2 = ["빨강", "파랑", "노랑"];

for (let color of colors2) {
  console.log(color);
}

// ===== 5. 실전 활용 예제 =====

// 5-1. 배열 요소 합계 구하기
let scores = [85, 90, 78, 92, 88];
let sum = 0;

for (let score of scores) {
  sum += score;
}

console.log(`총점: ${sum}`); // 총점: 433
console.log(`평균: ${sum / scores.length}`); // 평균: 86.6

// 5-2. 특정 조건 검색
let prices = [15000, 23000, 8000, 45000, 12000];

for (let price of prices) {
  if (price < 10000) {
    console.log(`저렴한 상품: ${price}원`);
  }
}

// 출력: 저렴한 상품: 8000원

// 5-3. 배열 요소 변환
let temperatures = [22, 25, 19, 28, 23];
let messages = [];

for (let temp of temperatures) {
  if (temp >= 25) {
    messages.push(`${temp}°C - 더워요`);
  } else {
    messages.push(`${temp}°C - 적당해요`);
  }
}

console.log(messages);
// ['22°C - 적당해요', '25°C - 더워요', '19°C - 적당해요', '28°C - 더워요', '23°C - 적당해요']

// ===== 6. for...in vs for...of =====

// for...in (객체용)
let student = {
  name: "김철수",
  age: 20,
  grade: "A",
};

for (let key in student) {
  console.log(key); // 프로퍼티 이름 출력
}
// name
// age
// grade

// for...of (배열용)
let subjects = ["국어", "영어", "수학"];

for (let subject of subjects) {
  console.log(subject); // 배열 요소 출력
}
// 국어
// 영어
// 수학

// ===== 7. 배열에 for...in 사용 시 주의사항 =====
let fruits = ["사과", "바나나", "포도"];

for (let index in fruits) {
  console.log(fruits[index]);
}
