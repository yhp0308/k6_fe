// 자바스크립트 데이터 타입
// 기본 타입(const: 안바뀜, let: 바꿀 수 있음)
let n1 = 10;            // 정수
let n2 = 10.5;          // 실수
let s1 = "안녕하세요.";  // 문자열

console.log("정수: ", n1);
console.log("실수: ", n2);
console.log("문자열: ", s1);

// 문자열 순회
console.log("문자열 for in")
for(let i in s1) { // in을 사용하여 key(index)값이 나옴
    console.log("문자열: ", s1[i]);
}

console.log("문자열 for of")
for(let c of s1) { // 해당 값을 가져옴
    console.log("문자열: ", c);
}

// 배열
// tailing 쉼표 사용가능(마지막에 아무 의미 없이 ,추가 가능)
let arr = ['🍎', 1, '🥕', 2, '🍌', 3,];
console.log("배열: ", arr);
console.log("배열의 요소 접근 arr[1]: ", arr[1]);

// 배열 순회
console.log("배열 for in")
for(let i in arr) {
    console.log("배열: ", arr[i]);
}

console.log("배열 for of")
for(let c of arr) {
    console.log("배열: ", c);
}

//배열 map 함수
console.log("배열 map 함수") ;

// arr2 = arr.map(v => {
//     console.log("map => v :", v) ;

//     return v+ "🤞";
// }) ;
// console.log("arr2 = " , arr2);

//콜백의 인수가 1개인 경우는 () 생략가능
//콜백의 바디에 실행문이 없고 return문만 있으면 ()와 return 생략 가능

arr2 = arr.map(v => v+ "🤞" ); // 이 코드 많이 봄
console.log("arr2 = " , arr2);

// 오브젝트
let obj = {'🍎': 1, '🥕': 2, '🍌': 3,}; 
console.log("오브젝트: ", obj);
console.log("오브젝트 요소 접근 obj['🍎']: ", obj['🍎']);

// 오브젝트 순회
console.log("오브젝트 for in")
for(let i in obj) {
    console.log("오브젝트: ", obj[i]);
}

console.log("오브젝트 for of")
for(let c of Object.entries(obj)) { 
    console.log("오브젝트: ", c); // [key, value]값을 쌍으로 동시에 가져옴
    console.log("오브젝트 키: ", c[0]);
    console.log("오브젝트 값: ", c[1]);
}

for(let [k,v] of Object.entries(obj)) {  // 구조 분해
    console.log("오브젝트 키: ", k);
    console.log("오브젝트 값: ", v);
}