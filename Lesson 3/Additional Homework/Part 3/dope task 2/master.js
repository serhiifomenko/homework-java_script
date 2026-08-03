// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

result = []

let numbers = [1, 21, 36, 42, 59, 60, 75, 87, 91, 10];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        result.push(numbers[i]);
    }
}
console.log(result);
