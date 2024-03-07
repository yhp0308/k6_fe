//자바스크립트 데이터 타입
//기본 타입 
let n1 = 10 ;             //정수
let n2 = 10.5 ;           //실수
let s1 = "안녕하세요." ;   //문자열

console.log("정수 : ", n1) ;
console.log("실수 : ", n2) ;
console.log("문자열 : ", s1) ;

//문자열 순회
// for(let i in s1) { //여러 개의 키값만 가져오는 것
//   console.log("문자열 :", s1[i]) ;
// }
// for(let c of s1) { //파이썬의 for in
//   console.log("문자열 :", c) ;
// }

//배열 
//tailing 쉼표 사용가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3 ,] ;
console.log("배열 :", arr) ;
console.log("배열의 요소 접근 :" , arr[1]) ;

//배열 순회
console.log("배열 for in") ;
for(let i in arr) {
  console.log("배열 :", arr[i]) ;
}
console.log("배열 for of") ;
for(let c of arr) {
  console.log("배열 :", c) ;
}

//arr1 만들기
let arr1 = [0,0,0,0,0,0,] ;
for(let i in arr) {
    arr1[i] = arr[i];
}
console.log ("반복문 첨자로 arr1 = " , arr1);


//arr2 만들기
let arr2 = [] ;
console.log ("arr2 = " , arr2); //undefined = null 같은 개념이다.

//반복문으로
for (let item of arr) {
    arr2.push(item); //push는 갖다 넣는것. python에서 append 같은 것.
}
console.log("반복문으로 arr2 = " , arr2) ;

//똑같은 for in 문
for (let i in arr) {
    arr2.push(arr[i]);
}
console.log("반복문으로 (for in) arr2 = ", arr2)
//배열 map함수 
console.log("배열 map함수") ;
arr2 = arr.map((v) => {
    let s = v + '🩷' ;
    console.log(v, ',', s) ;

    return s ;
}); //이게 콜백 함수다.
// let arr2 = arr.map((v, i) => {
//   console.log("map=> v :" , v, "map=> i :" , i  ) ; 

//   return v+"👍" ;
// }) ;
console.log("map arr2 = ", arr2) ;

console.log("배열 map 함수 : 콜백")

// console.log("배열 map함수 : 콜백") ;
// 콜백의 인수가 1개인 경우는 () 생략가능
// 콜백의 body에 실행이 문이 없고 return문만 있으면 {}와 return 생략 가능
arr2 = arr.map(v => v + '🩷') ;
console.log("map arr2 = " , arr2)
// console.log("배열 map함수") ;

arr2 = arr.map((v, i) => v + '🩷' + i) ;
console.log("map arr2 = " , arr2) // i를 넣으니깐 인덱스 번호도 들어온다.

// arr2[1] = 30 ;
// console.log("arr1 = ", arr) ;
// console.log("arr2 = ", arr2) ;

//filter
let arr21 = [];
for(let item of arr) {
    if (isNaN(item)) arr21.push(item) ;
}

console.log("반복문 Filter arr21 = ", arr21)

//콜백함수로

arr2 = arr.filter((v) => isNaN(v) );
console.log("Filter arr21 = ", arr21)


// 오브젝트
// tailing 쉼표 사용가능
let obj = {'🍎': 1, '🥕': 2, '🍌':3 ,}; //오브젝트는 키와 값의 쌍으로 이뤄져있음.
console.log("오브젝트 :", obj) ;
console.log("오브젝트 요소 접근 :", obj['🍎']);

// 오브젝트 순회
console.log("오브젝트 for in") ;
for(let i in obj) {
  console.log("오브젝트 :", obj[i]) ;
}
console.log("오브젝트 for of") ;
for(let c of Object.entries(obj)) {
  console.log("오브젝트 :", c) ;
  console.log("오브젝트키 :", c[0]) ;
  console.log("오브젝트값 :", c[1]) ;
}

//구조분해 할당

for(let [k, v] of Object.entries(obj)) { 
  console.log("오브젝트키 :", k) ;
  console.log("오브젝트값 :", v) ;
}

console.log("오브젝트 키배열 :", Object.keys(obj)) ;
let arr3 = Object.keys(obj).map( k => k + obj[k]) ;
console.log("arr3 =", arr3);


// Map 과 Filter는 배열만 가능하다. 함수가 되면 배열로 바꿔야한다.
// list(tupl) - dict (Python) - 이걸 잘 해야한다.
// arr - obj (JavaScript)