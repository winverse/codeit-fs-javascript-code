// ===== 1. 프로퍼티 수정하기 =====
let student = {
  name: "이민수",
  age: 17,
  grade: 2,
  school: "서울고등학교",
};

console.log(student.grade); // 2
student.grade = 3;
console.log(student.grade); // 3

// ===== 2. 프로퍼티 추가하기 =====
let student2 = {
  name: "이민수",
  age: 17,
  grade: 2,
  school: "서울고등학교",
};

console.log(student2.classNumber); // undefined
student2.classNumber = 5;
console.log(student2.classNumber); // 5

// ===== 3. 프로퍼티 삭제하기 =====
let student3 = {
  name: "이민수",
  age: 17,
  grade: 2,
  school: "서울고등학교",
  tempNote: "임시 메모",
};

console.log(student3.tempNote); // '임시 메모'
delete student3.tempNote;
console.log(student3.tempNote); // undefined

// ===== 4-1. undefined와 비교하기 =====
let student4 = {
  name: "이민수",
  age: 17,
  grade: 2,
};

console.log(student4.name !== undefined); // true
console.log(student4.phone !== undefined); // false

// ===== 4-2. in 연산자 사용하기 =====
let student5 = {
  name: "이민수",
  age: 17,
  grade: 2,
};

console.log("name" in student5); // true
console.log("phone" in student5); // false

// ===== 4-3. in 연산자가 더 안전한 이유 =====
let student6 = {
  name: "이민수",
  age: 17,
  grade: 2,
  club: undefined,
};

console.log(student6.club !== undefined); // false (프로퍼티가 있는데도 false)
console.log("club" in student6); // true (정확하게 프로퍼티 존재 확인)

// ===== 4-4. 조건문과 함께 활용하기 =====
let student7 = {
  name: "이민수",
  age: 17,
  grade: 2,
};

if ("name" in student7) {
  console.log(`학생 이름은 ${student7.name}입니다.`);
} else {
  console.log("name 프로퍼티가 존재하지 않습니다.");
}
