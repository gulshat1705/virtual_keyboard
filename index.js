let keys = [
    {
        id: 1,
        itemClass: 'backquote',
        content: "`",
    },
    {
        id: 2,
        itemClass: null,
        content: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']  
    },
    {
        id: 3,
        itemClass: 'minus',
        content: '-', 
    },
    {
        id: 4,
        itemClass: 'equal',
        content: '=', 
    },    
    {
        id: 5,
        itemClass: 'backspace',
        content: 'Backspace', 
    },
    {
        id: 6,
        itemClass: 'tab',
        content: 'Tab', 
    },
    {
        id: 7,
        itemClass: null,
        content: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], 
    },
    {
        id: 8,
        itemClass: 'bracket-left',
        content: '[', 
    },
    {
        id: 9,
        itemClass: 'bracket-right',
        content: ']', 
    },
    {
        id: 10,
        itemClass: 'backslash',
        content: '\\', 
    },
    {
        id: 11,
        itemClass: 'delete',
        content: 'Del', 
    },
    {
        id: 12,
        itemClass: 'capslock',
        content: 'CapsLock', 
    },
    {
        id: 13,
        itemClass: null,
        content: ["a", "s", "d", "f", "g", "h", "j", "k", "l"], 
    },
    {
        id: 14,
        itemClass: 'semicolon',
        content: ';', 
    },
    {
        id: 15,
        itemClass: 'quote',
        content: '\'', 
    },
    {
        id: 16,
        itemClass: 'enter',
        content: 'Enter', 
    },
    {
        id: 17,
        itemClass: 'shift-left',
        content: 'Shift', 
    },
    {
        id: 18,
        itemClass: null,
        content: ["z", "x", "c", "v", "b", "n", "m"], 
    },
    {
        id: 19,
        itemClass: 'comma',
        content: ',', 
    },
    {
        id: 20,
        itemClass: 'period',
        content: '.', 
    },
    {
        id: 21,
        itemClass: 'slash',
        content: '/', 
    },
    {
        id: 22,
        itemClass: 'arrow-up',
        content: '▲', 
    },
    {
        id: 23,
        itemClass: 'shift-right',
        content: 'Shift', 
    },
    {
        id: 24,
        itemClass: 'control-left',
        content: 'Ctrl', 
    },
    {
        id: 25,
        itemClass: 'window',
        content: 'Win', 
    },
    {
        id: 26,
        itemClass: 'alt-left',
        content: 'Alt', 
    },
    {
        id: 27,
        itemClass: 'space',
        content: ' ', 
    },
    {
        id: 28,
        itemClass: 'alt-right',
        content: 'Alt', 
    },
    {
        id: 29,
        itemClass: 'arrow-left',
        content: '◄', 
    },
    {
        id: 30,
        itemClass: 'arrow-down',
        content: '▼', 
    },
    {
        id: 31,
        itemClass: 'arrow-right',
        content: '►', 
    },
    {
        id: 32,
        itemClass: 'control-right',
        content: 'Ctrl', 
    }  
];
console.log(keys[6].content[2]);
const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
let textarea = document.createElement('textarea');
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
let contentValue = (keys) => {
    let contentArray = [];
    for (let item of keys) {
        contentArray.push(item.content);
    }
    return contentArray.flat();
} 

let result = contentValue(keys);


function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className){
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}


for(let i=0; i<en.length; i++) {
    en[i].textContent = result[i];
        
    if(Number(result[i])) {
        keyboard__btn[i].classList.add('number'+i);
        if(result[i]==='0') {
            keyboard__btn[i].classList.add('number0');
        } 

    } else if(Boolean(result[i].match(/^[A-Za-z]*$/) && result[i].length === 1)) {
        keyboard__btn[i].classList.add('letter'+result[i].toUpperCase());
    } else {
        const search = what => keys.find(element => element.content === what);
        const found = search(en[i].textContent);
        if (found) {
            keyboard__btn[i].classList.add(found.itemClass);
        }
    }           
}

