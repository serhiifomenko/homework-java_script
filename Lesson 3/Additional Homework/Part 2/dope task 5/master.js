let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67]

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i]);
    }
}
