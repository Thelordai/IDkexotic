// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero section animations
gsap.from('.hero-content h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.from('.hero-cta', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
});

// Map cards stagger animation
gsap.from('.map-card', {
    scrollTrigger: {
        trigger: '.maps',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Parallax effect for hero section
gsap.to('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    backgroundPosition: '50% 100%',
    ease: 'none'
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = 'var(--neon-shadow)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Map card hover effects
document.querySelectorAll('.map-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.02,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const badge = card.querySelector('.map-badge');
        gsap.to(badge, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const badge = card.querySelector('.map-badge');
        gsap.to(badge, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Initialize fade-in animations for elements with .fade-in class
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .member-card, .map-card, .tutorial-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Smooth hover effect for cards
document.querySelectorAll('.member-card, .map-card, .tutorial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in animation to hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
});
