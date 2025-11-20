// ===== 1. 배열 양 끝 요소를 다루는 간편한 메소드 =====

// ===== 2. 요소 삭제 메소드 =====

// 2-1. shift() - 첫 요소 삭제
let fruits = ["사과", "바나나", "포도", "딸기"];

fruits.shift();
console.log(fruits); // ['바나나', '포도', '딸기']

// 반환값
let fruits2 = ["사과", "바나나", "포도", "딸기"];

let firstFruit = fruits2.shift();
console.log(firstFruit); // '사과'
console.log(fruits2); // ['바나나', '포도', '딸기']

// 2-2. pop() - 마지막 요소 삭제
let fruits3 = ["사과", "바나나", "포도", "딸기"];

fruits3.pop();
console.log(fruits3); // ['사과', '바나나', '포도']

// 반환값
let fruits4 = ["사과", "바나나", "포도", "딸기"];

let lastFruit = fruits4.pop();
console.log(lastFruit); // '딸기'
console.log(fruits4); // ['사과', '바나나', '포도']

// ===== 3. 요소 추가 메소드 =====

// 3-1. unshift() - 맨 앞에 요소 추가
let fruits5 = ["바나나", "포도", "딸기"];

fruits5.unshift("사과");
console.log(fruits5); // ['사과', '바나나', '포도', '딸기']

// 여러 요소 추가
let fruits6 = ["포도", "딸기"];

fruits6.unshift("사과", "바나나");
console.log(fruits6); // ['사과', '바나나', '포도', '딸기']

// 반환값
let fruits7 = ["바나나", "포도"];

let newLength = fruits7.unshift("사과");
console.log(newLength); // 3
console.log(fruits7); // ['사과', '바나나', '포도']

// 3-2. push() - 맨 뒤에 요소 추가
let fruits8 = ["사과", "바나나", "포도"];

fruits8.push("딸기");
console.log(fruits8); // ['사과', '바나나', '포도', '딸기']

// 여러 요소 추가
let fruits9 = ["사과", "바나나"];

fruits9.push("포도", "딸기", "수박");
console.log(fruits9); // ['사과', '바나나', '포도', '딸기', '수박']

// 반환값
let fruits10 = ["사과", "바나나"];

let newLength2 = fruits10.push("포도");
console.log(newLength2); // 3
console.log(fruits10); // ['사과', '바나나', '포도']

// ===== 5. 실전 활용 예제 =====

// 5-1. 큐(Queue) 구현
let queue = [];

// 요소 추가 (enqueue)
queue.push("첫번째");
queue.push("두번째");
queue.push("세번째");

console.log(queue); // ['첫번째', '두번째', '세번째']

// 요소 제거 (dequeue)
console.log(queue.shift()); // '첫번째'
console.log(queue.shift()); // '두번째'
console.log(queue); // ['세번째']

// 5-2. 스택(Stack) 구현
let stack = [];

// 요소 추가 (push)
stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack); // ['A', 'B', 'C']

// 요소 제거 (pop)
console.log(stack.pop()); // 'C'
console.log(stack.pop()); // 'B'
console.log(stack); // ['A']

// 5-3. 할 일 목록 관리
let todoList = ["공부하기", "운동하기"];

// 새 할 일 추가
todoList.push("책 읽기");
console.log(todoList); // ['공부하기', '운동하기', '책 읽기']

// 급한 일 맨 앞에 추가
todoList.unshift("긴급 회의");
console.log(todoList); // ['긴급 회의', '공부하기', '운동하기', '책 읽기']

// 첫 번째 할 일 완료
let completed = todoList.shift();
console.log(`완료: ${completed}`); // 완료: 긴급 회의
console.log(todoList); // ['공부하기', '운동하기', '책 읽기']

// ===== 6. splice()와 비교 =====
let arr = ["A", "B", "C"];

// splice로 맨 앞 삭제
arr.splice(0, 1);

// shift로 맨 앞 삭제 (더 간결!)
arr.shift();
