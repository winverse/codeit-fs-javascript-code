// 1-03. 문자열 기본 실습

// --- 문자열 만들기 ---
console.log('--- 문자열 만들기 ---');
console.log('Hello, World!');
console.log("I love JavaScript!");

// console.log('혼합해서 사용하면?); // SyntaxError: Invalid or unexpected token


// --- 따옴표 안에 따옴표 사용하기 ---
console.log('\n--- 따옴표 안에 따옴표 사용하기 ---');
// 1. 다른 종류의 따옴표로 감싸기
console.log("그가 말했습니다. '안녕!'");
console.log('자바스크립트의 별명은 "JS"입니다.');

// 2. 이스케이프 시퀀스(`\`) 사용하기
console.log('그가 말했습니다. \'안녕!\'');


// --- 문자열 연산 ---
console.log('\n--- 문자열 연산 ---');
// 문자열 연결 (+)
console.log('Hello, ' + 'World!');

let name = '김코딩';
let message = '안녕하세요, ' + name + '님!';
console.log(message);

// 숫자처럼 보이는 문자열
console.log(100 + 50);
console.log('100' + '50');
