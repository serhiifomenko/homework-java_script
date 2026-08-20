// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.


const newBlock = document.createElement("div");
console.log(newBlock);
newBlock.classList.add("wrap");
newBlock.classList.add("collapse");
newBlock.classList.add("alpha");
newBlock.classList.add("beta");

newBlock.style.backgroundColor = "#b63232";
newBlock.style.color = "#72379f";
newBlock.style.fontSize = "20px";

document.body.appendChild(newBlock);

const cloneBlock = newBlock.cloneNode(true);
document.body.appendChild(cloneBlock);

