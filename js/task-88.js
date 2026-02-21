

// | Тип события     | Когда срабатывает                                   | Пример использования |
// | --------------- | --------------------------------------------------- | -------------------- |
// | **click**       | Когда пользователь кликает на элемент               | Кнопки, ссылки       |
// | **dblclick**    | Двойной клик мышью                                  | Особые действия      |
// | **input**       | Когда пользователь вводит текст в поле              | Инпуты, textarea     |
// | **change**      | Когда значение элемента изменилось и потеряло фокус | Выпадающие списки    |
// | **submit**      | Когда форма отправляется                            | Формы                |
// | **mouseover**   | Когда курсор мыши наведен на элемент                | Подсветка элементов  |
// | **mouseout**    | Когда курсор уходит с элемента                      | Подсветка элементов  |
// | **keydown**     | Когда нажата клавиша на клавиатуре                  | Игры, формы          |
// | **keyup**       | Когда клавиша отпущена                              | Проверка ввода       |
// | **focus**       | Когда элемент получает фокус                        | Инпуты               |
// | **blur**        | Когда элемент теряет фокус                          | Инпуты               |
// | **scroll**      | Когда происходит прокрутка                          | Скролл страницы      |
// | **resize**      | Когда изменяется размер окна                        | Адаптивная верстка   |
// | **contextmenu** | Когда вызывается контекстное меню (правый клик)     | Кастомное меню       |





/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку 
 * і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в 
 * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто 
 * які збігаються з критеріями пошуку
 */

const cars = [
    {
      id: 1,
      car: "Audi",
      type: "A6",
      price: 30000,
      img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
    },
    {
      id: 2,
      car: "Honda",
      type: "Civic",
      price: 12000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
      id: 3,
      car: "Audi",
      type: "Q7",
      price: 40000,
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
      id: 4,
      car: "WBM",
      type: "5 siries",
      price: 9000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
      id: 5,
      car: "Honda",
      type: "Accord",
      price: 20000,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
      id: 6,
      car: "Volvo",
      type: "XC60",
      price: 7000,
      img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];



// const form = document.querySelector(`.js-form`);
// const nevForm = document.querySelector(`.js-list`);

// function nevList(cars) {
//   return cars.map((car) =>
//     `
//     <li class="car-card">
//       <img class="car-image" src="${car.img}" alt="${car.type}"/>
//       <h2 class="car-title">${car.car}</h2>
//       <h3 class="car-type">${car.type}</h3>
//       <span class="car-price">${car.price}</span>
//     </li>`
//   ).join("")
// }

// nevForm.insertAdjacentHTML("beforeend", nevList(cars));

// form.addEventListener("submit", retsubmit);

// function retsubmit(event) {
//   event.preventDefault();
//   const elements = event.target.elements;
  
//   const elementsValue = elements.query.value;
//   const elementOption = elements.options.value;
// //                                                  includes — це метод рядків (string) і масивів (array) у JavaScript.
// //                                          Він перевіряє, чи міститься певне значення в рядку або масиві, і повертає true/false.
//   const rezalt = cars.filter((car) =>
//     car[elementOption].toLowerCase().includes(elementsValue.toLowerCase().trim())
//   );
//   nevForm.innerHTML = nevList(rezalt);

// };


// const form = document.querySelector(`.js-form`);
// const nevList = document.querySelector(`.js-list`);

// function ret(arr) {
//   return arr.map((car) =>
//     `<li class="car-card">
//   <img class="car-image" src="${car.img}" alt="${car.type}">
//   <h2 class="car-title">${car.car}</h2>
//   <h3 class="car-type">${car.type}</h3>
//   <span class="car-price">${car.price}</span>
//   </li>`
//   ).join("")

// }
// nevList.insertAdjacentHTML("beforeend", ret(cars));

// form.addEventListener("submit", pezalt)
  
// function pezalt(event) {
//   event.preventDefault();
//   const elements = event.target.elements;
//   const queryValue = elements.query.value.toLowerCase().trim();
//   const optionsValue = elements.options.value;
   
//   const rezalt = cars.filter((arr) => arr[optionsValue].toLowerCase().trim().includes(queryValue) );
  
//   nevList.innerHTML = ret(rezalt);
  
  
// }
 

// const form = document.querySelector(`.js-form`);
// const nevList = document.querySelector(`.js-list`);

// function list(arr) { 
//   return arr.map((car) => `
// <li class="car-card">
// <img class="car-image" src="${car.img}" alt="${car.type}">
// <h2 class="car-title ">${car.car}</h2>
// <h3 class="car-type">${car.type}</h3>
// <span class="car-price ">${car.price}</span>
// </li>
//   `).join("")
// };

// nevList.insertAdjacentHTML("beforeend", list(cars));

// form.addEventListener("submit", tyr);

// function tyr(event) {
//   event.preventDefault();
//   const elements = event.target.elements;
//   const queryValue = elements.query.value.toLowerCase().trim();
//   const optionsValue = elements.options.value;
//   const rezalt = cars.filter((car) => car[optionsValue].toLowerCase().trim().includes(queryValue));

//   nevList.innerHTML = list(rezalt);
  
// };



const form = document.querySelector(`.js-form`);
const nevList = document.querySelector(`.js-list`);

function list(arr) {
  return arr.map((car) => `
  <li data-id = "${car.id}" class="car-card">
  <img class="car-image" src="${car.img}" alt="${car.type}">
<h2 class="car-title">${car.car}</h2>
<h3 class="car-type">${car.type}</h3>
<span class="car-price">Ціна:${car.price}</span>
  </li>
  `).join("")
}

nevList.insertAdjacentHTML("beforeend", list(cars));

form.addEventListener("submit", tytyty);

function tytyty(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const queryValue = elements.query.value.toLowerCase().trim();
  const optionsValue = elements.options.value;
  
   const rezalt = cars.filter((car) => car[optionsValue].toLowerCase().trim().includes(queryValue));

   nevList.innerHTML = list(rezalt);
}


nevList.addEventListener("click", far);
 
  
function far(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const curentProduct = event.target.closest(`.car-card`);
  const id = curentProduct.dataset.id;
  const car = cars.find((item) => item.id === +id);
 
  const instance = basicLightbox.create(`
	 <div class="modal">
      <img src="${car.img}" alt="${car.name}"width="300"/>
      <h2>${car.car}</h2>
      <h3>Ціна: ${car.price} грн</h3>
          </div>
  `)

  instance.show()

};

