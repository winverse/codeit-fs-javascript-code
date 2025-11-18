// 2-07. return과 console.log의 차이

// 1. 콘솔에 인사말을 '출력'하는 함수
function printGreeting(name) {
  console.log(name + "님, 안녕하세요!");
}

// 2. 인사말을 '반환'하는 함수
function getGreeting(name) {
  return name + "님, 안녕하세요!";
}

// Case 1: 함수를 그냥 호출하기
printGreeting("코드잇"); // 콘솔에 "코드잇님, 안녕하세요!"가 출력됨
getGreeting("자바스크립트"); // 아무 일도 일어나지 않음

// ---

// Case 2: 함수의 결과를 변수에 저장하기
const printResult = printGreeting("코드잇");
console.log(printResult); // undefined

const getResult = getGreeting("자바스크립트");
console.log(getResult); // "자바스크립트님, 안녕하세요!"

// ---

// Case 3: console.log로 함수 호출 감싸기
// printGreeting 함수는 return 값이 undefined 이다.
console.log(printGreeting("코드잇"));

// getGreeting 함수는 return 값이 문자열이다.
console.log(getGreeting("자바스크립트"));
