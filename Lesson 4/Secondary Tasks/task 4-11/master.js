// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }

    return total;
}

let num = [1, 2, 10];

console.log(sum(num));
