fetch('../pages/sections/reviews.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети при загрузке отзывов');
        }
        return response.text();
    })
    .then(html => {
        // 1. Находим контейнер и вставляем HTML
        const container = document.querySelector('#reviews-section');
        container.innerHTML = html;

        // 2. Инициализируем Slick ПОСЛЕ вставки HTML
        // Используем jQuery, так как Slick требует его
        const $slider = $(container).find('.reviews-slider');

        // $slider.slick({
        //     lazyLoad: 'ondemand', // Ленивая загрузка для data-lazy
        //     prevArrow: $('.prev-btn'), // Привязываем вашу кнопку "Назад"
        //     nextArrow: $('.next-btn'),  // Привязываем вашу кнопку "Вперед"
        //     slidesToShow: 3, // Добавьте другие нужные вам настройки слайдера
        //     slidesToScroll: 1,
        //     infinite: true,
        //     dots: false
        // });

        $slider.slick({
            lazyLoad: 'ondemand',
            prevArrow: $(container).find('.prev-btn'),
            nextArrow: $(container).find('.next-btn'),

            // Настройки по умолчанию (для десктопа)
            slidesToShow: 3, // Сколько карточек показывать на большом экране
            slidesToScroll: 1,
            dots: false,

            // АДАПТИВНЫЕ НАСТРОЙКИ
            responsive: [
                {
                    breakpoint: 1024, // Планшеты
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480, // Мобильные устройства (как в вашем @media)
                    settings: {
                        slidesToShow: 1, // <-- ПОКАЗЫВАЕМ ТОЛЬКО 1 КАРТОЧКУ
                        slidesToScroll: 1,
                        arrows: true, // Можно поставить false, чтобы на телефоне работал только свайп
                        dots: false    // Опционально: добавить точки-индикаторы внизу для удобства
                    }
                }
            ]
        });

    })
    .catch(error => {
        console.error('Не удалось загрузить отзывы:', error);
    });