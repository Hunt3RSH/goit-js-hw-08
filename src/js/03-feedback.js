import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', submitClick);

let formStorage = {
  email: '',
  message: '',
};

function submitClick(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function formInput(e) {
  formStorage[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formStorage));
}

function savedMessage() {
  formStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? formStorage;

  try {
    for (let key in formStorage) {
      form.elements[key].value = formStorage[key];
    }
  } catch ({ name, message }) {
    console.log(name);
    console.log(message);
  }
}

savedMessage();
