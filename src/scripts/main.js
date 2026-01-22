'use strict';
const burger = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu');

burger.addEventListener('click', (e) => {
  menu.classList.add('active');
});

const closeBtn = document.querySelector('.icon--close');

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
