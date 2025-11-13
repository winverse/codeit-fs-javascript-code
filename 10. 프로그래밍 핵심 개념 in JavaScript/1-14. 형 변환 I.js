// 1-14. 형 변환(Type Conversion) I 실습

// --- String()으로 변환 ---
console.log('--- String()으로 변환 ---');
let birthYear = 1999;
console.log(birthYear);
console.log(String(birthYear));

let isAdult = true;
console.log(isAdult);
console.log(String(isAdult));


// --- Number()로 변환 ---
console.log('\n--- Number()로 변환 ---');
let age = '25';
console.log(age);
console.log(Number(age));

let isWorking = true;
console.log(isWorking);
console.log(Number(isWorking));

let isStudent = false;
console.log(isStudent);
console.log(Number(isStudent));

let userName = '김코딩';
console.log(Number(userName));


// --- Boolean()으로 변환 ---
console.log('\n--- Boolean()으로 변환 ---');
// Truthy 값
console.log(Boolean('hello'));
console.log(Boolean(123));
console.log(Boolean(-1));

// Falsy 값
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
