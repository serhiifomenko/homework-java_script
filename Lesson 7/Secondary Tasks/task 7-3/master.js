// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [];


let user1 = new User (1,'Vasya', 'Balanov', 'vasya@gmail.com', '+380505678364');
arr.push(user1)
let user2 = new User (2,'Jasya', 'Kalanov', 'vaspa@gmail.com', '+380508668364');
arr.push(user2)
let user3 = new User (3,'Jrasya', 'Dalanov', 'vabspa@gmail.com', '+380508978364');
arr.push(user3)
let user4 = new User (4,'Jgasya', 'Palanov', 'vasqpa@gmail.com', '+380508678364');
arr.push(user4)
let user5 = new User (5,'Jahsya', 'Kalanov', 'vabspa@gmail.com', '+380508672364');
arr.push(user5)
let user6 = new User (6,'Jassya', 'Aalanov', 'vasabpa@gmail.com', '+380508618364');
arr.push(user6)
let user7 = new User (7,'Jasysa', 'Qalanov', 'vasfpa@gmail.com', '+380508679364');
arr.push(user7)
let user8 = new User (8,'Jagsya', 'Talanov', 'vasfpa@gmail.com', +'380508670364');
arr.push(user8)
let user9 = new User (9,'Jasyga', 'Zalanov', 'vasapa@gmail.com', '+380508671364');
arr.push(user9)
let user10 = new User (10,'Jagsya', 'Malanov', 'vadspa@gmail.com', '+380508628364');
arr.push(user10)


arr.sort((a, b) => a.id - b.id);
console.log(arr)
