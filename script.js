document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const sliderNextBtn = document.querySelector('.slider-next-btn');
    const sliderPrevBtn = document.querySelector('.slider-prev-btn');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    sliderNextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    sliderPrevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Services functionality
    const servicesContent = document.querySelector('.services-content');
    const serviceBoxes = document.querySelectorAll('.service-box');
    const servicesNextBtn = document.querySelector('.services-next-btn');
    const servicesPrevBtn = document.querySelector('.services-prev-btn');

    let currentServiceIndex = 0;
    const servicesToShow = 4;
    const totalServices = serviceBoxes.length;

    function updateCarousel() {
        const offset = -currentServiceIndex * 100 / servicesToShow;
        servicesContent.style.transform = `translateX(${offset}%)`;
    }

    servicesNextBtn.addEventListener('click', () => {
        currentServiceIndex = (currentServiceIndex + 1) % totalServices;
        updateCarousel();
    });

    servicesPrevBtn.addEventListener('click', () => {
        currentServiceIndex = (currentServiceIndex - 1 + totalServices) % totalServices;
        updateCarousel();
    });

    updateCarousel();

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
