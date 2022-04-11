import generateHome from './home';
import generateMenu from './menu';
import generateContact from './contact';

const content = document.querySelector('#content')
const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const contactBtn = document.querySelector('#contact')

function clearContent() {
    content.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clearContent();
    generateHome();
})

menuBtn.addEventListener('click', () => {
    clearContent();
    generateMenu();
})

contactBtn.addEventListener('click', () => {
    clearContent();
    generateContact();
})