//Declare array and print all values using for, while loop and funcion//

//using for loop//
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// //using while loop//
let arr = [10, 20, 30, 40, 50];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// //using function//
let Arr = [1, 2, 3, 4, 5];
function printarrval(arr) {
  for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
  }
}

printarrval(Arr);

//using forloopfunction//
let myarr=[1,3,4,5]
function priarrUsingforloop(myarr)
{
  for(let i=0;i<myarr.length;i++){
  console.log(myarr[i]);
}
}
priarrUsingforloop(myarr);

//using whileloopfunction//
let Myarr=[1,2,3,4]
function priarrUsingwhileloop(Myarr){
  let i=0;
  while(i<Myarr.length){
    console.log(Myarr[i]);
    i++;
  }
}
priarrUsingwhileloop(Myarr);

//output//
1
2
3
4
5
10
20
30
40
50
1
2
3
4
5
1
3
4
5
1
2
3
4
