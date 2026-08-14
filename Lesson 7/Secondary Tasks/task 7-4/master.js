// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client


function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let array = [];

let client1 = new Client (1, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client1);

let client2 = new Client (2, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client2);

let client3 = new Client (3, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client3);

let client4 = new Client (4, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client4);

let client5 = new Client (5, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client5);

let client6 = new Client (6, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client6);

let client7 = new Client (7, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client7);

let client8 = new Client (8, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client8);

let client9 = new Client (9, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client9);

let client10 = new Client (10, 'Sergey', 'Fomzini', 'kolobus@gmail.com', '+380508668364',
    [
        {Phone: 'Iphone 4', price: 20000},
        {Phone: 'Case', price: 100},
    ]);
array.push(client10);

console.log(array);



