const menuMobileBtn = document.querySelector('#menuBtnMobile');
const menuMobileIcon = document.querySelector('#menuMobileIcon');
const mobileMenu = document.querySelector('#mobileMenu');
const backBtn = document.querySelector('#backBtn');
const headerLogo = document.querySelector('#headerLogo');
const siteMapLink = document.querySelector('#siteMapLink');
const siteSearchLink = document.querySelector('#siteSearchLink');
const headerText = document.querySelector('.header_mobile-text');
const header = document.querySelector('.header');
const mainContent = document.querySelector('.mainContent');
const footer = document.querySelector('.footer');
const menuMobileSublists = document.querySelectorAll('.mobile-menu_sublist');

import { classToggler } from "../utils/index.js";

if (menuMobileBtn) {
    menuMobileBtn.addEventListener('click', () => {
        classToggler([menuMobileIcon, mobileMenu], 'active');
        classToggler([siteMapLink, siteSearchLink], 'd-none');
        if (mainContent && footer) {
            classToggler([mainContent, footer], 'd-none');
        }
        classToggler(header, 'fixed');


        if (!mobileMenu.classList.contains("active")) {
            backBtn.classList.add("d-none");
            headerLogo.classList.remove("d-none");
            headerText.textContent = '';

            const activeLists = document.querySelectorAll(".mobile-menu_list_inner.active");
            activeLists.forEach(list => list.classList.remove("active"));
        }

        menuMobileSublists.forEach((menuSublist) => {
            if (menuSublist.classList.contains('d-none')) menuSublist.classList.remove('d-none');
        })
    });
}