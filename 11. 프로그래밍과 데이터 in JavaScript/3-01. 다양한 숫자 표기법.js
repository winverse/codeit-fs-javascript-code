// ===== 1. 큰 숫자 표현하기 =====
let bigNumber = 10000000000;

// ===== 2. 지수 표기법 (Exponential Notation) =====

// 2-1. 기본 개념
let billionaire = 10000000000;
let myNumber = 1e10; // 지수 표기법

console.log(billionaire); // 10000000000
console.log(myNumber); // 10000000000
console.log(billionaire === myNumber); // true

// 2-2. 다양한 활용
console.log(25e5 === 2500000); // true (25 × 10⁵)
console.log(5.3e3 === 5300); // true (5.3 × 10³)
console.log(-6.1e8 === -610000000); // true (-6.1 × 10⁸)

// 2-3. 작은 소수 표현
console.log(16e-5 === 0.00016); // true (16 ÷ 10⁵)
console.log(3.5e-3 === 0.0035); // true (3.5 ÷ 10³)
console.log(-9.1e-5 === -0.000091); // true (-9.1 ÷ 10⁵)

// 실전 예제
let lightSpeed = 3e8; // 빛의 속도: 300,000,000 m/s
let electronMass = 9.1e-31; // 전자 질량: 0.00000...091 kg

console.log(`빛의 속도: ${lightSpeed} m/s`);
console.log(`전자 질량: ${electronMass} kg`);

// ===== 3. 16진수 표기법 (Hexadecimal) =====
let hex1 = 0xff; // 255
let hex2 = 0xff; // 255 (대소문자 구분 없음)
let hex3 = 0x10; // 16

console.log(hex1); // 255
console.log(hex2); // 255
console.log(hex3); // 16

// 활용 예시: 색상 코드
let red = 0xff0000; // RGB: (255, 0, 0)
let green = 0x00ff00; // RGB: (0, 255, 0)
let blue = 0x0000ff; // RGB: (0, 0, 255)

console.log(red); // 16711680
console.log(green); // 65280
console.log(blue); // 255

// ===== 4. 8진수 표기법 (Octal) =====
let octal1 = 0o377; // 255
let octal2 = 0o10; // 8
let octal3 = 0o100; // 64

console.log(octal1); // 255
console.log(octal2); // 8
console.log(octal3); // 64

// ===== 5. 2진수 표기법 (Binary) =====
let binary1 = 0b11111111; // 255
let binary2 = 0b1010; // 10
let binary3 = 0b1111; // 15

console.log(binary1); // 255
console.log(binary2); // 10
console.log(binary3); // 15

// 실전 예시: 권한 설정
let readOnly = 0b100; // 4 (읽기만)
let readWrite = 0b110; // 6 (읽기 + 쓰기)
let fullPermission = 0b111; // 7 (읽기 + 쓰기 + 실행)

console.log(readOnly); // 4
console.log(readWrite); // 6
console.log(fullPermission); // 7

// ===== 6. 표기법 비교 =====
let decimal = 255; // 10진수
let hex = 0xff; // 16진수
let octal = 0o377; // 8진수
let binary = 0b11111111; // 2진수

console.log(decimal); // 255
console.log(hex); // 255
console.log(octal); // 255
console.log(binary); // 255

console.log(decimal === hex); // true
console.log(hex === octal); // true
console.log(octal === binary); // true
