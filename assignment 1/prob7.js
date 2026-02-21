// search function for string without BF//

function searchString(str, srcstr) {
    for (let i = 0; i <= str.length - srcstr.length; i++) {
        let match = true;
        for (let j = 0; j < srcstr.length; j++) {
            if (str[i + j] !== srcstr[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}
let str = "Hello world, Have a good day";
// let srcstr = "super";//
let srcstr = "Have";
let index = searchString(str, srcstr);
if (index !== -1) {
    console.log("The srcstr is found at index:", index);
} else {
    console.log("The srcstr is not found.");
}


//output : The srcstr is not found.
// The srcstr is found at index: 13.


