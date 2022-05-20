{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('^');
    console.log(result);
}
// {
//     const fruits = ['apple', 'banana', 'orange'];
//     const result = fruits.split(',')
//     console.log(result)
// }
{
    const array = [1, 2, 3, 4, 5]
    const result = array.reverse();

    console.log(result)
    console.log(array)
}

{
    const array = [1,2,3,4,5];
    const result = array.splice(2, 5)
    console.log(result)
    console.log(array)
}

{
    class Student {
        constructor(name, age, enrolled, score){
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }


    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 400, false, 66),
        new Student('E', 18, true, 88)
    ]
        
    {
        const result = students.find(function(student){
            return student.score === 90; 
        });
        console.log(result)
    }

    {
        const result = students.filter((students) => students.enrolled);
        console.log(result)
    }

    {
        const result = students.map((students) => students.score)
        console.log(result)
    }

    {
        console.clear
        const result = students.some((students) => students.score < 50);
        console.log(result)

        console.clear
        const result2 = !students.every((students) => students.score < 50);
        console.log(result2)
    }

    {
        const reuslt = students.reduce((prev, curr)=> prev + curr.score, 0);
        console.log(reuslt / students.length)
    }

    {
        const result = students.map((students) => students.score)
        .filter(score => score >= 50)
        .join();
        console.log(result)
    }

    {
        const result = students.map(students => students.score)
        .sort((a, b) => b - a)
        .join();
        console.log(result)
    }
}
    
// api는 설명이 되있다 해석해서 다시보자

