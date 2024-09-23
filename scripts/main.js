document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        const sliderImages = document.querySelector(".slider-images");
        const slidesPerView = window.innerWidth <= 767 ? 1 : 1;
        const slideWidth = 100 / slidesPerView;
        const offset = -index * slideWidth;
        sliderImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        const slidesPerView = window.innerWidth <= 767 ? 1 : 1;
        currentIndex = (currentIndex + slidesPerView) % totalSlides;
        showSlide(currentIndex);
    }

    function updateSlideWidth() {
        const slidesPerView = window.innerWidth <= 767 ? 1 : 1;
        const slideWidth = 100 / slidesPerView;
        slides.forEach(slide => {
            slide.style.width = `${slideWidth}%`;
        });
        showSlide(currentIndex);
    }

    updateSlideWidth();
    setInterval(nextSlide, 3000);
    window.addEventListener('resize', updateSlideWidth);
});
