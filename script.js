document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality is handled by Bootstrap
    // Services functionality
    const servicesContent = document.querySelector('.services-content');
    const servicesNextBtn = document.querySelector('.services-next-btn');
    const servicesPrevBtn = document.querySelector('.services-prev-btn');

    servicesNextBtn.addEventListener('click', () => {
        servicesContent.scrollLeft += servicesContent.clientWidth;
    });

    servicesPrevBtn.addEventListener('click', () => {
        servicesContent.scrollLeft -= servicesContent.clientWidth;
    });

    // Side menu functionality
    const sideMenu = document.getElementById('side-menu');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideMenu.style.left = '0';
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.style.left = '-300px';
    });
});
