// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]



function toArr(str) {
    let split = str.split(' ');
    return split;
}
let str = 'Ревуть воли як ясла повні';
console.log(toArr(str));




