// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.


let words = [ 'a', 'b', 'c']
let word = ''

for (let i of words) {
    word += i
}
console.log(word)
