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


// const titleEl = document.querySelector(`.title`);
// // titleEl.innerHTML = `<a href="/">Helloy</a>`;
// // titleEl.innerHTML = ``;
// titleEl.insertAdjacentHTML(`beforebegin`, ` <a href="/">Helloy</a>`);


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];


const gallery = document.querySelector(".gallery");
const gai = images
    .map((item) =>
    `<li class = "gallery-lalala">
        <img src ="${item.url}" alt = "${item.alt}">
</li>`
).join("");

gallery.insertAdjacentHTML(`beforebegin`, gai);











