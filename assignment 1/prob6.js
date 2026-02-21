
// How to iterate over an object data//

// using for...in loop//

let person={
    id:1,
    name:"nishita",
    age:2,
    gender:'female'
};

for(let key in person){
    console.log(key,person[key]);
}

let obj={a:1, b:2, c:3};
for(let key in obj){
    console.log(key+":"+obj[key]);
}

//output
// id 1
// name nishita
// age 2
// gender female
// a:1
// b:2
// c:3
