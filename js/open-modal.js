(function () {
    'use strict';

    let modalEl = null;
    let modalLoaded = false;

    /* ---------- Загрузка HTML шаблона ---------- */
    async function loadModalTemplate() {
        if (modalLoaded) return;

        try {
            const response = await fetch('pages/modal/modal-contact-us.html');
            if (!response.ok) throw new Error('Failed to load modal template');

            const template = await response.text();

            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            overlay.id = 'signupModal';
            overlay.innerHTML = template;

            document.body.appendChild(overlay);
            modalEl = overlay;
            modalLoaded = true;
        } catch (error) {
            console.error('Error loading modal:', error);
        }
    }

    /* ---------- Привязка событий ---------- */
    function bindEvents() {
        if (!modalEl || modalEl.dataset.bound) return;

        modalEl.dataset.bound = '1';

        // Крестик
        modalEl.querySelector('.modal__close').addEventListener('click', closeModal);

        // Клик по overlay (вне модалки)
        modalEl.addEventListener('click', function (e) {
            if (e.target === modalEl) closeModal();
        });

        // Esc
        document.addEventListener('keydown', function onEsc(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', onEsc);
            }
        });

        // Кнопка «Оставить заявку в форме»
        modalEl.querySelector('#modalFormBtn').addEventListener('click', function () {
            closeModal();
            // Здесь можно открыть форму записи или скроллить к форме
            console.log('Открыть форму записи');
            // Например: document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
        });
    }

    /* ---------- Открытие / закрытие ---------- */
    async function openModal() {
        if (!modalEl) {
            await loadModalTemplate();
        }

        bindEvents();

        requestAnimationFrame(() => {
            modalEl.classList.add('active');
        });
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modalEl) return;
        modalEl.classList.remove('active');
        document.body.style.overflow = '';
    }

    /* ---------- Инициализация ---------- */
    function init() {
        const triggers = document.querySelectorAll('.js-open-modal');
        triggers.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                openModal();
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Экспорт для ручного вызова
    window.openSignupModal = openModal;
    window.closeSignupModal = closeModal;
})();