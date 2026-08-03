// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function area(arr) {
    document.write(`<ul>`);

    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }

    document.write(`</ul>`);
}

let arr = ['vasya', 'false', 6, 8, true];

area(arr);
