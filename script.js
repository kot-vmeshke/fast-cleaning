let btnOk = document.querySelector('.win-button-ok'),
    btnClose = document.querySelector('.win-button-close'),
    btnNext = document.querySelector('.next');

let popUp = document.querySelector('.win-ok');

let input = document.querySelector('.phone');

btnNext.addEventListener('click', () => {
    popUp.classList.remove('hide');
});

btnOk.addEventListener('click', () => {
    popUp.classList.add('hide');
});

btnClose.addEventListener('click', () => {
    popUp.classList.add('hide');
});

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        popUp.classList.remove('hide');
    }
});

