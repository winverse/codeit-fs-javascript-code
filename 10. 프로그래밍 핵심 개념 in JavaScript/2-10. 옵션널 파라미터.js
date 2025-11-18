// 2-10. 옵셔널 파라미터

function printMenu(menu) {
  console.log(menu);
}

printMenu("아메리카노"); // '아메리카노' 출력
printMenu(); // undefined 출력

// ---

// size 파라미터에 'Regular'라는 기본값을 설정
function orderDrink(menu, size = "Regular") {
  console.log(`${menu} ${size} 사이즈로 주문 완료!`);
}

orderDrink("아메리카노", "Large");
orderDrink("카페라떼");

// ---

// 잘못된 예: 옵셔널 파라미터가 앞에 있는 경우
function orderDrinkWrong(size = "Regular", menu) {
  console.log(`${menu} ${size} 사이즈로 주문 완료!`);
}

orderDrinkWrong("아메리카노");

// ---

// 올바른 예:
function orderDrinkCorrect(menu, size = "Regular") {
  // ...
}
