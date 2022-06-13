const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')

window.addEventListener('keydown', function(e) {
    jump(e)
})

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add('jump')

        setTimeout(function () {
            dino.classList.remove('jump')
        }, 300)
    }
}

let isAlive = setInterval(function() {
    let dinoTop = window.parseInt(getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = window.parseInt(getComputedStyle(cactus).getPropertyValue('left'))
    
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game over')
    }

}, 10)
