import { CLASS_LIST } from '../common/constants';

export const hideLoader = () => {
  const loader = document.querySelector(`.${CLASS_LIST.loader}`);
  loader.classList.add(CLASS_LIST.hidden);
};

export const unhideLoader = () => {
  const loader = document.querySelector(`.${CLASS_LIST.loader}`);
  loader.classList.remove(CLASS_LIST.hidden);
};
