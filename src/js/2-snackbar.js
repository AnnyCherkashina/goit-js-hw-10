import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const delay = +event.currentTarget.elements.delay.value;
    const btnRadio = event.currentTarget.elements.state.value;

    createPromise(btnRadio, delay)
        .then(res => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`
            });
        })
        .catch(error => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`
            });
        });
    event.currentTarget.reset();
}

function createPromise(btn, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (btn === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}