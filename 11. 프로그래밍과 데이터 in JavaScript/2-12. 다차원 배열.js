// ===== 1. 배열 안에 배열 =====
let twoDimensional = [
  [1, 2],
  [3, 4],
];

// ===== 2. 다차원 배열의 요소 접근 =====
let twoDimensional2 = [
  [1, 2],
  [3, 4],
];

// 첫 번째 배열 접근
console.log(twoDimensional2[0]); // [1, 2]

// 첫 번째 배열의 두 번째 요소 접근
console.log(twoDimensional2[0][1]); // 2

// 두 번째 배열의 첫 번째 요소 접근
console.log(twoDimensional2[1][0]); // 3

// ===== 3. 다차원 배열 활용 예제 =====

// 3-1. 좌석 배치도
let classroom = [
  ["김철수", "이영희", "박민수"],
  ["최지현", "정하늘", "강서연"],
  ["윤준호", "한소희", "오성민"],
];

// 2열 3번째 학생
console.log(classroom[1][2]); // '강서연'

// 첫 번째 줄 전체
console.log(classroom[0]); // ['김철수', '이영희', '박민수']

// 3-2. 아파트 우편함
let mailbox = [
  [101, 201, 301, 401, 501],
  [102, 202, 302, 402, 502],
  [103, 203, 303, 403, 503],
  [104, 204, 304, 404, 504],
];

// 3호선 5층
console.log(mailbox[2][4]); // 503

// 1호선 전체
console.log(mailbox[0]); // [101, 201, 301, 401, 501]

// 3-3. 주차장 구조
let parkingLot = [
  ["비어있음", "비어있음", "SUV", "세단"],
  ["비어있음", "트럭", "비어있음", "비어있음"],
  ["세단", "비어있음", "SUV", "세단"],
];

// B1층 3번 자리
console.log(parkingLot[0][2]); // 'SUV'

// B3층 1번 자리에 차 주차
parkingLot[2][0] = "미니밴";
console.log(parkingLot[2][0]); // '미니밴'

// 3-4. 게임 보드판
let ticTacToe = [
  ["O", "X", "O"],
  ["X", "O", "X"],
  [" ", " ", "O"],
];

// 3행 2열 확인
console.log(ticTacToe[2][1]); // ' '

// 3행 2열에 X 표시
ticTacToe[2][1] = "X";
console.log(ticTacToe[2]);
// [' ', 'X', 'O']

// ===== 4. 다차원 배열과 반복문 =====
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// 출력: 1 2 3 4 5 6 7 8 9

// for...of 사용
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix2) {
  for (let num of row) {
    console.log(num);
  }
}

// 출력: 1 2 3 4 5 6 7 8 9

// ===== 5. 다차원 배열 vs 객체 =====

// 배열 (위치 중심)
let classroom2 = [
  ["김철수", "이영희", "박민수"], // 1열
  ["최지현", "정하늘", "강서연"], // 2열
  ["윤준호", "한소희", "오성민"], // 3열
];

// 위치로 접근: 2열 3번
console.log(classroom2[1][2]);

// 객체 (의미 중심)
let classroom3 = {
  창가: ["김철수", "이영희", "박민수"],
  중간: ["최지현", "정하늘", "강서연"],
  복도: ["윤준호", "한소희", "오성민"],
};

// 의미로 접근: 창가 3번
console.log(classroom3["창가"][2]);

// ===== 6. 3차원 배열 =====
let building = [
  // 1층
  [
    [101, 102, 103], // A동
    [104, 105, 106], // B동
  ],
  // 2층
  [
    [201, 202, 203], // A동
    [204, 205, 206], // B동
  ],
];

// 2층 B동 3호
console.log(building[1][1][2]); // 206
