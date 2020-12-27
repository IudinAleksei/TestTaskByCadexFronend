import { CLASS_LIST } from '../common/constants';

const parseSizeFromInputs = () => {
  const inputs = Array.from(document.querySelectorAll(`.${CLASS_LIST.sizeInput}`));
  const boxSizes = inputs.reduce((acc, input) => {
    acc[input.dataset.size] = +input.value;
    return acc;
  }, {});

  return boxSizes;
};

const formClickHander = () => {
  const form = document.querySelector(`.${CLASS_LIST.sizeForm}`);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(parseSizeFromInputs());
  });
};

export default formClickHander;
