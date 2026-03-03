// Job tabs functionality
const jobTabs = document.querySelectorAll('.job-tab');
const jobPanels = document.querySelectorAll('.job-panel');

jobTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        jobTabs.forEach(t => t.classList.remove('active'));
        jobPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = tab.getAttribute('data-tab');
        document.getElementById(targetPanel).classList.add('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    }
    
    lastScroll = currentScroll;
});

// Scroll reveal animation
const sr = {
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: 200,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
};

// Create intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.hero, .section, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Email and social sidebars fade in
window.addEventListener('load', () => {
    const emailSidebar = document.querySelector('.email-sidebar');
    const socialSidebar = document.querySelector('.social-sidebar');
    
    setTimeout(() => {
        if (emailSidebar) emailSidebar.style.opacity = '1';
        if (socialSidebar) socialSidebar.style.opacity = '1';
    }, 1000);
});

// Initial styles for sidebars
document.addEventListener('DOMContentLoaded', () => {
    const emailSidebar = document.querySelector('.email-sidebar');
    const socialSidebar = document.querySelector('.social-sidebar');
    
    if (emailSidebar) {
        emailSidebar.style.opacity = '0';
        emailSidebar.style.transition = 'opacity 0.5s ease';
    }
    if (socialSidebar) {
        socialSidebar.style.opacity = '0';
        socialSidebar.style.transition = 'opacity 0.5s ease';
    }
});
