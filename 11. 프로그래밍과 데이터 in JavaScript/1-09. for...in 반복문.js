// ===== 3-1. 프로퍼티 이름 출력하기 =====
let library = {
  name: "중앙도서관",
  openYear: 2010,
  isOpen: true,
  weekendOpen: false,
  mainBook: "해리포터",
};

for (let key in library) {
  console.log(key);
}

// ===== 3-2. 프로퍼티 이름과 값 함께 출력하기 =====
let library2 = {
  name: "중앙도서관",
  openYear: 2010,
  isOpen: true,
  weekendOpen: false,
  mainBook: "해리포터",
};

for (let key in library2) {
  console.log(key);
  console.log(library2[key]);
}

// ===== 4-1. 정수형 프로퍼티의 자동 정렬 =====
let ranking = {
  3: "김철수",
  1: "이영희",
  4: "박민수",
  2: "최지은",
};

for (let key in ranking) {
  console.log(key);
  console.log(ranking[key]);
}

// ===== 4-2. 문자열과 숫자가 혼합된 경우 =====
let mixed = {
  name: "홍길동",
  3: "세번째",
  age: 20,
  1: "첫번째",
  city: "서울",
};

for (let key in mixed) {
  console.log(key);
}

// ===== 4-3. 정수형 프로퍼티 사용 시 주의점 =====
let ordered = {
  3: "세번째",
  1: "첫번째",
  2: "두번째",
};

for (let key in ordered) {
  console.log(key);
}
