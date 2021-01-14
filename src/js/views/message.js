import { CLASS_LIST } from '../common/constants';

export const hideMessage = () => {
  const messageContainer = document.querySelector(`.${CLASS_LIST.message}`);
  messageContainer.innerHTML = '';
  messageContainer.classList.add(CLASS_LIST.hidden);
};

export const showMessage = (text) => {
  const messageContainer = document.querySelector(`.${CLASS_LIST.message}`);
  messageContainer.innerHTML = text;
  messageContainer.classList.remove(CLASS_LIST.hidden);
};
