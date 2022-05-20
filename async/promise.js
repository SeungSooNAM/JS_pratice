// promise is a JS object for 동기화 작동ㄴ
// 상태 : pending > fulfilled or rejected
// Producer vs Cosumer

// Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    console.log('doing something...')
    setTimeout(() => {
         resolve('ellie')
        //reject(new Error('no network'))
    }, 2000)
});

// Consumers: then, catch, finally
promise
.then((value) =>{
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {console.log('finally')}); //무조건 실패던 성공이던 마지막에 나온다.

// Promise chaing
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// ,then(num => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => resolve(num - 1), 1000)
//     })
// })
// .then(num => console.log(num))

const getHen = () => 
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('닭'), 1000)
})
const getEgg = hen => 
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`${hen} => 달걀`), 1000)
})
const cook = egg =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`${egg} => 계란프라이`), 1000)
})

getHen()
.then(hen => getEgg(hen)) //.then(getEgg)
.catch(error =>{
    return '빵'
})
.then(egg => cook(egg)) //.then(cook) 이렇게도 할 수 있다.
.then(meal => console.log(meal))
.catch(console.log)