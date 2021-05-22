let dice = document.querySelector(".dice");
let windowsHeight = document.documentElement.clientHeight - dice.clientHeight;
let windowsWidth = document.documentElement.clientWidth - dice.clientWidth;



function diceRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function soundClick() {
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
    dice.style.left = diceRandom(0, windowsWidth) + "px";
    dice.style.top = diceRandom(0, windowsHeight) + "px";
    soundClick();
})