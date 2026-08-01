
let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'
];

document.write('<ul>');

let i = 0;

while (i < listOfItems.length) {
    document.write(`<li>${listOfItems[i]}</li>`);
    i++;
}

document.write('</ul>');
