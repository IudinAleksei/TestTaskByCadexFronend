import { CLASS_LIST } from '../common/constants';
import requestToApi from '../model/network';

const parseSizeFromInputs = () => {
  const inputs = Array.from(document.querySelectorAll(`.${CLASS_LIST.sizeInput}`));
  const boxSizes = inputs.reduce((acc, input) => {
    const temp = `${acc}&${input.dataset.size}=${input.value}`;
    return temp;
  }, '');

  return boxSizes.slice(1);
};

const formClickHander = () => {
  const form = document.querySelector(`.${CLASS_LIST.sizeForm}`);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const sizesString = parseSizeFromInputs();
    console.log(await requestToApi(sizesString));
  });
};

export default formClickHander;
