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