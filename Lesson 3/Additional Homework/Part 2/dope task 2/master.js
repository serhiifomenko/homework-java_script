let arr = [];

while (arr.length < 20) {
    arr.push(Math.floor(Math.random() * 100));
}

for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
}
