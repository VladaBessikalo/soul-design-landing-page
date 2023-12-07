"use srtict"

const hireBtn = document.querySelector('.main__hire-button');
const modalContainer = document.querySelector('.modal__container');
const sendBtn = document.querySelector('modal__button_send');
const closeBtn = document.querySelector('.modal__close-btn');
const inputs = document.querySelectorAll('.modal__input');
const resetBtn = document.querySelector('.modal__button_reset');
const uploadCvBtn = document.querySelector('.main__cv-button');
const fileChosen = document.getElementById('file-chosen');
const sendCv = document.querySelector('#send-cv');

hireBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})

inputs.forEach((input) => {
    resetBtn.addEventListener('click', () => {
        input.value = '';
    })
})

uploadCvBtn.addEventListener('change', function(e) {
    fileChosen.textContent = e.target.files[0].name;
    console.log(e.target.files);

    sendCv.style.display = 'block';
})

sendCv.addEventListener('click', function() {
        fileChosen.style.display = 'none';
        sendCv.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.items-works__type');
    const items = document.querySelectorAll('.items-works__item');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-work-type');

            items.forEach(item => {
                if (filter === '' || filter === item.getAttribute('data-work-type')) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            })
        })
    })
})

