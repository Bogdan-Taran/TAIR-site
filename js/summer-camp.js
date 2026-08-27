document.addEventListener('DOMContentLoaded', function () {
    const photocards = document.querySelector('.summer-camp-photocards');
    const leftBtn = document.querySelector('.left-btn-media');
    const rightBtn = document.querySelector('.right-btn-media');
    const dots = document.querySelectorAll('.dot');

    const cardWidth = document.querySelector('.card-beret').offsetWidth + 10; // + gap
    const visibleCards = 4; // максимум 4 карточки
    const totalCards = document.querySelectorAll('.card-beret').length;
    const totalSlides = Math.ceil(totalCards / visibleCards); // 12 / 4 = 3 слайда

    let currentSlide = 0;

    function updateCarousel() {
        photocards.style.transform = `translateX(-${currentSlide * visibleCards * cardWidth}px)`;

        // Обновляем точки
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    rightBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        }
    });

    leftBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });

    // Клик по точке
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
});



