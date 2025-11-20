// ===================================
// 1. 복습: 참조형의 문제
// ===================================

let numbers1 = [1, 2, 3];
let numbers2 = numbers1; // 주소가 복사됨

numbers2.push(4);

console.log(numbers1); // [1, 2, 3, 4] ⚠️
console.log(numbers2); // [1, 2, 3, 4]

// ===================================
// 2. 배열 복사하기: slice() 메소드
// ===================================

let arr1 = [1, 2, 3];
let arr2 = arr1.slice(); // 배열 복사!

arr2.push(4);

console.log(arr1); // [1, 2, 3] (변하지 않음)
console.log(arr2); // [1, 2, 3, 4]

// 실전 활용
let originalCart = ["우유", "빵"];
let newCart = originalCart.slice(); // 복사

newCart.push("계란");

console.log(originalCart); // ['우유', '빵']
console.log(newCart); // ['우유', '빵', '계란']

// ===================================
// 3. 객체 복사: 문제 상황
// ===================================

let course1 = {
  title: "파이썬 프로그래밍 기초",
  language: "Python",
};

let course2 = course1; // 주소가 복사됨

course2.title = "알고리즘의 정석";

console.log(course1); // { title: '알고리즘의 정석', language: 'Python' } ⚠️
console.log(course2); // { title: '알고리즘의 정석', language: 'Python' }

// ===================================
// 4. 객체 복사: for...in 문 활용
// ===================================

let lecture1 = {
  title: "파이썬 프로그래밍 기초",
  language: "Python",
};

let lecture2 = {}; // 빈 객체 생성

// 프로퍼티를 하나씩 복사
for (let key in lecture1) {
  lecture2[key] = lecture1[key];
}

lecture2.title = "알고리즘의 정석";

console.log(lecture1); // { title: '파이썬 프로그래밍 기초', ... }
console.log(lecture2); // { title: '알고리즘의 정석', ... }

// ===================================
// 5. 객체 복사 함수 만들기
// ===================================

function cloneObject(object) {
  let temp = {}; // 빈 객체 생성

  // 프로퍼티 복사
  for (let key in object) {
    temp[key] = object[key];
  }

  return temp; // 복사된 객체 반환
}

let class1 = {
  title: "파이썬 프로그래밍 기초",
  language: "Python",
};

let class2 = cloneObject(class1); // 함수로 복사

class2.title = "알고리즘의 정석";

console.log(class1); // { title: '파이썬 프로그래밍 기초', ... }
console.log(class2); // { title: '알고리즘의 정석', ... }

// ===================================
// 6. 함수의 장점: 여러 객체 복사
// ===================================

let lesson1 = {
  title: "파이썬 프로그래밍 기초",
  language: "Python",
};

let lesson2 = cloneObject(lesson1);
let lesson3 = cloneObject(lesson1);

lesson2.title = "알고리즘의 정석";
lesson3.title = "객체 지향 프로그래밍";

console.log(lesson1); // { title: '파이썬 프로그래밍 기초', ... }
console.log(lesson2); // { title: '알고리즘의 정석', ... }
console.log(lesson3); // { title: '객체 지향 프로그래밍', ... }

// ===================================
// 7. 주의사항: 중첩된 배열/객체
// ===================================

let module1 = {
  title: "객체 지향 프로그래밍",
  language: "Python",
  prerequisite: [], // 배열이 포함됨!
};

let module2 = cloneObject(module1);

module2.title = "알고리즘의 정석";
module2.prerequisite.push("파이썬 프로그래밍 기초");

console.log(module1);
// { title: '객체 지향 프로그래밍', prerequisite: ['파이썬 프로그래밍 기초'] } ⚠️
console.log(module2);
// { title: '알고리즘의 정석', prerequisite: ['파이썬 프로그래밍 기초'] }

// ===================================
// 8. 중첩된 구조 예제
// ===================================

let person1 = {
  name: "김철수",
  hobbies: ["독서", "운동"],
};

let person2 = cloneObject(person1);

person2.name = "이영희";
person2.hobbies.push("영화");

console.log(person1);
// { name: '김철수', hobbies: ['독서', '운동', '영화'] } ⚠️
console.log(person2);
// { name: '이영희', hobbies: ['독서', '운동', '영화'] }

// ===================================
// 9. 해결 방법: 배열도 복사하기
// ===================================

let program1 = {
  title: "객체 지향 프로그래밍",
  prerequisite: ["파이썬 기초"],
};

let program2 = {
  title: program1.title,
  prerequisite: program1.prerequisite.slice(), // 배열 복사!
};

program2.prerequisite.push("알고리즘 기초");

console.log(program1.prerequisite); // ['파이썬 기초']
console.log(program2.prerequisite); // ['파이썬 기초', '알고리즘 기초']

// ===================================
// 10. JSON 방법 (간단하지만 제한적)
// ===================================

let training1 = {
  title: "객체 지향 프로그래밍",
  prerequisite: ["파이썬 기초"],
};

// JSON으로 변환 후 다시 객체로 변환
let training2 = JSON.parse(JSON.stringify(training1));

training2.prerequisite.push("알고리즘 기초");

console.log(training1.prerequisite); // ['파이썬 기초']
console.log(training2.prerequisite); // ['파이썬 기초', '알고리즘 기초']

// ===================================
// 11. 정리 예제
// ===================================

console.log("=== 배열 복사 ===");
let original = [1, 2, 3];
let copied = original.slice();
copied.push(4);
console.log(`original: ${original}`); // original: 1,2,3
console.log(`copied: ${copied}`); // copied: 1,2,3,4

console.log("=== 객체 복사 ===");
let book1 = { title: "JavaScript", pages: 300 };
let book2 = cloneObject(book1);
book2.pages = 400;
console.log(book1); // { title: 'JavaScript', pages: 300 }
console.log(book2); // { title: 'JavaScript', pages: 400 }
