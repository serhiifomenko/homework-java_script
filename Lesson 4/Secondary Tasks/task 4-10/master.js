// – створити функцію яка повертає найменьше число з масиву


function showSmallest(num) {
    let min = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }
    return min;

}
let result = [44, 49, 19, 67, 3, 23, 85, 4]

console.log(showSmallest(result));


