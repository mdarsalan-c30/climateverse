// Function to load HTML content into specified element
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (elementId === 'header') {
                setupMenuToggle(); // Ensure toggle function is initialized after header is loaded
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Initialize header and footer once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('pages/header.html', 'header');
    loadHTML('pages/footer.html', 'footer');
});

// Setup mobile menu toggle functionality
function setupMenuToggle() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

//TOOLS TEMPALET SCRIPt//

fetch('./res/calc/tools.html') // Adjust path as needed
.then(response => response.text())
.then(data => {
    document.getElementById('tool').innerHTML = data;
});