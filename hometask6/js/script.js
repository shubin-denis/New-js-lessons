'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    newMenuItem = document.createElement('li'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    userAnswer = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

userAnswer.textContent = prompt('Как вы относитесь к технике apple?');

