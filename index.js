const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('p');
const language = document.createElement('p');
const keyboardRow = document.createElement('div');


wrapper.classList = 'wrapper';
body.append(wrapper);
title.textContent = 'RSS Виртуальная клавиатура'
wrapper.append(title);

textarea.classList = 'textarea';
textarea.setAttribute('id', 'textarea');
wrapper.appendChild(textarea);

keyboard.classList = 'keyboard';
wrapper.append(keyboard);


description.classList = 'description';
language.classList = 'language';
description.textContent = 'Клавиатура создана в операционной системе Windows';
language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
wrapper.append(description);
wrapper.append(language);

keyboard.innerHTML = Array(5).fill('<div class="keyboard__row"></div>').join('');

const keyboard__row = document.querySelectorAll('.keyboard__row');


for(let i=0; i<keyboard__row.length; i++) {
    if(i===1) {
        keyboard__row[i].innerHTML = Array(14).fill('<div class="keyboard__btn"></div>').join('');
    } else if (i === 2) {
        keyboard__row[i].innerHTML = Array(15).fill('<div class="keyboard__btn"></div>').join('');
    } else if (i === 5) {
        keyboard__row[i].innerHTML = Array(19).fill('<div class="keyboard__btn"></div>').join('');
    } else {
        keyboard__row[i].innerHTML = Array(13).fill('<div class="keyboard__btn"></div>').join('');
    }    
}


const keyboard__btn = document.querySelectorAll('.keyboard__btn');

keyboard__btn.forEach(function(item){
    item.insertAdjacentHTML('afterBegin', '<p class="ru"></p>');
    item.insertAdjacentHTML('beforeEnd', '<p class="en"></p>');    
})

let firstRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '']


