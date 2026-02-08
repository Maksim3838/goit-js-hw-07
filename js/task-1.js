
const categoriesit = document.querySelector(`#categories`);
const itemli = categoriesit.querySelectorAll(`.item`);
console.log("Number of categories:",itemli.length);

itemli.forEach(item =>{
const itemuu = item.querySelector(`h2`).textContent;
const tututu = item.querySelectorAll(`li`).length;

console.log(`Category:`,itemuu);
console.log(`Elements:`,tututu);
})

