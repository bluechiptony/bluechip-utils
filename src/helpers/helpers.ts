import * as CamelCaseKeys from 'camelcase-keys';

export const upperFirstCharacter = (word: string): string => {
  if (word.length === 1) {
    return word.toUpperCase();
  }
  return word.charAt(0).toUpperCase() + word.substring(1);
};

export const isValidEmail = (email: string): boolean => {
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  return valid.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const valid = RegExp(/^\d{4}\d{3}\d{4}$/);
  return valid.test(phone);
};

export const getDateStringFromTime = (time: number): string => {
  let currentDate = new Date(time);
  return currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear();
};

export const camelizeCase = (item: any) => {
  return CamelCaseKeys(item);
};

let arrayConjunctions = ['for', 'and', 'the', 'a', 'so', 'nor', 'or'];
export const convertToNameCase = (text: string) => {
  text.replace('  ', ' ').toLowerCase();
  text = text.trim();
  let breakText = text.split(' ');

  for (let index = 0; index < breakText.length; index++) {
    if (!arrayConjunctions.includes(breakText[index + 1])) {
      breakText[index] = convertWordToSentenceCase(breakText[index]);
    }
  }
  return breakText.join(' ');
};

export const convertWordToSentenceCase = (text: string) => {
  text = text.trim();
  text.replace('  ', ' ').toLowerCase();
  let breakText = text.split('');
  for (let index = 0; index < breakText.length; index++) {
    if (index == 0) {
      breakText[index] = breakText[index].toUpperCase();
    } else {
      breakText[index] = breakText[index].toLowerCase();
    }
  }
  return breakText.join('');
};
