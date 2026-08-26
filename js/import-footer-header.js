fetch('../pages/header.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#header-container').innerHTML = html;
    });

function goToIndex() {
    window.location.href = "../index.html";
}

fetch('../pages/footer.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#footer-container').innerHTML = html;
    });
