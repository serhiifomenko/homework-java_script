// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт
//
// Приклад моделі кінцевого об'єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
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

let result = cards.reduce((acc, card) => {

    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    }

    if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    }

    if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    }

    if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }

    return acc;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(result);
