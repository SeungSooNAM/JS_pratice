'use strict';

//2. 변수
//let (added in ES6)

let globalName = 'global Name'; // global 변수는 전역 변수

{
    let name = 'NSS';
    console.log(name);
    let age = 29;
    console.log(age)
}

console.log(name);
console.log(globalName);

//var ES6 부터는 그냥 let을 쓰자
// 호이스팅 : 어디서 선언했냐에 상관없이 선언을 제일 위로 끌어올려준다.
// var 은 {}이 없다.

//3. constants 상수
// 값을 변경 할 수 없는 것 const
// immutable type
const daysInweek = 7;
const maxNumber = 5;

//4. 변수 타입
// primittive type

// JS는 다이나믹이기떄문에 자바처럼 변수 선언을 편하게 해도된다?
//${typeof } -> 타입 보는것
// bigInt = 숫자뒤에 n 을 넣으면 된다. (chrome, fireFox만 적용됨)


//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(`value: ` + helloBob + `type: ` + typeof helloBob);
// ` → back tick?

// null 과 undifind 차이는 null은 값이고 undifind는 값을 찾을 수 없다.
//symboll은 .dsscription을 사용해야 나온다.

//5. 다이나믹 타입 
let text = 'hello';
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text ='7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

//imutable
//mutable