let ctrlBtn = document.getElementsByClassName('control-left')[1];
let shiftBtn = document.getElementsByClassName('shift-left')[1];
let altBtn = document.getElementsByClassName('alt-left')[1];

removeClass(ctrlBtn, 'control-left')
addClass(ctrlBtn, 'control-right')

removeClass(shiftBtn, 'shift-left');
addClass(shiftBtn, 'shift-right');

removeClass(altBtn, 'alt-left');
addClass(altBtn, 'alt-right');


const $key = (key) => (
    document.querySelector(`div[class='keyboard__btn ${key}']`)    
);


const codeToElement = {
    'Tab': $key('tab'),
    'CapsLock': $key('capslock'),
    'Space': $key('space'),
    'Backspace': $key('backspace'),
    'Backquote': $key('backquote'),
    'Enter': $key('enter'),
    'Delete': $key('delete'),
    'ShiftLeft': $key('shift-left'),
    'ShiftRight': $key('shift-right'),
    'ControlLeft': $key('control-left'),
    'ControlRight': $key('control-right'),
    'AltLeft': $key('alt-left'),
    'AltRight': $key('alt-right'),
    'MetaLeft': $key('window'),
}


const CapsLockOn = () => {
    let letters = document.getElementsByClassName('en');
    for(let i=0; i<letters.length; i++) {
        let letterContent = letters[i].textContent;
        if(letterContent.length === 1) {
            letters[i].innerHTML = letterContent.toLocaleUpperCase();
        }        
    }        
}

const CapsLockOff = () => {
    let letters = document.getElementsByClassName('en');
    for(let i=0; i<letters.length; i++) {
        let letterContent = letters[i].textContent;
        if(letterContent.length === 1) {
            letters[i].innerHTML = letterContent.toLocaleLowerCase();
        }
    }
}

const BackspaceClicked = () => {
    String(textarea).substring(0, textarea.join('').length - 1);
    console.log(textarea);
}

const SpaceClicked = () => {
    textarea += ' ';
}

window.addEventListener('keydown', (e) => {
    const el = codeToElement[e.code] || $key(e.key.toLowerCase());
    let name = e.key;
     
    let findKey = [...document.querySelectorAll(".en")]
   .filter(a => a.textContent.includes(name));

    for(item in findKey) {
        if(findKey.length === 1) {
            console.log('hey', findKey);
            findKey.className = 'en active-key'
        }    
   }

    for (let div of document.getElementsByClassName('en')) {
        if (div.textContent.includes(name) && div.textContent.length === 1) {
            div.parentElement.classList.add('active-key');
        }
   }

    if (el) {
        if(e.code === 'CapsLock') {            
            el.classList.toggle('capslock-on');
            if(el.classList.contains('capslock-on')) {
                CapsLockOn();           
            } else {
                CapsLockOff();
            }
            
        } else {
            el.classList.add('active-key');
            if (e.code === 'ShiftLeft') {
                CapsLockOn();
            } else if (e.code === 'Backspace') {
                BackspaceClicked();
            } else if (e.code === 'Space') {
                SpaceClicked();
            }
        }        
      e.preventDefault();
    } 
    if(en.textContent === 1 || en.textContent === '`') {
        textarea.textContent += e.key;     
        console.log(e.key);
    }
    if(e.code === en.textContent) {
        el.classList.toggle('active-key');
    }
    window.scrollTo(0, document.body.scrollHeight);
});


window.addEventListener('keyup', (e) => {
    const el = codeToElement[e.code] || $key(e.key.toLowerCase());
    const divs = document.querySelector('.active-key');

    if (e.code !== 'CapsLock' && divs) { 
        divs.classList.remove('active-key');
        if (e.code === 'ShiftLeft') {
            CapsLockOff();
        }
        e.preventDefault();
    }
    if(e.code === en.textContent) {
        el.classList.remove('active-key');      
    }
    window.scrollTo(0, document.body.scrollHeight);
})