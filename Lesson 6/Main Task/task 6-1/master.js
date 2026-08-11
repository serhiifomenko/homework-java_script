// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
// - знайти піковий туз
//
// - всі шістки
//
// - всі червоні карти
//
// - всі буби
//
// - всі трефи від 9 та більше
//
//
//
// Приклад моделі об'єкту карти:
//
// {
//
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//
//     color:'', // 'red','black'
//
// }



let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

for (let suit of suits) {
    for (let value of values) {

            if (suit === 'spade' || suit === 'clubs') {
                cards.push({
                    cardSuit: suit,
                    Value: value,
                    Color: 'black'
                });
                } else {
                cards.push({
                    cardSuit: suit,
                    Value: value,
                    Color: 'red'
                });

            }
         }
}
console.log(cards);

// Первое задание

let card = cards.filter(card =>
    card.Value === 'ace' && card.cardSuit === 'spade'
);

console.log(card);

//Второе задание

let sixes = cards.filter(card =>
    card.Value === '6'
);
console.log(sixes);

//Третье задание

let reds = cards.filter(card =>
    card.Color === 'red'
);
console.log(reds);

//Четвертое задание

let diamonds = cards.filter(card =>
    card.cardSuit === 'diamond'
);
console.log(diamonds);

//Пятое задание

let nines = cards.filter(card =>
    card.cardSuit === 'clubs' &&
    ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.Value)
);

console.log(nines);


