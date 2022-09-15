// nested object
const student = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

let veichiles = {
    car1 : "brezza",
    car2 : "Aulto",
    car3 : "Swift",
    bikes : {
        bajaj : "pulsar",
        tvs : "apache"
    }

}
console.log(veichiles);//{
    //car1: 'brezza',
    //car2: 'Aulto',
    //car3: 'Swift',
    //bikes: { bajaj: 'pulsar', tvs: 'apache' }}
    console.log(veichiles.car2);//Aulto
    console.log(veichiles["bikes"]);//{ bajaj: 'pulsar', tvs: 'apache' }


    
  

