console.log('DOM ready?');
console.log(document.querySelectorAll('.faq-question').length);




// FAQ секция
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function (e) {
        e.preventDefault(); // чтобы ссылка не делала переход

        const item = this.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isActive = answer.classList.contains('active');
        console.log(answer);

        // Закрываем все остальные ответы (если нужно поведение «активен только один»)
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.classList.remove('active');
            a.closest('.faq-item').querySelector('.faq-question').classList.remove('active');
        });

        if (!isActive) {
            answer.classList.add('active');
            this.classList.add('active');
        }
    });
});



//переходы по страницам
function goToPageSummerCampBeret() {
    window.location.href = "pages/summer-camp-beret.html";
}
function goToPageAboutClub(){
    window.location.href = "pages/about-club.html";
}
function goToPageHallsAdventure(){
    window.location.href = "pages/halls-adventure.html";
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // делает прокрутку плавной
    });
}
/*
// для бургера
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');  // кнопка открытия меню в целом

    const mainNav = document.querySelector('.main-nav');        // навбар со ссылками
    const navLinks = document.querySelectorAll('.main-nav a');  // ссылки навбара

    //добавление класса active при нажатии
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      }
    });
  });

 */

//позвонить на телефон

document.getElementById('call-btn-1').addEventListener('click', function() {
    const phoneNumber = this.getAttribute('data-phone');
    window.location.href = `tel:${phoneNumber}`;
});
document.getElementById('call-btn-2').addEventListener('click', function() {
    const phoneNumber = this.getAttribute('data-phone');
    window.location.href = `tel:${phoneNumber}`;
});