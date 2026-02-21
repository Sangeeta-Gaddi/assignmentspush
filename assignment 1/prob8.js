// string reversal without BF//

function reversestring(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let str="Hello World"
let revstr=reversestring(str)
console.log(revstr)

// output
// dlroW olleH