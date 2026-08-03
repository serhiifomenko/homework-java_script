// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000 *(uan)*,[{currency:'USD'*(валюта)*,value:25*(курс)*},{currency:'EUR',value:42}],'USD') // => 400 *(10000/25 = 400USD)*

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}

let result = exchange(
    10000,
    [

        {currency:'USD',value:25},
        {currency:'EUR',value:10}

    ],
    'USD'
)
console.log(result);
