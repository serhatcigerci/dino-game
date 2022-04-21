const dino = document.getElementById('dino')

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add('jump')

        setTimeout(function () {
            dino.classList.remove('jump')
        }, 300)
    }
}   

window.addEventListener('keydown', function(e) {
    jump()
})