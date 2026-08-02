let books = [
    {
        title: "Alice",
        pages: 220,
        author: ["John Doe", "Hue Daniels"],
        genre: "Horror",
    },
    {
        title: "Dogs Barbos",
        pages: 250,
        author: ["Petty Doe"],
        genre: "Fantastic, Triller",
    },
    {
        title: "Spider-Man",
        pages: 320,
        author: ["Di Caprio"],
        genre: "Science",
    },
    {
        title: "Panda",
        pages: 120,
        author: ["Fomenko SK"],
        genre: "Cartoon",
    }
]

// let maxBook = books[0];
//
// for (let i = 1; i < books.length; i++) {
//     if (books[i].pages > maxBook.pages) {
//         maxBook = books[i];
//     }
// }
//
// console.log(maxBook);




// let maxBook = books [0];
//
// for (let i = 1; i < maxBook; i++) {
//     if (books[i].genre > maxBook) {
//         maxBook = books[i];
//     }
// }
// console.log(maxBook);



// let maxBook = books[0];
//
// for (let i = 1; i < maxBook; i++) {
//     if (books[i].title > maxBook) {
//         maxBook = books[i].title;
//     }
// }
// console.log(maxBook);



// let maxBook = books[0];
//
// for (let i = 0; i < maxBook; i++) {
//     if (books[i].author === maxBook) {
//         maxBook = books[i].author;
//     }
// }
// console.log(maxBook);


let maxBook = books[0];

for (let i = 0; i < books.length; i++) {
    if (books[i].author.length === 1) {
        console.log(books[i]);
    }
}
