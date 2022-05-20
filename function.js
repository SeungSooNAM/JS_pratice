//function은 서브 프로그램이라고 불리기도 한다.
//function은 재사용이 가능하다.
//어떠한값을 계산하기 위해 사용

//기본 작성 법 function name(param1, param2){body... return;}
//하나에 함수는 한가지의 일만하게 만들어야한다.
//function 네이밍은 동사형태로 이름을 지정해야한다.
// JS 에서는 function은 Object다.

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello');
log(1234); //숫자가 문자열로 변환되서 나온다.

//Parameters
//value object
function chageName(obj){
    obj.name = 'coder';
}
const NSS = { name: 'NSS'};
chageName(NSS);
console.log(NSS);

//defalut paramters (ES6)
function showMessage(message, from= 'unKwons'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi')

//Rest parameters
function printAll(...args){
    for(let i = 0; i <args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie')

//Local scope
//밖에서는 안이 보이지않고 안에서만 밖을 볼 수 있다. ?
// 블럭 안에서 변수 선언하면 지역 변수이고 밖에 선언하면 전역 변수이다.
// 하지만 안에서는 전역변수를 볼 수 있고

//function에서는 계산한 값을 리턴할 수 있다.
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`)

//일찍 리턴하고 일찍 내보내라

//bad
function upgreadeUser(user){
    if(user.point > 10){

    }
     //logic
}

//good
function upgreadeUser(user){
    if(user.point <= 10){
        return;
    }
    //logic
}
function print(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

function randomQuiz(answer, prinYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}

// anonymous
const printYes = function(){
    console.log('yes!');
}

//named
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo)

//Arrow function
//함수를 간결하게 해준다


const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;  //a + b를 return 한다는뜻

// IIFE : 
(function hello(){
    console.log('IIFE');
})()