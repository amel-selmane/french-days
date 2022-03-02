// HANDLE COUNTER
const counterWeeks = document.querySelector('.mainBanner__counter__week'),
counterDays = document.querySelector('.mainBanner__counter__day'),
counterMinutes = document.querySelector('.mainBanner__counter__minute'),
counterSeconds = document.querySelector('.mainBanner__counter__second');

setInterval(() => {
    // TARGET DATE (in english please :)) //
    const limitDate = new Date("April 1, 2022 22:00:00").getTime(),
    // ---------------------------------- //

    now = new Date().getTime(),
    timeBetween = limitDate - now,

    weeks = Math.floor(timeBetween / (1000 * 60 * 60 * 24 * 7)),
    days = Math.floor(timeBetween / (1000 * 60 * 60 * 24)),
    minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

    counterWeeks.textContent = weeks;
    counterDays.textContent = days;
    counterMinutes.textContent = minutes;
    counterSeconds.textContent = seconds;
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