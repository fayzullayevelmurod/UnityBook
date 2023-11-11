
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

let select_btn = document.querySelector('footer .select .head');
let select_text = document.querySelector('footer .select .head span')
let select_input = document.querySelector('footer .select .head input')
let select = document.querySelector('footer .select');
let select_items = document.querySelectorAll('footer .select .result button');

select_btn.onclick = () => {
    select.classList.add('active')
    select_input.focus();
}

select_items.forEach(item => {
    item.onclick = () => {
        select_text.innerText = item.textContent;
        select.classList.remove('active')
    }
})

document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.querySelector('footer .select');

    if (!box.contains(event.target)) {
        box.classList.remove('active')
    }
});
