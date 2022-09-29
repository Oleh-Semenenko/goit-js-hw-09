import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const currentDate = new Date();
const refs = {
  startBtn: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
};

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] <= currentDate) {
          alert("Please choose a date in the future");
          refs.startBtn.setAttribute('disabled', true);
      }
      refs.startBtn.removeAttribute('disabled');
  },
};
flatpickr('input#datetime-picker', options);




options.onClose(currentDate)    










