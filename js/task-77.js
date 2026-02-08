const options = [
    { label: 'червоний', color: '#F44336' },
    { label: 'зелений', color: '#4CAF50' },
    { label: 'синій', color: '#2196F3' },
    { label: 'сірий', color: '#607D8B' },
    { label: 'рожевий', color: '#E91E63' },
    { label: 'індіго', color: '#3F51B5' },
];


const color = document.querySelector(`.color-picker`);
const nevcolor = options.map((item) => {
    const buttonEl = document.createElement(`button`);
    buttonEl.classList.add(`tyr-batton`);
    buttonEl.textContent = item.label;
    buttonEl.style.backgroundColor = item.color;
    return buttonEl;
})

color.append(...nevcolor);


const titleEl = document.querySelector(`.title`);
// titleEl.innerHTML = `<a href="/">Helloy</a>`;
// titleEl.innerHTML = ``;
titleEl.insertAdjacentHTML(`beforebegin`, ` <a href="/">Helloy</a>`);

