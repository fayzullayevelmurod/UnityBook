const burger = document.querySelector('.burger');
const mediaMenu = document.querySelector('.media_menu');
const mediaMenuBg = document.querySelector('.media_menu_wrapper');
const menuClose = document.querySelector('.burger_close');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    mediaMenu.classList.toggle('active');
    mediaMenuBg.classList.toggle('active');
    body.classList.add('hidden');
});

menuClose.addEventListener('click', () => { 
    mediaMenu.classList.remove('active');
    mediaMenuBg.classList.remove('active');
    body.classList.remove('hidden');
});

