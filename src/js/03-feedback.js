import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

// Відстеження події input та збереження значень полів у локальне сховище
form.addEventListener('input', throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500));

// Заповнення полів форми зі збереженими значеннями під час завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem(localStorageKey);
  if (storedData) {
    const formData = JSON.parse(storedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

// Очищення сховища та виведення даних форми під час сабміту
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log('Form Data:', formData);

  // Очистка сховища та полів форми
  localStorage.removeItem(localStorageKey);
  form.reset();
});

