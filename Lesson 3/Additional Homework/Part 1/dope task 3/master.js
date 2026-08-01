let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
//


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



// let i = 0;
//
// while (i < arr.length) {
//     if (i % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }



// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// let i = 0;
//
// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }



// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }



// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
//
// console.log(arr);



// let i = arr.length - 1;
//
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }



// for (let i = arr.length; i >= 0; i--) {
//     console.log(arr[i]);
// }



// let i = arr.length-1;
//
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(arr[i]);
//     }
// }



// let i = arr.length - 1;
//
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }


for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}

console.log(arr);
