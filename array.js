'use strict'

// Array 

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruit = ['apple', 'banana'];
console.log(fruit)
console.log(fruit.length)
console.log(fruit[0])
console.log(fruit[3])
console.log(fruit[fruit.length - 1])

// Looping over an array
for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//for of  변수 of 배열
for (let fruits of fruit){
    console.log(fruit)
}

// forEach
// fruit.forEach(function (fruit, Index, array){
//     console.log(fruit, Index);
// })

fruit.forEach((fruit) => console.log(fruit))

// ADD delete copy
// add an item to the end
// push : 제일 뒤에 추가 pop : 제일 뒤에 제거
fruit.push('pitch', 'orange')
console.log(fruit)
//remove
fruit.pop();
fruit.pop();
console.log(fruit)

// 앞에서 뺴는 것과 제거하는것
// shift , unShift
fruit.unshift('lemon','strawberry')
console.log(fruit)
//remove
fruit.shift();
fruit.shift();
console.log(fruit);

//shift 와 unShift 는 pop, push 보다 느리다. 이유는 뒤에다가 추가하는 것은 빠르게 추가할 수 있지만 앞에서 데이터를 두려면 전에 있던 데이터를 다른 인덱스로 옴겨서 짚어넣어야하기 떄문


//아이템을 지정된 위치에서 지우는 방법
fruit.push('strawberry', 'orange', 'lemon');
console.log(fruit)
fruit.splice(3, 2)
console.log(fruit)
fruit.splice(1, 1, 'apple2', 'watermelon')
console.log(fruit);

// 다른 배열에서 파라미터값들 더하기
const fruit2= ['box', 'spolier']
const newFruits = fruit.concat(fruit2)
console.log(newFruits)

// 배열 인덱스 값 찾기
// index of(있으면 1, 없으면 0) , includes(있으면 true 없으면 falses)
console.log(fruit.indexOf('apple'))
console.log(fruit.indexOf('apple2'))
console.log(fruit.includes('watermelon'))

// lastIndexof
fruit.push('참외')
console.log(fruit)
console.log(fruit.indexOf('apple'))
console.log(fruit.lastIndexOf('참외'))

// API ? Quiz 배열이 선언된곳을 가서 처음부터 읽기

fruit.reverse();
console.log(fruit)