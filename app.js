let btnFix = document.getElementById('btnFix');
let labelFix = document.getElementById('labelFix');

btnFix.addEventListener('click', () => {
    bar.style.visibility = 'visible';
    labelFix.innerHTML = 'Processing, this will take a minute'
    updateBar();
})

function message() {
    bar.style.visibility = 'hidden';
    labelFix.innerHTML = 'Congratulations, your problem is resolved!';
    setTimeout(() => {
        labelFix.innerHTML = 'if not, try again the FIX-IT button \'till it\'s done!';
    }, 3000);
}

function updateBar() {
    let bar = document.getElementById('progressBar');
    let labelBar = document.getElementById('labelBar');
    let width = 1;
    let progressBar = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(progressBar);
            message();
        } else {
            width = width + 1;
            bar.style.width = width + '%';
            labelBar.innerHTML = width * 1 + '%';
        }
    }
} 