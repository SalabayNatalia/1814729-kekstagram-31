const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const messages = ['Всё отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ?'];
const names = ['Майра', 'Марс', 'Куся', 'Бэлла', 'Сэм', 'Бэтти', 'Арчи', 'Ричи', 'Чебурашка', 'Пашка'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { ESC_KEYCODE, ENTER_KEYCODE, messages, names, getRandomInteger, getRandomArrayElement };
