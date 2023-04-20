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
    if(i===0) {
        keyboard__row[i].innerHTML = Array(14).fill('<div class="keyboard__btn"></div>').join('');
    } else if (i === 1) {
        keyboard__row[i].innerHTML = Array(15).fill('<div class="keyboard__btn"></div>').join('');
    } else if (i === 4) {
        keyboard__row[i].innerHTML = Array(9).fill('<div class="keyboard__btn"></div>').join('');
    } else {
        keyboard__row[i].innerHTML = Array(13).fill('<div class="keyboard__btn"></div>').join('');
    }    
}


const keyboard__btn = document.querySelectorAll('.keyboard__btn');

keyboard__btn.forEach(function(item){
    item.insertAdjacentHTML('afterBegin', '<p class="ru"></p>');
    item.insertAdjacentHTML('beforeEnd', '<p class="en"></p>');    
})

const en = document.querySelectorAll('.en');
function createKeys() {    

    let keyContent = [
       "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
       "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
       "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
       "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#708;", "Shift",
       "Ctrl", "Win", "Alt", "Space", "Alt", "&#706;", "&#709;", "&#707;", "Ctrl"   
    ];

    for(let i=0; i<keyContent.length; i++) {
        let checkNaN = NaN;
        en[i].textContent = keyContent[i];
        if(typeof Number(keyContent[i]) === 'number' && Number(keyContent[i])) {
            console.log(Number(keyContent[i]));
            keyboard__btn[i].classList.add('number'+keyContent[i]);
        } else {
            keyboard__btn[i].classList.add('Key'+keyContent[i]);
        }
    }
    return keyContent;  
}

createKeys();

window.addEventListener(
    "keydown",
    (event) => {
        console.log(`KeyboardEvent: key='${event.key}' | code='${event.code}'`)
      
    //   textarea.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;

    //   document.getElementById("output").appendChild(p);
      window.scrollTo(0, document.body.scrollHeight);
    },
    true
  );