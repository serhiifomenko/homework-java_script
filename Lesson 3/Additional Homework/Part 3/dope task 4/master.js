// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

let words = ['a', 'b', 'c'];
let word = ''

for (i = 0; i < words.length; i++) {
    word += words[i];
}
console.log(word);
