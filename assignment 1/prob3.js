// Program for diamond shape pyramid//

function diamondshape(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i ; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        console.log(row);
    }
  
    for (let i = rows - 2; i >= 0; i--) {
        let row = '';
        for (let j = 0; j < rows - i ; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        console.log(row);
    }
  }
  
  
  diamondshape(5);
  
  //output
  //      *
  //     ***
  //    *****
  //   *******
  //  *********
  //   *******
  //    *****
  //     ***
  //      * 
  