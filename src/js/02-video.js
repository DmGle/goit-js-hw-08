import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const localStorageKey = 'videoplayer-current-time';

// Отримання елемента, на якому буде ініціалізований плеєр
const playerElement = document.getElementById('vimeo-player');
const player = new Player(playerElement);

// Ініціалізація плеєра та відстеження події timeupdate
player.ready().then(() => {
  // Отримання часу відтворення з локального сховища та відновлення його
  const storedTime = localStorage.getItem(localStorageKey);
  if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
  }

  player.on('timeupdate', throttle(() => {
    // Відстеження події timeupdate та збереження часу в локальному сховищі
    const currentTime = player.currentTime;
    localStorage.setItem(localStorageKey, currentTime);
  }, 1000));
});

// Під час перезавантаження сторінки методом setCurrentTime() відновлюємо відтворення зі збереженої позиції
window.addEventListener('beforeunload', () => {
  player.getCurrentTime().then((currentTime) => {
    localStorage.setItem(localStorageKey, currentTime);
  });
});
