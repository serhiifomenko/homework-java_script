let arr = [];
let arr2 = [];

while (arr.length < 20) {
    arr.push(Math.floor(Math.random() * 100));
}

for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        arr2.push(arr[i]);
    }
}

console.log(arr);
console.log(arr2);

