document.addEventListener('DOMContentLoaded', () => {

    const reviewImages = [
        'image_1.jpg',
        'image_2.jpg',
        'image_3.jpg',
        'image_4.jpg',
        'image_5.jpg',
        'image_6.jpg',
        'image_7.jpg',
        'image_8.jpg',
        'image_9.jpg',
        'image_10.jpg',
        'image_11.jpg',
        'image_12.jpg',
        'image_13.jpg',
        'image_14.jpg',
        'image_15.jpg',
        'image_16.jpg',
        'image_17.jpg',
        'image_18.jpg',
        'image_19.jpg',
        'image_20.jpg',
        'image_21.jpg',
        'image_22.jpg',
        'image_23.jpg',
        'image_24.jpg',
        'image_25.jpg',
        'image_26.jpg',
        'image_27.jpg',
        'image_28.jpg',
        'image_29.jpg',
        'image_30.jpg',
        'image_31.jpg',
        'image_32.jpg',
        'image_33.jpg',
        'image_34.jpg',
        'image_35.jpg',
        'image_36.jpg',
        'image_37.jpg',
        'image_38.jpg',
        'image_39.jpg',
        'image_40.jpg',
        'image_41.jpg',
        'image_42.jpg',
        'image_43.jpg',
        'image_44.jpg',
        'image_45.jpg',
        'image_46.jpg',
        'image_47.jpg',
        'image_48.jpg',
        'image_49.jpg',
        'image_50.jpg',
        'image_51.jpg',
        'image_52.jpg',
        'image_53.jpg',
        'image_54.jpg',
        'image_55.jpg',
        'image_56.jpg',
        'image_57.jpg',
        'image_58.jpg',
        'image_59.jpg',
        'image_60.jpg',
        'image_61.jpg',
        'image_62.jpg',
        'image_63.jpg',
        'image_64.jpg',
        'image_65.jpg',
        'image_66.jpg',
        'image_67.jpg',
        'image_68.jpg',
        'image_69.jpg',
        'image_70.jpg',
        'image_71.jpg',
        'image_72.jpg',
        'image_73.jpg',
        'image_74.jpg',
        'image_75.jpg',
        'image_76.jpg'
    ];

    const track = document.querySelector('.reviews-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.reviews-slider');

    if (!track) return;

    // 2. Генерация HTML структуры
    reviewImages.forEach(fileName => {
        const card = document.createElement('div');
        card.className = 'review-card-img';

        // Используем data-src для отложенной загрузки
        card.innerHTML = `
      <img data-src="src/img/reviews/${fileName}" alt="Отзыв клиента" loading="lazy">
    `;
        track.appendChild(card);
    });

    // 3. Реализация Lazy Loading через IntersectionObserver
    const lazyImages = track.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Переносим путь в src, картинка начинает скачиваться
                img.removeAttribute('data-src');
                observer.unobserve(img); // Перестаем следить за этой картинкой
            }
        });
    }, {
        root: slider, // Отслеживаем появление относительно окна слайдера
        rootMargin: '0px 300px 0px 300px' // Загружаем картинку за 300px до того, как пользователь её увидит
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // 4. Логика слайдера для Десктопа
    let currentIndex = 0;
    const cards = track.querySelectorAll('.review-card-img');

    function getSlidesPerView() {
        return window.innerWidth > 768 ? 3 : 1;
    }

    function updateSlider() {
        if (window.innerWidth <= 768) return; // На мобилке работает нативный скролл

        const slidesPerView = getSlidesPerView();
        const maxIndex = cards.length - slidesPerView;

        // Ограничиваем индекс
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        // Считаем ширину шага
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 30; // значение gap из CSS
        const offset = currentIndex * (cardWidth + gap);

        track.style.transform = `translateX(-${offset}px)`;

        // Доступность кнопок
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex += getSlidesPerView();
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex -= getSlidesPerView();
        updateSlider();
    });

    // Пересчет при изменении экрана
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            track.style.transform = 'none'; // Сбрасываем трансформ на мобилке
        } else {
            updateSlider();
        }
    });

    // Инициализация стрелок
    if (window.innerWidth > 768) {
        updateSlider();
    }
});