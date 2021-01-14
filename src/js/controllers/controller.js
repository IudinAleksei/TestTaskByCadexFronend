import { CLASS_LIST } from '../common/constants';
import requestToApi from '../model/network';
import { hideLoader, unhideLoader } from '../views/loader';
import render3d from '../views/3drender';
import { hideMessage, showMessage } from '../views/message';

const STATE = {
  verts: null,
};

export const resizeHandler = () => {
  window.addEventListener('resize', () => {
    if (!STATE.verts) return;
    render3d(STATE.verts);
  });
};

const parseSizeFromInputs = () => {
  const inputs = Array.from(document.querySelectorAll(`.${CLASS_LIST.sizeInput}`));
  const boxSizes = inputs.reduce((acc, input) => {
    const temp = `${acc}&${input.dataset.size}=${input.value}`;
    return temp;
  }, '');

  return boxSizes.slice(1);
};

export const formClickHander = () => {
  const form = document.querySelector(`.${CLASS_LIST.sizeForm}`);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    unhideLoader();
    hideMessage();
    const sizesString = parseSizeFromInputs();

    const response = await requestToApi(sizesString);

    hideLoader();

    if (response === 'Connection error') {
      showMessage(response);
      return;
    }

    if (response === 'Incorrect box sizes') {
      showMessage(response);
      return;
    }

    STATE.verts = response;

    render3d(STATE.verts);
  });
};
