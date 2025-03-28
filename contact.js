// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const sendAnother = document.getElementById('sendAnother');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission with a delay
            setTimeout(function() {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            }, 1000);
        });
    }
    
    if (sendAnother) {
        sendAnother.addEventListener('click', function() {
            formSuccess.style.display = 'none';
            contactForm.style.display = 'block';
            contactForm.reset();
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterSuccess = document.getElementById('newsletterSuccess');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission with a delay
            setTimeout(function() {
                newsletterForm.reset();
                newsletterSuccess.style.display = 'block';
                
                // Hide success message after 3 seconds
                setTimeout(function() {
                    newsletterSuccess.style.display = 'none';
                }, 3000);
            }, 1000);
        });
    }
    
    // Department Accordion
    const departmentItems = document.querySelectorAll('.department-item');
    
    departmentItems.forEach(item => {
        const header = item.querySelector('.department-header');
        
        header.addEventListener('click', function() {
            // Close all other items
            departmentItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // GSAP Animations
    const gsap = window.gsap;
    
    // Contact Info Cards Animation
    gsap.from('.contact-info-card', {
        scrollTrigger: {
            trigger: '.contact-info-grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Map Animation
    gsap.from('.map-wrapper', {
        scrollTrigger: {
            trigger: '.map-wrapper',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Form Animation
    gsap.from('.contact-form-container', {
        scrollTrigger: {
            trigger: '.contact-form-container',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Department Items Animation
    gsap.from('.department-item', {
        scrollTrigger: {
            trigger: '.departments-accordion',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // FAQ Items Animation
    gsap.from('.faq-item', {
        scrollTrigger: {
            trigger: '.faq-accordion',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Social Connect Cards Animation
    gsap.from('.social-connect-card', {
        scrollTrigger: {
            trigger: '.social-connect-grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Newsletter Signup Animation
    gsap.from('.newsletter-signup', {
        scrollTrigger: {
            trigger: '.newsletter-signup',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
});