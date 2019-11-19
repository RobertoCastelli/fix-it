let btnFix = document.getElementById('btnFix');
let labelFix = document.getElementById('labelFix');

btnFix.addEventListener('click', () => {
    bar.style.visibility = 'visible';
    btnFix.classList.add('disable');
    btnFix.disabled = true;
    labelFix.innerHTML = 'FIX in progress. This will take a few minutes';
    updateBar();
    play();
})

function message() {
    bar.style.visibility = 'hidden';
    labelFix.innerHTML = 'CONGRATULATIONS Your problem should now be fixed';
    setTimeout(() => {
        labelFix.innerHTML = 'If your problem persists, press the FIX-IT button again';
    }, 3000);
}

function updateBar() {
    let bar = document.getElementById('progressBar');
    let labelBar = document.getElementById('labelBar');
    let width = 1;
    let progressBar = setInterval(frame, 1200);
    function frame() {
        if (width >= 100) {
            clearInterval(progressBar);
            btnFix.classList.remove('disable');
            btnFix.disabled = false;
            btnFix.classList.add('able');
            message();
        } else {
            width = width + 1;
            bar.style.width = width + '%';
            labelBar.innerHTML = width * 1 + '%';
        }
    }
} 

function play() {
    let audio = document.getElementById('audio');
    audio.play();
}