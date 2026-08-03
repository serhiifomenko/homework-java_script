// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

let words = [ 'a', 'b', 'c']
let word = ''
let i = 0

while (i < words.length) {
    word += words[i];
    i++;
}
console.log(word);
