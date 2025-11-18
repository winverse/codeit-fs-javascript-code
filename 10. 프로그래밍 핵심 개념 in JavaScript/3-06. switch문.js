// 3-06. switch문

// switch문 - 기본 구조
// 이 코드는 설명용이며, 직접 실행되지 않습니다.
/*
switch (비교할_값) {
  case 값1:
    // 비교할_값이 값1과 일치할 때 실행될 코드
    break; // switch문을 빠져나옴
  case 값2:
    // 비교할_값이 값2와 일치할 때 실행될 코드
    break;
  default:
    // 비교할_값이 어떤 case와도 일치하지 않을 때 실행될 코드
    // default는 선택 사항이며, break가 필요 없습니다.
}
*/

// ---

// switch문 - 요일에 따른 활동 추천 예제
let day = 3; // 1:월, 2:화, 3:수, 4:목, 5:금, 6:토, 7:일

switch (day) {
  case 1:
    console.log("새로운 한 주를 시작해 보세요!");
    break;
  case 2:
    console.log("화요일은 운동하기 좋은 날!");
    break;
  case 3:
    console.log("수요일엔 문화생활 어떠세요?");
    break;
  case 4:
    console.log("목요일은 자기계발의 날!");
    break;
  case 5:
    console.log("불금! 친구들과 약속을 잡아보세요!");
    break;
  case 6:
  case 7:
    console.log("주말에는 푹 쉬세요!");
    break;
  default:
    console.log("유효하지 않은 요일입니다.");
}
