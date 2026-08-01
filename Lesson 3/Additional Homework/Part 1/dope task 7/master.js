let arr = [1, 2, 3 , 4, 'one', 'two', 'three', 'four', true, false];
let i = 0;

while (i < arr.length) {

    if (typeof arr[i] === 'boolean') {
        console.log(arr[i]);
    }

    i++;
}
