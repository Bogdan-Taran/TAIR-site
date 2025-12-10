const items = document.querySelectorAll(".faq-question");

function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


function goToPageSummerCampBeret() {

    window.location.href = "../pages/summer-camp-beret.html";
}

// для бургера
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
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