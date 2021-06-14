const changeColorBtn = document.getElementById("changeBtn");
const color = document.querySelector(".color");

changeBtn.addEventListener('click', () => {
    const red = randnumber(0, 255);
    const green = randnumber(0, 255);
    const blue = randnumber(0, 255);
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    color.innerHTML = `rgb(${red}, ${green}, ${blue})`;
});

function randnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}