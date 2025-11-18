// 2-12. 변수의 스코프(Scope)

// 지역 스코프
function showLocalPrice() {
  // 상점(지역)의 자체 할인 가격
  let price = 2000;
  console.log(`상점 가격: ${price}원`);
}

showLocalPrice(); // "상점 가격: 2000원" 출력

// console.log(price); // Error: price is not defined

// ---

// 전역 스코프
// 본사(전역)의 정가
let price = 3000;

function showGlobalPrice() {
  console.log(`본사 가격: ${price}원`);
}

showGlobalPrice(); // "본사 가격: 3000원" 출력
console.log(`전체 정가: ${price}원`); // "전체 정가: 3000원" 출력

// ---

// 스코프 체인
let priceChain = 3000; // 전역 변수 (본사 정가)

function showStorePrice() {
  let priceChain = 2000; // 지역 변수 (상점 할인가)
  console.log(`상점 할인가: ${priceChain}원`);
}

showStorePrice(); // "상점 할인가: 2000원" 출력
console.log(`본사 정가: ${priceChain}원`); // "본사 정가: 3000원" 출력
