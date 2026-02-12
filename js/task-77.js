// const options = [
//     { label: 'червоний', color: '#F44336' },
//     { label: 'зелений', color: '#4CAF50' },
//     { label: 'синій', color: '#2196F3' },
//     { label: 'сірий', color: '#607D8B' },
//     { label: 'рожевий', color: '#E91E63' },
//     { label: 'індіго', color: '#3F51B5' },
// ];


// const color = document.querySelector(`.color-picker`);
// const nevcolor = options.map((item) => {
//     const buttonEl = document.createElement(`button`);
//     buttonEl.classList.add(`tyr-batton`);
//     buttonEl.textContent = item.label;
//     buttonEl.style.backgroundColor = item.color;
//     return buttonEl;
// })

// color.append(...nevcolor);


    //                                                            2

// const titleEl = document.querySelector(`.title`);
// // titleEl.innerHTML = `<a href="/">Helloy</a>`;
// // titleEl.innerHTML = ``;
// titleEl.insertAdjacentHTML(`beforebegin`, ` <a href="/">Helloy</a>`);
                                                                     
   //                                                                 3


// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];




// const gall = document.querySelector(`.gallery`);
// const galer = images.map((item) =>
//     `<li class = "gallery-lalala">
// <img src = "${item.url}" alt = "${item.alt}">
//     </li>`
// ).join("");

// gall.insertAdjacentHTML(`beforeend`, galer);


  //                                                                4


{/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}


// const input = document.querySelector(`#name-input`);
// const output = document.querySelector(`#name-output`);

// input.addEventListener("input", popopo);

// function popopo (event) {
//   const tututu = event.target.value.trim();
//   if (tututu === "") {
//     output.textContent = "Anonymous"
//   } else {output.textContent = tututu}
// }

// input.addEventListener("input",(event) => {
//   const tututu = event.target.value.trim();
//   if (tututu === "") {
//     output.textContent = "Anonymous";
//   } else { output.textContent = tututu; }
// })

                                                    //  4

// const form = document.querySelector(`.login-form`); // отримуємо форму за класом

// // Додаємо слухача події "submit"
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // зупиняємо стандартну відправку форми

//   // Деструктуризація елементів форми по name
//   const { email, password } = form.elements;

//   // Отримуємо значення та видаляємо зайві пробіли
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   // Перевірка, чи всі поля заповнені
//   if (emailValue === "" || passwordValue === "") {
//     alert('All form fields must be filled in');
//     return;
//   }

//   // Формуємо об'єкт з даними форми
//   const formData = {
//     email: emailValue,
//     password: passwordValue,
//   };

//   console.log(formData); // виводимо дані в консоль

//   form.reset(); // очищаємо форму
// });

// document.addEventListener("keypress", ryt);

// function ryt(event) {
//   console.log(event.key);
  
// }





