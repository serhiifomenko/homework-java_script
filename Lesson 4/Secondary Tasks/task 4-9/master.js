// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function showUsers(list) {
    for (let i = 0; i < list.length; i++) {
        document.write(`<div>
                            <p>ID: ${list[i].id}</p>
                            <p>Name: ${list[i].name}</p>
                            <p>Age: ${list[i].age}</p>
                        </div>`);
    }
}
let users = [
    {
        id: 1,
        name: "John",
        age: 15,

    },
    {
        id: 2,
        name: "Jake",
        age: 25,

    }
];

showUsers(users);
