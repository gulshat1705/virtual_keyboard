const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');

wrapper.classList = 'wrapper';
body.append(wrapper);
title.textContent = 'RSS Виртуальная клавиатура'
wrapper.append(title);

textarea.classList = 'textarea';
textarea.setAttribute('id', 'textarea');
wrapper.appendChild(textarea);

keyboard.classList = 'keyboard';
wrapper.append(keyboard);

