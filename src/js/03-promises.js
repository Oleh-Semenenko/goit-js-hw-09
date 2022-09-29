import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

refs.form.addEventListener('input', onInputChange);
refs.form.addEventListener('submit', onBtnSubmit);

const onSuccess = ({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onError = ({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

const object = {};

function onInputChange(event) {
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  object.delay = delay.value;
  object.step = step.value;
  object.amount = amount.value;

  return object;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return (promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }));
}

function onBtnSubmit(event) {
  event.preventDefault();

  for (let i = 1; i <= object.amount; i += 1) {
    const commonDelay = Number(object.delay) + Number(object.step) * i;
    createPromise(i, commonDelay).then(onSuccess).catch(onError);
  }
}
