fetch('../pages/sections/reviews.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#reviews-section').innerHTML = html;
    });