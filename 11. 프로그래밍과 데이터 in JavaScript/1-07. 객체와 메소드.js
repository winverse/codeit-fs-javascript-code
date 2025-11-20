// ===== 2. 메소드 정의하기 =====
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

// ===== 3-1. 점 표기법 =====
let calculator2 = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator2.add(5, 3)); // 8

// ===== 3-2. 대괄호 표기법 =====
let calculator3 = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator3["add"](5, 3)); // 8

// ===== 4. 익숙한 메소드: console.log =====
console.log("Hello!"); // 점 표기법
console["log"]("Hello!"); // 대괄호 표기법

// ===== 5-1. 객체별 고유한 동작 정의 =====
let phone = {
  brand: "Samsung",
  model: "Galaxy S23",
  showInfo: function () {
    console.log(`${phone.brand} ${phone.model}`);
  },
};

let laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  showInfo: function () {
    console.log(`${laptop.brand} ${laptop.model} - 노트북`);
  },
};

phone.showInfo(); // Samsung Galaxy S23
laptop.showInfo(); // Apple MacBook Pro - 노트북
