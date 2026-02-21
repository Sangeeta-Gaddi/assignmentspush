function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let array = [1, 2, 3, 4, 5];
let revarray = reverseArray(array);
console.log(revarray);

//output
// [ 5, 4, 3, 2, 1 ]
