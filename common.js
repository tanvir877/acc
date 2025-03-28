// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    
    if (mobileMenuBtn && closeMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenuBtn.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Notice Carousel
    const notices = document.querySelectorAll('.notice');
    const noticeIndicators = document.querySelectorAll('.notice-indicators span');
    const noticePrev = document.querySelector('.notice-prev');
    const noticeNext = document.querySelector('.notice-next');
    let currentNoticeIndex = 0;
    let noticeInterval;
    
    function showNotice(index) {
        notices.forEach((notice, i) => {
            notice.classList.remove('active');
            if (noticeIndicators[i]) {
                noticeIndicators[i].classList.remove('active');
            }
        });
        
        notices[index].classList.add('active');
        if (noticeIndicators[index]) {
            noticeIndicators[index].classList.add('active');
        }
        
        currentNoticeIndex = index;
    }
    
    function nextNotice() {
        let nextIndex = (currentNoticeIndex + 1) % notices.length;
        showNotice(nextIndex);
    }
    
    function prevNotice() {
        let prevIndex = (currentNoticeIndex - 1 + notices.length) % notices.length;
        showNotice(prevIndex);
    }
    
    if (notices.length > 0) {
        // Start auto rotation
        noticeInterval = setInterval(nextNotice, 5000);
        
        // Add event listeners for manual navigation
        if (noticePrev && noticeNext) {
            noticePrev.addEventListener('click', function() {
                clearInterval(noticeInterval);
                prevNotice();
                noticeInterval = setInterval(nextNotice, 5000);
            });
            
            noticeNext.addEventListener('click', function() {
                clearInterval(noticeInterval);
                nextNotice();
                noticeInterval = setInterval(nextNotice, 5000);
            });
        }
        
        // Add event listeners for indicators
        noticeIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                clearInterval(noticeInterval);
                showNotice(index);
                noticeInterval = setInterval(nextNotice, 5000);
            });
        });
        
        // Pause auto rotation on hover
        const noticeCarousel = document.querySelector('.notice-carousel');
        if (noticeCarousel) {
            noticeCarousel.addEventListener('mouseenter', function() {
                clearInterval(noticeInterval);
            });
            
            noticeCarousel.addEventListener('mouseleave', function() {
                noticeInterval = setInterval(nextNotice, 5000);
            });
        }
    }
    
    // Common animations for all pages
    // Page header animation
    gsap.from('.page-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.breadcrumb', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Card animations
    gsap.utils.toArray('.card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
});