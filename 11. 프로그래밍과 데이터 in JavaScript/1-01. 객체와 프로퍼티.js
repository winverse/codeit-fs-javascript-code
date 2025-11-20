// 객체 생성하기
{
  manufacturer: 'Apple',
  modelName: 'MacBook Pro',
  releaseYear: 2023,
  isLaptop: true
}

// 프로퍼티 이름 (따옴표 사용)
{
  'serial-number': 'ABC-123-XYZ', // 하이픈 포함
  'last-update-date': '2025-11-12' // 하이픈 포함
}

// 프로퍼티 값 (객체 포함)
{
  manufacturer: 'Apple',
  modelName: 'MacBook Pro',
  mainboard: {
    cpu: 'M3 Pro',
    ram: '36GB'
  }
}

// typeof 연산자
const myComputer = {
  manufacturer: 'Apple',
  modelName: 'MacBook Pro'
};

console.log(typeof myComputer); // "object"
