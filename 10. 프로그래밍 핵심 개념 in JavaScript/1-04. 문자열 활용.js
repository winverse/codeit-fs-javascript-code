// 1-04. 문자열 활용 실습

// --- 문자열 길이 확인하기 (.length) ---
console.log('--- 문자열 길이 확인하기 (.length) ---');
let myStatus = 'Hello, World!';
console.log(myStatus.length);


// --- 문자열 일부만 가져오기 (.slice()) ---
console.log('\n--- 문자열 일부만 가져오기 (.slice()) ---');
// 0번 위치부터 5번 위치 전까지 잘라냅니다.
console.log(myStatus.slice(0, 5));

// 7번 위치부터 끝까지 잘라냅니다.
console.log(myStatus.slice(7));


// --- 대소문자 바꾸기 ---
console.log('\n--- 대소문자 바꾸기 ---');
console.log(myStatus.toUpperCase());
console.log(myStatus.toLowerCase());


// --- 특정 글자 찾기 ---
console.log('\n--- 특정 글자 찾기 ---');
console.log(myStatus.includes('Hello'));
console.log(myStatus.includes('Bye'));

console.log(myStatus.indexOf('World'));
console.log(myStatus.indexOf('Bye'));
