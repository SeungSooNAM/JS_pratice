// 오브젝트를 JSON으로 변환하는 방법

//stringify
let json = JSON.stringify(true)
console.log(json)


json = JSON.stringify(['apple', 'bananana']);
console.log(json)

const rabbit ={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate : new Date(),
    jump:() => {
        console.log(`${name} can jump!`)
    }, 
}

json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit, ['name', 'color'])
console.log(json)
json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: $(value)`)
    return key === 'name' ? 'ellie' : value;
})
console.log(json)
//parse
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj)
rabbit.jump();

console.log(rabbit.birthDate.getDate())



// JSON을 오브젝트로 변환하는방법