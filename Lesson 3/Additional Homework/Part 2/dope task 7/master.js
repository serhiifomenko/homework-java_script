let check = [100, 250, 50, 168, 120, 345, 188];
let check2 = [];
let sum = 0;

for (let i = 0; i < check.length; i++) {
    sum = sum + check[i];
    check2.push(check[i] * 5);
}
console.log(check);
console.log(check2);

