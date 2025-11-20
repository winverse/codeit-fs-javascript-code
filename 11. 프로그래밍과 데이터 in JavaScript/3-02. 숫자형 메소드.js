// ===== 2. toFixed() - 소수점 자리수 고정 =====

// 2-1. 기본 사용법
let price = 4.5678;

console.log(price.toFixed(2)); // '4.57' (반올림)
console.log(price.toFixed(1)); // '4.6'
console.log(price.toFixed(0)); // '5'

// 2-2. 부족한 자릿수는 0으로 채움
let score = 85.5;

console.log(score.toFixed(5)); // '85.50000'
console.log(score.toFixed(3)); // '85.500'

// 2-3. 주의: 반환값은 문자열!
let num = 3.14159;

console.log(typeof num.toFixed(2)); // 'string'
console.log(num.toFixed(2) + 1); // '3.141' (문자열 연결!)

// 2-4. 숫자로 변환하기
let pi = 3.14159;
let fixed = pi.toFixed(2); // '3.14' (문자열)

// 방법 1: Number() 함수
console.log(Number(fixed)); // 3.14 (숫자)

// 방법 2: 단항 덧셈 연산자
console.log(+fixed); // 3.14 (숫자)

// 숫자 연산 가능
console.log(Number(fixed) + 1); // 4.14
console.log(+fixed + 1); // 4.14

// ===== 3. toString() - 진법 변환 =====

// 3-1. 다양한 진법으로 변환
let num2 = 255;

console.log(num2.toString(2)); // '11111111' (2진수)
console.log(num2.toString(8)); // '377' (8진수)
console.log(num2.toString(16)); // 'ff' (16진수)
console.log(num2.toString(10)); // '255' (10진수, 기본값)

// 3-2. 실전 활용: 색상 코드
let red = 255;
let green = 165;
let blue = 0;

// RGB를 16진수로 변환하여 색상 코드 생성
let colorCode =
  "#" +
  red.toString(16).padStart(2, "0") +
  green.toString(16).padStart(2, "0") +
  blue.toString(16).padStart(2, "0");

console.log(colorCode); // '#ffa500' (오렌지색)

// 3-3. 직접 숫자에 메소드 호출
// 괄호로 감싸거나
console.log((255).toString(16)); // 'ff'
console.log((42).toString(2)); // '101010'

// 점 두 개 사용
console.log((255).toString(16)); // 'ff'
console.log((42).toString(2)); // '101010'

// ===== 4. 실전 예제 =====

// 4-1. 가격 표시
let productPrice = 12345.678;

// 소수점 두 자리로 고정
let displayPrice = Number(productPrice.toFixed(2));
console.log(`₩${displayPrice.toLocaleString()}`);

// 4-2. 백분율 계산
let ratio = 0.8547;

let percentage = (ratio * 100).toFixed(1);
console.log(`${percentage}%`); // '85.5%'

// 숫자로 사용
let numPercentage = +percentage;
console.log(numPercentage + 10); // 95.5

// 4-3. 평점 표시
let rating = 4.2567;

console.log(`평점: ${rating.toFixed(1)}점`);

// 4-4. 파일 크기 표시
let bytes = 1536000;
let megabytes = bytes / (1024 * 1024);

console.log(`${megabytes.toFixed(2)}MB`);
