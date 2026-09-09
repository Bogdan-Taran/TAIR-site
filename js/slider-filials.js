$(document).ready(function() {
    function initSlider() {
        const $slider = $('.academ-content-photo .slick-wrapper');
        if ($slider.length === 0) return;

        // Проверяем ширину экрана
        if (window.innerWidth <= 480) {
            $slider.not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: true,
                adaptiveHeight: true, // чтобы высота подстраивалась под картинку
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        } else {
            // Если вдруг слайдер был инициализирован раньше, уничтожаем его на больших экранах
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        }
    }

    // Инициализируем сразу
    initSlider();

    // Пересоздаём слайдер при изменении размера окна (если нужно)
    $(window).on('resize', function() {
        initSlider();
    });
});
