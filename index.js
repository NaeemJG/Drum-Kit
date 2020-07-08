// .addEventListener('click', alertClick);


let mp3s = ['sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3', 'sounds/snare.mp3', 'sounds/crash.mp3', 'sounds/kick-bass.mp3']
let keyCodes = [87, 65, 83, 68, 74, 75, 76];

let numEls = document.querySelectorAll('.drum')
for(let i = 0; i < numEls.length; i++) {
    numEls[i].addEventListener('click', function() {
        let audio = new Audio(mp3s[i]);
        audio.play();
        numEls[i].classList.add('pressed');
        setTimeout(function(){
            numEls[i].classList.remove('pressed');
        }, 100);
    })
}

let audio = new Audio('sounds/tom-1.mp3');
audio.play();

for(let i = 0; i < numEls.length; i++) {
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === keyCodes[i]) {
            let audio = new Audio(mp3s[i]);
            audio.play();
            numEls[i].classList.add('pressed');
            setTimeout(function(){
                numEls[i].classList.remove('pressed');
            }, 100);
        };
    })
}


