// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`,
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryEl);

// const galleryLinkRefs = document.querySelectorAll('.gallery__item');
// galleryLinkRefs.forEach(galleryLinkRef => {
//   const onGalleryLink = e => {
//     e.preventDefault();

//     console.log('click');
//   };
//   galleryLinkRef.addEventListener('click', onGalleryLink);
// });

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
