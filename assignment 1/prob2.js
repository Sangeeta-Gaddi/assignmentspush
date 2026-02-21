// Program to genrate * upside-down pyramid//

function reversepyramid(rows) {
    for (let i = rows - 1; i >= 0; i--) {
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
  
  reversepyramid(5);
  
  //output
  // *********
  //  *******
  //   *****
  //    ***
  //     *