// HANDLE COUNTER
const counterDays = document.querySelector('.countdown__daysValue'),
counterHours = document.querySelector('.countdown__hoursValue'),
counterMinutes = document.querySelector('.countdown__minutesValue'),
counterSeconds = document.querySelector('.countdown__secondsValue');

let countdown = setInterval(() => {
    // TARGET DATE //
    const limitDate = new Date("April 1, 2022 22:00:00").getTime(),
    // ---------------------------------- //

    now = new Date().getTime(),
    timeBetween = limitDate - now,

    days = Math.floor(timeBetween / (1000 * 60 * 60 * 24)),
    hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((timeBetween / (1000 * 60)) % 60),
    seconds = Math.floor((timeBetween / 1000) % 60);

    counterDays.textContent = days;
    counterHours.textContent = hours;
    counterMinutes.textContent = minutes;
    counterSeconds.textContent = seconds;

    if (timeBetween <= 0) clearInterval(countdown);
}, 1000)

const buyButton = document.querySelector('.productPush__info__buyButton');
buyButton.addEventListener('click', () => window.alert('MERCI POUR VOTRE ACHAT !'));

// HANDLE SLIDER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    speed: 600,
    breakpoints: {
        1100: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});