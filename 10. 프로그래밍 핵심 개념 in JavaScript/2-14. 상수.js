// 2-14. 상수(Constant)

const TAX_RATE = 0.1; // 부가세율 10%

let itemPrice = 10000; // 상품 가격
let tax = itemPrice * TAX_RATE; // 부가세 계산

console.log(`상품 가격은 ${itemPrice}원, 부가세는 ${tax}원 입니다.`);

// ---

// const TAX_RATE_REASSIGN = 0.1;
// TAX_RATE_REASSIGN = 0.2; // Error: Assignment to constant variable.

// ---

// const SHIPPING_FEE; // Error: Missing initializer in const declaration
// SHIPPING_FEE = 3000;
