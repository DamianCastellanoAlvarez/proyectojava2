const $generate = document.getElementById('generate'),
    $showColor = document.querySelector('.gif');

    let hex = [1, 2, 3, 4, 5, 6];


document.addEventListener('click', e => {
    if (e.target === $generate) {
        let color = "#";
        for (let i = 0; i < 6; i++) color += hex[randomNumber()];
        document.body.style.background = color;
    }

})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}