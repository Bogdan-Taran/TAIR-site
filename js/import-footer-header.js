// Загрузка хедера
fetch('../pages/header.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#header-container').innerHTML = html;

        // === ИНИЦИАЛИЗАЦИЯ БУРГЕРА ПОСЛЕ ЗАГРУЗКИ ХЕДЕРА ===
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        const navLinks = document.querySelectorAll('.main-nav a');

        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', function() {
                menuToggle.classList.toggle('active');
                mainNav.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                });
            });

            document.addEventListener('click', function(event) {
                if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        }
    })
    .catch(error => console.error('Ошибка загрузки хедера:', error));



function goToIndex() {
    window.location.href = "../index.html";
}

fetch('../pages/footer.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#footer-container').innerHTML = html;
    });
