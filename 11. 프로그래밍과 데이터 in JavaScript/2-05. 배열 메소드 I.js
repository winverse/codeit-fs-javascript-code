// ===== 2-2. 요소 삭제하기 =====

// 특정 위치부터 끝까지 삭제
let fruits1 = ["사과", "바나나", "포도", "딸기", "수박"];
fruits1.splice(2);
console.log(fruits1); // ['사과', '바나나']

// 특정 개수만 삭제
let fruits2 = ["사과", "바나나", "포도", "딸기", "수박"];
fruits2.splice(1, 2);
console.log(fruits2); // ['사과', '딸기', '수박']

// 한 개만 삭제
let fruits3 = ["사과", "바나나", "포도", "딸기", "수박"];
fruits3.splice(2, 1);
console.log(fruits3); // ['사과', '바나나', '딸기', '수박']

// ===== 2-3. 요소 추가하기 =====
let fruits4 = ["사과", "바나나", "수박"];
fruits4.splice(2, 0, "포도", "딸기");
console.log(fruits4); // ['사과', '바나나', '포도', '딸기', '수박']

// ===== 2-4. 요소 교체하기 =====
let fruits5 = ["사과", "바나나", "포도", "딸기"];
fruits5.splice(1, 2, "망고", "키위");
console.log(fruits5); // ['사과', '망고', '키위', '딸기']

// ===== 2-5. 삭제된 요소 반환 =====
let fruits6 = ["사과", "바나나", "포도", "딸기", "수박"];
let removed = fruits6.splice(1, 3);
console.log(removed); // ['바나나', '포도', '딸기']
console.log(fruits6); // ['사과', '수박']

// ===== 3-1. 첫 요소 삭제 =====
let members1 = ["김철수", "이영희", "박민수", "최지은"];
members1.splice(0, 1);
console.log(members1); // ['이영희', '박민수', '최지은']

// ===== 3-2. 마지막 요소 삭제 =====
let members2 = ["김철수", "이영희", "박민수", "최지은"];
members2.splice(members2.length - 1, 1);
console.log(members2); // ['김철수', '이영희', '박민수']

// ===== 3-3. 첫 요소로 추가 =====
let members3 = ["이영희", "박민수", "최지은"];
members3.splice(0, 0, "김철수");
console.log(members3); // ['김철수', '이영희', '박민수', '최지은']

// ===== 3-4. 마지막 요소로 추가 =====
let members4 = ["김철수", "이영희", "박민수"];
members4.splice(members4.length, 0, "최지은");
console.log(members4); // ['김철수', '이영희', '박민수', '최지은']
