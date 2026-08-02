let arr = [1, 'house', 2, 3, 'bool', 'famous', true, 4, 'brown'];
let arr2 = [];


for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Number(arr[i])) {
        arr2.push(Number(arr[i]));
    }

}
console.log(arr);
console.log(arr2);
