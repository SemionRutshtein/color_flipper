window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body'),
    buttons = document.querySelectorAll('button'),
    rgbBtn = document.querySelector('.btn1'),
    hexBtn = document.querySelector('.btn2'),
    hslBtn = document.querySelector('.btn3'),
    menuActive = document.querySelector('.menu__side'),
    hellobtn = document.querySelector('.hello');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            menuActive.classList.add('active');
        });
    });
});