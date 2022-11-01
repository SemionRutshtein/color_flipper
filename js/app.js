window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body'),
        buttons = document.querySelectorAll('button'),
        rgbBtn = document.querySelector('.btn1'),
        hexBtn = document.querySelector('.btn2'),
        hslBtn = document.querySelector('.btn3'),
        menuActive = document.querySelector('.menu__side'),
        hellobtn = document.querySelector('.hello'),
        logoText = document.querySelector('.headr__logo-text'),
        logoA = document.querySelector('.headr__logo-text a');

    function randomNumbers() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        const randomColorElement = `rgb(${r}, ${g}, ${b})`;
        
        return randomColorElement;
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            menuActive.classList.add('active');
            menuActive.classList.add('fade');
        });
    });

    logoText.addEventListener('mouseenter', () => {
        const randomColor = randomNumbers();
        logoA.style.color = randomColor;
        logoA.style.textShadow = `1px 1px 4px ${randomColor}`;
    });

    logoText.addEventListener('mouseleave', () => {     
        logoA.style.color = '#00ADB5';
        logoA.style.textShadow = '1px 1px 4px #00ADB5';
    });
});