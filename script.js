const openBtn = document.querySelector(".open_menu");
const closeBtn = document.querySelector(".close_menu");
const mainMenu = document.querySelector(".main_menu");

openBtn.addEventListener('click', show);
closeBtn.addEventListener('click', shut);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function shut(){
    mainMenu.style.top = '-100%';
}