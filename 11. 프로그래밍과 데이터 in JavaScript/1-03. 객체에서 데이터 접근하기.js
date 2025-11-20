// 접근할 객체
const myComputer = {
  manufacturer: 'Apple',
  modelName: 'MacBook Pro',
  releaseYear: 2023,
  'serial-number': 'ABC-123-XYZ',
  mainboard: {
    cpu: 'M3 Pro',
    ram: '36GB'
  }
};

// 점 표기법 (objectName.propertyName)
console.log(myComputer.modelName); // 'MacBook Pro'

// 대괄호 표기법 (objectName['propertyName'])
console.log(myComputer['releaseYear']); // 2023

// 장점 1: 규칙에서 벗어난 프로퍼티 이름 접근
console.log(myComputer['serial-number']); // 'ABC-123-XYZ'

// 장점 2: 변수를 이용한 동적 접근
const spec = 'ram';
console.log(myComputer.mainboard[spec]); // '36GB'

// 점 표기법으로 중첩 객체 접근
console.log(myComputer.mainboard.cpu); // 'M3 Pro'

// 대괄호 표기법과 혼합하여 접근
console.log(myComputer['mainboard']['ram']); // '36GB'

// 존재하지 않는 프로퍼티
console.log(myComputer.gpu); // undefined
