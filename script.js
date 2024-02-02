// Declaring Global variables
const navMenu = document.getElementById('nav-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavContainer = document.querySelector('.mobile-nav-container');
const navClose = document.getElementById('nav-close');

// Adding event listener for nav menu
navMenu.addEventListener('click', handleNav);

function handleNav() {
    mobileNav.style.right = '0';
    mobileNavContainer.style.right = '0'
}

// Adding event listener to nav close
navClose.addEventListener('click', handleClose);

function handleClose() {
    mobileNav.style.right = '-100%';
    mobileNavContainer.style.right = '-100%';
}