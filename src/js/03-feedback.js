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
  console.log(
    'поточні значення полів з сховища',
    localStorage.removeItem(STORAGE_KEY)
  );
}

function formInput(e) {
  formStorage[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formStorage));

  console.log(
    'поточні значення полів форми',
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formStorage))
  );
}
