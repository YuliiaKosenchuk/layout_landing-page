'use strict';

const burger = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.icon--close');
const body = document.body;

burger.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('no-scroll');
});

const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});
