import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const {
  elements: { email, message },
} = formRef;

const onFormChange = e => {
  const savedData = {};

  savedData.email = email.value;
  savedData.message = message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
};

if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

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
  localStorage.removeItem('feedback-form-state');
};

formRef.addEventListener('input', throttle(onFormChange, 500));
formRef.addEventListener('submit', onSubmitForm);
