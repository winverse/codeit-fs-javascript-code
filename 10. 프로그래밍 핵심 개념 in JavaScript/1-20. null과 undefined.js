// 1-20. null과 undefined 실습

// --- undefined ---
console.log('--- undefined ---');
let name;
console.log(name);


// --- null ---
console.log('\n--- null ---');
let nickname = '김코딩';
console.log(nickname);

// 사용자가 닉네임을 삭제함
nickname = null;
console.log(nickname)


// --- null vs undefined ---
console.log('\n--- null vs undefined ---');
console.log(typeof undefined);
console.log(typeof null);

console.log(null == undefined);
console.log(null === undefined);
