let keys = [
    {
        id: 1,
        itemClass: 'backquote',
        content: '`'
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
        itemClass: 'alt',
        content: 'Alt', 
    },
    {
        id: 27,
        itemClass: 'Space',
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
let contentValue = (keys) => {
    let contentArray = [];
    for (let item of keys) {
        contentArray.push(item.content);
    }
    return contentArray.flat();
} 

let result = contentValue(keys);



for(let i=0; i<en.length; i++) {
    en[i].textContent = result[i];
        
    if(Number(result[i])) {
        en[i].classList.add('number'+i);
        if(result[i]==='0') {
            en[i].classList.add('number0');
        } 

    } else if(Boolean(result[i].match(/^[A-Za-z]*$/) && result[i].length === 1)) {
        en[i].classList.add('letter'+result[i].toUpperCase());
    } else {
        keys.find(
            obj => obj.itemClass !== null
            
            )
        //   console.log(otherValues[3].itemClass); 
        console.log(en[i])
        let r = keys.filter(o => en[i] === o.content);
            console.log(r.itemClass)
        // en[i].classList.add(`${keys.itemClass}`)
        }   
        
}



// window.addEventListener(
//     "keydown",
//     (event) => {

//         for(let i=0; i<en.length;i++) {
//             en[i].textContent = event.key;
//         }

//         console.log(`KeyboardEvent: key='${event.key}' | code='${event.code}'`)
//         console.log(key);
      
//     //   textarea.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;

//     //   document.getElementById("output").appendChild(p);
//       window.scrollTo(0, document.body.scrollHeight);
//     },
//     true
//   );

  //Function
function keyboardEvents(e) {
    e.preventDefault();
    textarea.textContent += e.key;
    // keyCodeEvent.textContent = e.keyCode;
    // CodeEvent.textContent = e.code;
    // whichEvent.textContent = e.which;
    }
    // Event Handler
    window.addEventListener("keydown", keyboardEvents);
