import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';


const createGalleryMarkup = items => {
  return items
    .map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>
    `)
    .join('');
};

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

gallery.addEventListener('click', (event) => {
  if (event.target.classList.contains('gallery__image')) {
    event.preventDefault();

    const imageURL = event.target.getAttribute('data-source');
    const imageAlt = event.target.getAttribute('alt');

    lightbox.open({
      items: [{
        src: imageURL,
        title: imageAlt
      }]
    });
  }
});

console.log(galleryItems);