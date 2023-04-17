
let mobileMenu = document.getElementById('menu_mobile');
let closeMenu = document.getElementById('menu_close_mobile');
let mobileDivMenu = document.querySelector('.mobile_nav_section');


mobileMenu.addEventListener('click' , () => {
    mobileDivMenu.classList.toggle('active');
});

closeMenu.addEventListener('click' , () => {
    mobileDivMenu.classList.remove('active');
});

