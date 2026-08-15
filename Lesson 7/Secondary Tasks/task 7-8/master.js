// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку



class Zolushka {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}
let ten = [];

let zolushka1 = new Zolushka('Liza', 22, 36);
ten.push(zolushka1);

let zolushka2 = new Zolushka('Alisa', 13, 27);
ten.push(zolushka2);

let zolushka3 = new Zolushka('Anna', 20, 37);
ten.push(zolushka3);

let zolushka4 = new Zolushka('Suzanna', 27, 38);
ten.push(zolushka4);

let zolushka5 = new Zolushka('Irina', 23, 45);
ten.push(zolushka5);

let zolushka6 = new Zolushka('Jessika', 16, 30);
ten.push(zolushka6);

let zolushka7 = new Zolushka('Tonya', 21, 34);
ten.push(zolushka7);

let zolushka8 = new Zolushka('Luba', 34, 37);
ten.push(zolushka8);

let zolushka9 = new Zolushka('Olga', 49, 32);
ten.push(zolushka9);

let zolushka10 = new Zolushka('Mira', 18, 40);
ten.push(zolushka10);



class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Sergey', 23, 36);

for (let one of ten) {
    if (one.legSize === prince.shoeSize) {
        console.log(one);
    }
}

let result = ten.find(one => prince.shoeSize === one.legSize);
console.log(result);



