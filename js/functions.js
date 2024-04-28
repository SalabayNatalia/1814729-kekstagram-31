function isStringLengthValid(string = '', stringMaxLength = 1) {
  const stringLength = string.length - 1;
  const compareStringLength = stringLength <= stringMaxLength;
  return compareStringLength;
}

function isPalindrome(string = '') {
  const stringNormalize = string.toUpperCase().replaceAll(' ', '');
  let newString = '';
  const index = stringNormalize.length - 1;
  for (let i = index; i >= 0; i--) {
    newString += stringNormalize.at(i);
  }
  return newString === stringNormalize;
}

function getNumbers(string = '') {
  const index = string.length - 1;
  let newString = '';
  for (let i = 0; i <= index; i++) {
    newString += parseInt(string.at(i), 10);
  }
  return newString;
}

const extractNumber = (string = '') => Math.abs(parseInt(string.replace(/\D+/g, ''), 10));

// Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

// Время указывается в виде строки в формате часы: минуты.Для указания часов и минут могут использоваться как две цифры, так и одна.Например, 8 часов 5 минут могут быть указаны по - разному: 08:05, 8: 5, 08: 5 или 8:05.

// Продолжительность задаётся числом.Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.

//   /*
//   '8:00' - начало рабочего дня
//   '17:30' - конец рабочего дня
//   '14:00' - начало встречи
//   90 - продолжительность встречи в минутах
//   */
//   isMeetingCompleted('08:00', '17:30', '14:00', 90); // true
// isMeetingCompleted('8:0', '10:0', '8:0', 120);     // true
// isMeetingCompleted('08:00', '14:30', '14:00', 90); // false
// isMeetingCompleted('14:00', '17:30', '08:0', 90);  // false
// isMeetingCompleted('8:00', '17:30', '08:00', 900); // fal

const timeStringToMinutes = (timeString) => {
  const splitTime = timeString.split(':');
  const formattedTime = splitTime.map((i) => Number(i));
  return formattedTime[0] * 60 + formattedTime[1];
};

function isMeetingCompleted(startDay, endDay, startMeet, duration) {
  const startDayToMinetes = timeStringToMinutes(startDay);
  const endDayToMinetes = timeStringToMinutes(endDay);
  const startMeetToMinetes = timeStringToMinutes(startMeet);
  const endMeet = startMeetToMinetes + duration;
  return startMeetToMinetes >= startDayToMinetes && endMeet <= endDayToMinetes;
}
