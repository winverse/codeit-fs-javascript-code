// ===================================
// 1. 문자열 길이: length 프로퍼티
// ===================================

let myEmail = "hello@naver.com";

console.log(myEmail.length); // 15

let greeting = "Hello World";

console.log(greeting.length); // 11 (공백 포함)

let koreanText = "안녕하세요";

console.log(koreanText.length); // 5

// ===================================
// 2. 문자 하나씩 접근하기
// ===================================

// 대괄호 표기법
let fruit = "banana";

console.log(fruit[0]); // 'b'
console.log(fruit[1]); // 'a'
console.log(fruit[5]); // 'a'

// charAt() 메소드
console.log(fruit.charAt(0)); // 'b'
console.log(fruit.charAt(1)); // 'a'
console.log(fruit.charAt(5)); // 'a'

// 차이점
let text = "apple";

console.log(text[10]); // undefined (인덱스 초과)
console.log(text.charAt(10)); // '' (빈 문자열)

// ===================================
// 3. 문자 찾기: indexOf(), lastIndexOf()
// ===================================

// indexOf() - 앞에서부터 찾기
let email = "student@school.edu";

console.log(email.indexOf("@")); // 7
console.log(email.indexOf("school")); // 8
console.log(email.indexOf("o")); // 9 (첫 번째 'o')

// lastIndexOf() - 뒤에서부터 찾기
console.log(email.lastIndexOf("o")); // 10 (마지막 'o')
console.log(email.lastIndexOf(".")); // 14

// 찾지 못했을 때
let jsText = "JavaScript";

console.log(jsText.indexOf("Python")); // -1 (찾지 못함)
console.log(jsText.indexOf("z")); // -1

// 실전 활용
let url = "https://www.example.com";

// 프로토콜 확인
if (url.indexOf("https") === 0) {
  console.log("보안 연결입니다"); // 보안 연결입니다
}

// 이메일 유효성 검사
let validEmail = "user@example.com";
if (validEmail.indexOf("@") !== -1) {
  console.log("유효한 이메일 형식입니다"); // 유효한 이메일 형식입니다
}

// ===================================
// 4. 대소문자 변환
// ===================================

// toUpperCase() - 대문자로 변환
let message = "Hello World";

console.log(message.toUpperCase()); // 'HELLO WORLD'

// toLowerCase() - 소문자로 변환
console.log(message.toLowerCase()); // 'hello world'

// 실전 활용 - 대소문자 구분 없이 비교
let userInput = "YES";
let answer = "yes";

if (userInput.toLowerCase() === answer.toLowerCase()) {
  console.log("정답입니다!"); // 정답입니다!
}

// URL 정규화
let upperUrl = "HTTPS://WWW.EXAMPLE.COM";
let normalizedUrl = upperUrl.toLowerCase();
console.log(normalizedUrl); // 'https://www.example.com'

// ===================================
// 5. 공백 제거: trim()
// ===================================

let username = "   admin   ";

console.log(username); // '   admin   '
console.log(username.trim()); // 'admin'
console.log(username.length); // 11
console.log(username.trim().length); // 5

// 주의: 중간 공백은 제거하지 않음
let spacedText = "   Hello   World   ";

console.log(spacedText.trim()); // 'Hello   World'

// 실전 활용 - 사용자 입력 처리
let emailInput = "  hello@example.com  ";
let cleanEmail = emailInput.trim();

console.log(cleanEmail); // 'hello@example.com'

// 폼 유효성 검사
let password = "   ";
if (password.trim() === "") {
  console.log("비밀번호를 입력해주세요"); // 비밀번호를 입력해주세요
}

// ===================================
// 6. 부분 문자열 추출: slice()
// ===================================

// 기본 사용법
let sentence = "JavaScript is fun";

console.log(sentence.slice(0, 10)); // 'JavaScript' (0~9번 인덱스)
console.log(sentence.slice(11, 13)); // 'is' (11~12번 인덱스)

// 끝 인덱스 생략
console.log(sentence.slice(11)); // 'is fun'
console.log(sentence.slice(0)); // 'JavaScript is fun' (전체)

// 음수 인덱스
console.log(sentence.slice(-3)); // 'fun' (끝에서 3글자)
console.log(sentence.slice(-10, -7)); // 'ipt' (끝에서 10~7번째)

// 파라미터 생략
let original = "Hello";
let copy = original.slice();

console.log(copy); // 'Hello'

// 실전 활용 - 파일 확장자 추출
let filename = "document.pdf";
let dotIndex = filename.lastIndexOf(".");
let extension = filename.slice(dotIndex);
console.log(extension); // '.pdf'

// 이메일 도메인 추출
let userEmail = "user@example.com";
let atIndex = userEmail.indexOf("@");
let domain = userEmail.slice(atIndex + 1);
console.log(domain); // 'example.com'

// 전화번호 포맷팅
let phone = "01012345678";
let formatted =
  phone.slice(0, 3) + "-" + phone.slice(3, 7) + "-" + phone.slice(7);
console.log(formatted); // '010-1234-5678'

// ===================================
// 7. 종합 예제 - 이메일 검증
// ===================================

function validateEmail(email) {
  // 공백 제거
  email = email.trim();

  // @ 포함 여부
  if (email.indexOf("@") === -1) {
    return false;
  }

  // . 포함 여부
  if (email.indexOf(".") === -1) {
    return false;
  }

  return true;
}

console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("invalid-email")); // false

// ===================================
// 8. 종합 예제 - 문자열 정보 출력
// ===================================

let infoText = "Hello JavaScript";

console.log(`길이: ${infoText.length}`); // 길이: 16
console.log(`첫 글자: ${infoText.charAt(0)}`); // 첫 글자: H
console.log(`마지막 글자: ${infoText.charAt(infoText.length - 1)}`); // 마지막 글자: t
console.log(`대문자: ${infoText.toUpperCase()}`); // 대문자: HELLO JAVASCRIPT
console.log(`소문자: ${infoText.toLowerCase()}`); // 소문자: hello javascript
console.log(`앞 5글자: ${infoText.slice(0, 5)}`); // 앞 5글자: Hello

// ===================================
// 9. 주의사항 - 문자열은 변경 불가능
// ===================================

let immutableText = "hello";
immutableText.toUpperCase();
console.log(immutableText); // 'hello' (변하지 않음)

let upper = immutableText.toUpperCase();
console.log(upper); // 'HELLO' (새 문자열)
