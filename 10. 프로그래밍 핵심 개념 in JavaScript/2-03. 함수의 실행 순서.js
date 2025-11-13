// 2-03. 함수의 실행 순서

// 1. takeOrder 함수 정의 (레시피 작성)
function takeOrder() {
  console.log('주문 접수 완료!');
}

// 2. 프로그램 시작
console.log('레스토랑 오픈');

// 3. takeOrder 함수 호출 (요리 시작)
takeOrder();

// 4. 프로그램 종료
console.log('레스토랑 마감');


// ---


// makeBurger 함수 정의
function makeBurger(type) {
  return type + ' 버거 완료!';
}

console.log('버거 만들기 시작');

const finishedBurger = makeBurger('새우');
console.log(finishedBurger);

console.log('버거 만들기 끝');


// ---


function getPrice(menu) {
  if (menu === '불고기 버거') {
    return 4500;
  } else if (menu === '치즈 버거') {
    return 4000;
  } else {
    return 3000; // 기본 버거
  }
}

const totalPrice = getPrice('불고기 버거') + getPrice('치즈 버거');
console.log(`총 주문 금액: ${totalPrice}원`);
