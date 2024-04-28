import { isEscapeKey } from './utils';

const miniatures = document.querySelectorAll('.pictures');
const bigPicture = document.querySelector('.big-picture');
const buttonClosePopup = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
// function onMiniatureClick(evt) {
//   if (evt.target.matches('.picture')) {
//     bigPicture.classList.remove('hidden');
//   }
// }

const onPopupEskKeydown = (evt) => {
  if (isEscapeKey) {
    evt.preventDefault();
    closePhotoPopup();
  }
};

const onPhotoPoputCloseElementClick = (evt) => {
  evt.preventDefault();
  closePhotoPopup();
};

const openPhotoPopup = function (photoPopup) {
  miniatures.forEach((miniature) => {
    miniature.addEventListener('click', (evt) => {
      evt.preventDefault();

      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');

      const { url, likes, comments, description } = photoPopup;
      bigPicture.querySelector('.big-picture__img img').src = url;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.social__comment-shown-count').textContent = comments.lenght;
      bigPicture.querySelector('.social__caption').textContent = description;
      // document.querySelector('.social__comments')
      // bigPicture.querySelector('.social__comment-total-count').textContent =
    });
  });
};

function closePhotoPopup() {
  bigPicture.classList.add('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonClosePopup.addEventListener('click', onPhotoPoputCloseElementClick);

  document.addEventListener('keydown', onPopupEskKeydown);
}

export { openPhotoPopup, closePhotoPopup };
// const selectedCategoryContainer = document.querySelector('#selected-category');

// const form = document.querySelector('form');

// function onFilterChange(evt) {
//   if (evt.target.matches('input[type="radio"]')) {
//     selectedCategoryContainer.textContent = evt.target.value;

//     if (evt.target.closest('.discount-100')) {
//       selectedCategoryContainer.classList.add('special-category');
//     } else {
//       selectedCategoryContainer.classList.remove('special-category');
//     }
//   }
// }

// form.addEventListener('change', onFilterChange);


// Задача
// Реализовать сценарий просмотра фотографий в полноразмерном режиме.В таком режиме пользователь получает несколько дополнительных возможностей: детально рассмотреть изображение, поставить «лайк», почитать комментарии, оставленные другими пользователями.

// Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением.

// Окно должно открываться при клике на миниатюру.Данные для окна(изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.

// Для отображения окна нужно удалять класс hidden у элемента.big - picture и каждый раз заполнять его данными о конкретной фотографии:

// Адрес изображения url подставьте как src изображения внутри блока.big - picture__img.

// Количество лайков likes подставьте как текстовое содержание элемента.likes - count.

// Количество показанных комментариев подставьте как текстовое содержание элемента.social__comment - shown - count.

// Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента.social__comment - total - count.

// Список комментариев под фотографией: комментарии должны вставляться в блок.social__comments.Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//     <p class="social__text">{{ текст комментария }}</p>
// </li>

// Копировать

// Описание фотографии description вставьте строкой в блок.social__caption.

// После открытия окна спрячьте блоки счётчика комментариев.social__comment - count и загрузки новых комментариев.comments - loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

// После открытия окна добавьте тегу < body > класс modal - open, чтобы контейнер с фотографиями позади не прокручивался при скролле.При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Подключите модуль в проект.
