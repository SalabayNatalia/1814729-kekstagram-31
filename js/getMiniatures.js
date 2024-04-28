import { photoArray } from './photos.js';
import { openPhotoPopup } from './getPhotoPopup.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturecContainer = document.querySelector('.pictures');

const getMiniatures = function () {
  const miniatures = photoArray();

  const miniatureFragment = document.createDocumentFragment();

  miniatures.forEach((miniature) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = miniature.url;
    pictureElement.querySelector('.picture__img').alt = miniature.description;
    pictureElement.querySelector('.picture__likes').textContent = miniature.likes;
    pictureElement.querySelector('.picture__comments').textContent = miniature.comments.length;

    pictureElement.addEventListener('click', () => {
      openPhotoPopup(miniature);
    });

    miniatureFragment.appendChild(pictureElement);
  });
  picturecContainer.appendChild(miniatureFragment);
};

export { getMiniatures };

// Отобразить фотографии других пользователей.

// Заведите модуль, который будет отвечать за отрисовку миниатюр.

// На основе временных данных для разработки и шаблона #picture создайте DOM - элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок.picture__likes.
// Количество комментариев comments выведите в блок.picture__comments.
// Отрисуйте сгенерированные DOM - элементы в блок.pictures.Для вставки элементов используйте DocumentFragment.

// Подключите модуль в проект.
