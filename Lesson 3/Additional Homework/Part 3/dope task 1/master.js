// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив

let usersWithId = [
    { id: 1, name: 'Vasya', age: 31, status: false },
    { id: 2, name: 'Petya', age: 30, status: true },
    { id: 3, name: 'Kolya', age: 29, status: true },
    { id: 4, name: 'Olya', age: 28, status: false }
];

let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];

let result = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            let user = {
                ...usersWithId[i],
                address: citiesWithId[j]
            };

            result.push(user);
        }
    }
}

console.log(result);
