import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const {
  elements: { email, message },
} = formRef;

const onFormChange = e => {
  const savedData = {};

  savedData.email = email.value;
  savedData.message = message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};

if (localStorage.getItem(STORAGE_KEY)) {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  email.value = savedData.email;
  message.value = savedData.message;
}

const onSubmitForm = e => {
  e.preventDefault();

  console.log({
    email: email.value,
    message: message.value,
  });

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

formRef.addEventListener('input', throttle(onFormChange, 500));
formRef.addEventListener('submit', onSubmitForm);
