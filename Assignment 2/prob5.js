//declare array and sum all values using loops  and functions//

//using for loop//
let array = [1, 2, 3];
let sum = 0;
for (let i = 0; i < array.length; i++)
 {
  sum =sum+array[i];
}
console.log(sum);

// //using while loop//
let arr = [1, 2, 3, 4, 5,6];
let summation = 0;
let i = 0;
while (i < arr.length) {
  summation = summation + arr[i];
  i++;
}
console.log(summation);

// //using functions//
let Arr = [1, 2, 3, 4, 5];
function sumfunc(Arr) {
  let sum = 0;
  for (let i = 0; i < Arr.length; i++) {
    sum =sum+ Arr[i];
  }
  return sum;
}
let totalSum = sumfunc(Arr);
console.log(totalSum);

//sum of array using forloopfunction//
let myarr=[10,20,5,30];
function sumarrUsigfor(myarr){
  let sum=0;
  for(let i=0;i<myarr.length;i++){
    sum=sum+myarr[i];
  }
      console.log(sum)
  }
sumarrUsigfor(myarr);

//sum of array using whileloopunction//
let myArr=[2,4,6,1,5];
function sumarrUsingwhile(myArr){
  let sum=0;
  let i=0;
  while(i<myArr.length){
    sum=sum+myArr[i];
    i++;
  }
  console.log(sum);
}
sumarrUsingwhile(myArr)

//output//
6
21
15
65
18