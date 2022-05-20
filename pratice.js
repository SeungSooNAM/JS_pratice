for(i = 0; i <= 10; i += 2){
    console.log(`i:${i}`)
}

for(i = 0; i <=10; i++){
    if(1 % 2 !== 0){
        continue;
    }
}

for(let i = 0; i <= 10; i++){
    if(i > 8){
        break;
    }
    console.log(`q2, ${i}`);
}