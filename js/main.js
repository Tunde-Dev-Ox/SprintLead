'use strict';
const routeApply = document.querySelectorAll('.apply-route');
const registerBtn = document.querySelector('#register');


//route apply button
routeApply.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "/apply.html";
    });
});


// Mobile menu implementation
import { menu } from './menu.js';
menu();

// FAQ implementation
import { faq } from './faq.js';
faq();

import { apply } from './apply.js';
apply();



