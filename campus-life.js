// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Campus Gallery
    const galleryMain = document.querySelector('.gallery-main');
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');
    
    if (galleryMain && galleryThumbs.length > 0) {
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Update main image
                galleryMain.src = this.getAttribute('data-src');
                
                // Update active class
                galleryThumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Achievements Slider
    const achievementSlides = document.querySelectorAll('.achievement-slide');
    const achievementIndicators = document.querySelectorAll('.achievements-indicators span');
    const achievementPrev = document.querySelector('.achievement-prev');
    const achievementNext = document.querySelector('.achievement-next');
    let currentAchievementIndex = 0;
    let achievementInterval;
    
    function showAchievement(index) {
        achievementSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (achievementIndicators[i]) {
                achievementIndicators[i].classList.remove('active');
            }
        });
        
        achievementSlides[index].classList.add('active');
        if (achievementIndicators[index]) {
            achievementIndicators[index].classList.add('active');
        }
        
        currentAchievementIndex = index;
    }
    
    function nextAchievement() {
        let nextIndex = (currentAchievementIndex + 1) % achievementSlides.length;
        showAchievement(nextIndex);
    }
    
    function prevAchievement() {
        let prevIndex = (currentAchievementIndex - 1 + achievementSlides.length) % achievementSlides.length;
        showAchievement(prevIndex);
    }
    
    if (achievementSlides.length > 0) {
        // Start auto rotation
        achievementInterval = setInterval(nextAchievement, 5000);
        
        // Add event listeners for manual navigation
        if (achievementPrev && achievementNext) {
            achievementPrev.addEventListener('click', function() {
                clearInterval(achievementInterval);
                prevAchievement();
                achievementInterval = setInterval(nextAchievement, 5000);
            });
            
            achievementNext.addEventListener('click', function() {
                clearInterval(achievementInterval);
                nextAchievement();
                achievementInterval = setInterval(nextAchievement, 5000);
            });
        }
        
        // Add event listeners for indicators
        achievementIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                clearInterval(achievementInterval);
                showAchievement(index);
                achievementInterval = setInterval(nextAchievement, 5000);
            });
        });
        
        // Pause auto rotation on hover
        const achievementsContainer = document.querySelector('.achievements-container');
        if (achievementsContainer) {
            achievementsContainer.addEventListener('mouseenter', function() {
                clearInterval(achievementInterval);
            });
            
            achievementsContainer.addEventListener('mouseleave', function() {
                achievementInterval = setInterval(nextAchievement, 5000);
            });
        }
    }
    
    // Clubs Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Testimonials Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialIndicators = document.querySelectorAll('.testimonials-indicators span');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let currentTestimonialIndex = 0;
    let testimonialInterval;
    
    function showTestimonial(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (testimonialIndicators[i]) {
                testimonialIndicators[i].classList.remove('active');
            }
        });
        
        testimonialSlides[index].classList.add('active');
        if (testimonialIndicators[index]) {
            testimonialIndicators[index].classList.add('active');
        }
        
        currentTestimonialIndex = index;
    }
    
    function nextTestimonial() {
        let nextIndex = (currentTestimonialIndex + 1) % testimonialSlides.length;
        showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
        let prevIndex = (currentTestimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonial(prevIndex);
    }
    
    if (testimonialSlides.length > 0) {
        // Start auto rotation
        testimonialInterval = setInterval(nextTestimonial, 5000);
        
        // Add event listeners for manual navigation
        if (testimonialPrev && testimonialNext) {
            testimonialPrev.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                prevTestimonial();
                testimonialInterval = setInterval(nextTestimonial, 5000);
            });
            
            testimonialNext.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                nextTestimonial();
                testimonialInterval = setInterval(nextTestimonial, 5000);
            });
        }
        
        // Add event listeners for indicators
        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                showTestimonial(index);
                testimonialInterval = setInterval(nextTestimonial, 5000);
            });
        });
        
        // Pause auto rotation on hover
        const testimonialsContainer = document.querySelector('.testimonials-container');
        if (testimonialsContainer) {
            testimonialsContainer.addEventListener('mouseenter', function() {
                clearInterval(testimonialInterval);
            });
            
            testimonialsContainer.addEventListener('mouseleave', function() {
                testimonialInterval = setInterval(nextTestimonial, 5000);
            });
        }
    }
    
    // GSAP Animations
    const gsap = window.gsap;

    // Campus Gallery Animation
    gsap.from('.campus-gallery', {
        scrollTrigger: {
            trigger: '.campus-gallery',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Achievements Animation
    gsap.from('.achievement-card', {
        scrollTrigger: {
            trigger: '.achievements-slider',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Sports Facilities Animation
    gsap.from('.facility-card', {
        scrollTrigger: {
            trigger: '.sports-facilities',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Club Cards Animation
    gsap.from('.club-card', {
        scrollTrigger: {
            trigger: '.clubs-tabs',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Events Timeline Animation
    gsap.from('.event-item', {
        scrollTrigger: {
            trigger: '.events-timeline',
            start: 'top 80%'
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Campus Facilities Animation
    gsap.from('.facility-item', {
        scrollTrigger: {
            trigger: '.facilities-grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Testimonials Animation
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-slider',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
});