// ===== 1. 배열도 객체다 =====
let members = ["김철수", "이영희", "박민수", "최지은", "정다은"];

console.log(typeof members); // object

// ===== 2-1. length로 요소 개수 확인 =====
let members2 = ["김철수", "이영희", "박민수", "최지은", "정다은"];

console.log(members2.length); // 5

// ===== 2-2. 마지막 요소 접근하기 =====
let members3 = ["김철수", "이영희", "박민수", "최지은", "정다은"];

console.log(members3[members3.length - 1]); // '정다은'

// ===== 3-1. 특정 인덱스에 요소 추가 =====
let members4 = ["김철수", "이영희", "박민수"];

members4[3] = "최지은";
console.log(members4); // ['김철수', '이영희', '박민수', '최지은']

// ===== 3-2. 중간 인덱스 건너뛰기 =====
let members5 = ["김철수", "이영희", "박민수"];

members5[5] = "정다은";
console.log(members5); // ['김철수', '이영희', '박민수', empty × 2, '정다은']
console.log(members5.length); // 6

// ===== 4. 배열 요소 수정하기 =====
let members6 = ["김철수", "이영희", "박민수", "최지은"];

members6[1] = "이민수";
console.log(members6); // ['김철수', '이민수', '박민수', '최지은']

// ===== 5-1. delete 연산자 (권장하지 않음) =====
let members7 = ["김철수", "이영희", "박민수", "최지은"];

delete members7[2];
console.log(members7); // ['김철수', '이영희', empty, '최지은']
console.log(members7.length); // 4

// ===== 6. const로 선언한 배열 =====
const members8 = ["김철수", "이영희", "박민수"];

// 요소 수정 가능
members8[1] = "이민수";

// 요소 추가 가능
members8[3] = "최지은";

console.log(members8); // ['김철수', '이민수', '박민수', '최지은']

// 배열 자체를 재할당하는 것은 불가능
// members8 = []; // Error!
