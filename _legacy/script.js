document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Navigation Toggle (Mobile)
       ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    /* =========================================
       Smooth Scroll for Anchor Links
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Determine offset based on navbar height
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    /* =========================================
       Tab Switching Logic (Rooms)
       ========================================= */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target content
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    /* =========================================
       Scroll Animation (Intersection Observer)
       ========================================= */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate (e.g., cards, section headers)
    const animatedElements = document.querySelectorAll('.card, .feature-item, .section-header, .unit-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0'; // Initial state
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add class for animation on intersect
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions);
    animatedElements.forEach(el => scrollObserver.observe(el));

});

/* =========================================
   Image Gallery / Switcher
   ========================================= */
function changeImage(element) {
    // Find the main image container within the same unit-gallery context
    const galleryContainer = element.closest('.unit-gallery');
    const mainImg = galleryContainer.querySelector('.main-img img');

    // Update src
    mainImg.src = element.src;
    mainImg.alt = element.alt;

    // Optional: Add active state styling to thumbnails
    const thumbnails = galleryContainer.querySelectorAll('.sub-imgs img');
    thumbnails.forEach(thumb => thumb.style.opacity = '0.7');
    element.style.opacity = '1';
}
