// Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру по шаблону
//
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGgaNcc01wwyPOrxG1qlZbV4wxYyo_Iya501WIm6SO39WzrFiwRYE21acHaGB7TFHh4ACvA&s'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvW3q7xxHwj_M9kpMbeCCukaiMgXUA7IP5fohUblsbIA&s=10'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSydy5FSFg-RiBittwCulEGVrBCmJUsFPfcW8vyZCTYpTleuPO78JvGE&s=10'
    },
];
let i = 0;

while (i < products.length) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">
                ${products[i].title}. Price - ${products[i].price}
            </h3>
            <img src="${products[i].image} "alt="images" class="product-image">
        </div>
    `);
    i++;
}

