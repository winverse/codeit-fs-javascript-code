// ===== 2-1. 현재 시간으로 생성 =====
let now = new Date();
console.log(now);

// ===== 2-2. 밀리초로 생성 =====
let date1 = new Date(1000);
console.log(date1);

// ===== 2-3. 문자열로 생성 =====
let date2 = new Date("2024-03-15");
let date3 = new Date("2024-03-15T14:30:00");

console.log(date2);
console.log(date3);

// ===== 2-4. 숫자 여러 개로 생성 =====
let date4 = new Date(2024, 2, 15, 14, 30, 45);
let date5 = new Date(2024, 2, 15);
let date6 = new Date(2024, 2);

console.log(date4); // 2024년 3월 15일 14시 30분 45초
console.log(date5); // 2024년 3월 15일 0시 0분 0초
console.log(date6); // 2024년 3월 1일 0시 0분 0초

// month는 0부터 시작
console.log(new Date(2024, 0, 1)); // 2024년 1월 1일
console.log(new Date(2024, 11, 25)); // 2024년 12월 25일

// ===== 3-1. getTime() - 타임스탬프 =====
let myBirthday = new Date(2000, 5, 15);
console.log(myBirthday.getTime());

// ===== 3-2. 시간 차이 계산 =====
let startDate = new Date(2024, 0, 1);
let endDate = new Date(2024, 11, 31);

let timeDiff = endDate.getTime() - startDate.getTime();

console.log(timeDiff + "ms");
console.log(timeDiff / 1000 + "초");
console.log(timeDiff / 1000 / 60 + "분");
console.log(timeDiff / 1000 / 60 / 60 + "시간");
console.log(timeDiff / 1000 / 60 / 60 / 24 + "일");

// ===== 3-3. 날짜 정보 가져오기 =====
let today = new Date(2024, 2, 15, 14, 30, 45, 500);

console.log(today.getFullYear()); // 2024 (년)
console.log(today.getMonth()); // 2 (월, 0부터 시작 → 3월)
console.log(today.getDate()); // 15 (일)
console.log(today.getDay()); // 5 (요일, 0:일요일 ~ 6:토요일 → 금요일)
console.log(today.getHours()); // 14 (시)
console.log(today.getMinutes()); // 30 (분)
console.log(today.getSeconds()); // 45 (초)
console.log(today.getMilliseconds()); // 500 (밀리초)

// ===== 3-4. 요일 확인 예제 =====
let someDay = new Date(2024, 11, 25);
let dayOfWeek = someDay.getDay();

if (dayOfWeek === 0) {
  console.log("일요일입니다.");
} else if (dayOfWeek === 6) {
  console.log("토요일입니다.");
} else {
  console.log("평일입니다.");
}

// ===== 4-1. D-Day 계산기 =====
let today2 = new Date();
let targetDate = new Date(2024, 11, 31);

let diff = targetDate.getTime() - today2.getTime();
let dDay = Math.ceil(diff / 1000 / 60 / 60 / 24);

console.log(`D-${dDay}`);

// ===== 4-2. 나이 계산 =====
let birthYear = 1995;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log(`나이: ${age}세`);
