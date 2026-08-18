// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об'єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

const products = [
    {
        name: 'Phone',
        price: 1200,
        details: {
            manufacturer: 'Apple',
            country: 'USA'
        }
    },
    {
        name: 'Laptop',
        price: 2000,
        details: {
            manufacturer: 'Lenovo',
            country: 'China'
        }
    }
];



function copyProducts(product) {
    if (
        product === undefined ||
        product === null ||
        Number.isNaN(product)
    ) {
        return product;
    }

    if (typeof product !== 'object') {
        return product;
    }

    let copy;

    if (Array.isArray(product)) {
        copy = [];
    } else {
        copy = {};
    }

    for (const key in product) {
        if (typeof product[key] === 'function') {
            copy[key] = product[key];
        } else {
            copy[key] = copyProducts(product[key]);
        }
    }

    return copy;
}

console.log(copyProducts(products));











