// Program to generate * pattern pyramid//

function pyramid(rows) {
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
}
pyramid(5);

//Output
//     *
//    ***
//   *****
//  *******
// *********