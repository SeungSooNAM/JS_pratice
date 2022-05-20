//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2} `)

//2. numberic operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increment and decrement operators
let counter = 2; 
const preIncrement = ++counter;

console.log(preIncrement)
const postIncrement = counter ++;
//counter = counter + 1;

// or 연산자는 true나오면 멈춘다. ||
// 연산을 많이 하는 함수를 먼저 두지말라 비효율적이다.
// AND 연산자는 조건 둘다 맞아야 TRUE이다
//! not
//euqlity
 
// Conditional operators : if
//if, else if, else 
const name = 'NSS';
if(name === 'NSS'){
    console.log('Welcome, NSS');
} else if(name === 'coder'){
    console.log('You are amazing coder')
}else{
    console.log('unkwnon');
}

//9. Ternary operaor : ?
// condition ? value1 : value2;
console.log(name === 'SSN' ? 'yes' : 'no');

//Switch
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
        case 'Chrome':
        case 'Firefox':
            console.log('love you');
            break;
    default:
        console.log('same all!');
        break;
}

//반복문 
let i = 3;
while(1 > 0){
    console.log(`while: ${i}`)
    i--;
}
do{
    console.log(`do while : ${i}`)
}while( i > 0)

for(i = 3; i > 0; i++){
    console.log(`for: ${i}`)
}

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}