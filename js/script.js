'use strict';
const faqBtn = document.querySelectorAll('.faq-list-button');
const faqAnswer = document.querySelectorAll('.faq-answer-wrapper');
const faqIcon = document.querySelectorAll('.faq-svg');
const menuBtn = document.querySelector('.hamburger-menuWrapper');
const mobileMenu = document.querySelector('.nav-mobile-block');
const body = document.querySelector('body');


// FAQ implementation
faqBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        faqAnswer.forEach((answer, i) => {
            if (i !== index) {
                answer.classList.remove('faq-is-active');
            }
        });
        faqAnswer[index].classList.toggle('faq-is-active');
        
        faqIcon.forEach((icon, i) => {
            if (i !== index) {
                icon.classList.remove('rotate');
            }
        });
        faqIcon[index].classList.toggle('rotate');
    });
});


// Mobile menu implementation
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile-menu-active');
    body.classList.toggle('mobile-menu-body');
});



