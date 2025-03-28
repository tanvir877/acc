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
    
    // Program Tabs
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
    
    // Particle Animation for Hero Section
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        function setCanvasDimensions() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `hsl(${Math.random() * 60 + 200}, 70%, 50%)`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Create particles
        const particlesArray = [];
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            particlesArray.push(new Particle());
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(193, 39, 45, ${1 - distance / 100})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
            
            // Update and draw particles
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // GSAP Animations
    // Hero Section Animation
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    // Principal Section Animation
    gsap.from('.principal-quote', {
        scrollTrigger: {
            trigger: '.principal-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.principal-info', {
        scrollTrigger: {
            trigger: '.principal-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.principal-image', {
        scrollTrigger: {
            trigger: '.principal-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Quick Links Animation
    gsap.from('.quick-link', {
        scrollTrigger: {
            trigger: '.quick-links-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // About Features Animation
    gsap.from('.feature', {
        scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Programs Animation
    gsap.from('.program-card', {
        scrollTrigger: {
            trigger: '.programs-grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // News & Events Animation
    gsap.from('.news-card', {
        scrollTrigger: {
            trigger: '.news-cards',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.event-card', {
        scrollTrigger: {
            trigger: '.event-cards',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // CTA Section Animation
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
});