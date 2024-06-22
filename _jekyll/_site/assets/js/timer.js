/*!
 * timer.js
 *
 * (C) 2016 OGAWA Katsuhiro
 */
!function () {

  class Timer {
    #seconds;
    #timerId;
    constructor(display, audio) {
      this.display = display;
      this.displayTime = display.querySelector('.timer-display__time');
      this.audio = audio;
      this.#timerId = null;
      this.#seconds = 0;
    }

    update() {
      this.displayTime.textContent = toTimeString(this.#seconds)

      this.display.classList.remove('timer-display--warning', 'timer-display--alert', 'timer-display--timeup')
      if (this.#seconds <= 0) {
        this.display.classList.add('timer-display--timeup')
      } else if (this.#seconds <= 30) {
        this.display.classList.add('timer-display--alert')
      } else if (this.#seconds <= 60) {
        this.display.classList.add('timer-display--warning')
      }
    }

    start(ts) {
      this.reset(ts);

      this.#timerId = setInterval(() => {
        this.#seconds = this.#seconds - 1;
        this.update();

        if (this.#seconds == 0) {
          this.gong();
        }
      }, 1000/* 1s */);

      return this.#timerId;
    }

    reset(ts) {
      this.#seconds = toSeconds(ts);
      this.update();

      if (this.#timerId) {
        clearInterval(this.#timerId);
        this.#timerId = null;
      }
    }

    gong() {
      if (this.audio) {
        this.audio.play();
      }
    }
  }

  function toSeconds(timeString) {
    const parts = timeString.split(':');
    if (parts.length !== 2) {
      throw new TypeError('Invalid time format. Expected "MM:SS".');
    }

    const [minutes, seconds] = parts.map(Number);
    if (isNaN(minutes) || isNaN(seconds) || Math.abs(seconds) >= 60) {
      throw new TypeError('Invalid time values. Expected "MM:SS" with valid minute and second values.');
    }

    return minutes * 60 + seconds;
  }

  function toTimeString(seconds) {
    const absSeconds = Math.abs(seconds);
    const sign = seconds < 0 ? '-' : '';
    const minutes = Math.floor(absSeconds / 60);
    const remainingSeconds = absSeconds % 60;
    return `${sign}${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio('/assets/audio/dora.wav')
    audio.volume = 1.0;

    const display = document.getElementById('timer-display');
    const timer = new Timer(display, audio);

    const time = document.querySelector("#timer-input");
    const timeInput = time.querySelector(".input-field");
    const timePicker = time.querySelector(".time-picker");
    const start = document.querySelector("#timer-start");
    const gong = document.querySelector("#timer-gong");
    const reset = document.querySelector("#timer-reset");

    start.addEventListener("click", () => timer.start(timeInput.value))
    gong.addEventListener("click", () => timer.gong())
    reset.addEventListener("click", () => timer.reset(timeInput.value))

    timeInput.addEventListener('focus', () => {
      const rect = timeInput.getBoundingClientRect();
      timePicker.style.top = rect.bottom + window.scrollY + 'px';
      timePicker.style.left = rect.left + window.scrollX + 'px';
      timePicker.style.display = 'block';
    });

    document.addEventListener('click', (event) => {
      if (!timeInput.contains(event.target) && !timePicker.contains(event.target)) {
        timePicker.style.display = 'none';
      }
    });

    timePicker.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        timeInput.value = event.target.getAttribute('data-time');
        timePicker.style.display = 'none';
      }
    });

    timeInput.addEventListener('change', () => {
      try {
        timeInput.classList.remove('input-field--error');
        toSeconds(timeInput.value)
      } catch (e) {
        if (e instanceof TypeError) {
          timeInput.classList.add('input-field--error');
        }
      }

    });
  })

}();
