// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


const menu = ['Main', 'Products', 'About us', 'Contacts'];

const newUl = document.createElement('ul')

menu.forEach((item) => {
        const newLi = document.createElement('li')
        newLi.innerText = item;
        newUl.append(newLi);

})
console.log(newUl)
document.body.appendChild(newUl);
