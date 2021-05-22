let dice = document.querySelector(".dice");
let postop = document.documentElement.clientHeight - dice.clientHeight;
let posleft = document.documentElement.clientWidth - dice.clientWidth;


function diceRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sound() {
    var audio = new Audio();
    audio.src = 'audio/audio.mp3';
    audio.autoplay = true;
}


document.addEventListener("click", function () {
    let result = diceRandom(1, 6);
    for (let i = 1; i <= 6; i++) {
        dice.classList.remove("rezult-" + i);
    }
    dice.classList.add("rezult-" + result);
    dice.style.left = diceRandom(0, posleft) + "px";
    dice.style.top = diceRandom(0, postop) + "px";
    sound();
})