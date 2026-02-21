// Program to find sum of N numbers//

let n = 6; 
function sumofnum(n) {
    let sum = 0;  
   
    for (let i = 1; i <= n; i++) {
      sum += i;  
    }
  
    return sum;  
  }
     
  let result = sumofnum(n);  
  console.log(result);  

  //output
//    21