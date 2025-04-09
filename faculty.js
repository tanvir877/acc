// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP ScrollTrigger plugin if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Initialize variables
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const backToTopBtn = document.getElementById('backToTop');
    
    // Hero slider functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');
    const heroDots = document.querySelectorAll('.hero-dot');
    let currentHeroSlide = 0;
    
    // Notices slider functionality
    const noticeItems = document.querySelectorAll('.notice-item');
    const noticePrev = document.getElementById('noticePrev');
    const noticeNext = document.getElementById('noticeNext');
    const noticeDots = document.querySelectorAll('.notice-dot');
    let currentNotice = 0;
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Mobile navigation toggle
    if (navToggle) {
      navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
      });
    });
    
    // Back to top button
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Hero slider functions
    function showHeroSlide(index) {
      heroSlides.forEach(slide => slide.classList.remove('active'));
      heroDots.forEach(dot => dot.classList.remove('active'));
      
      heroSlides[index].classList.add('active');
      heroDots[index].classList.add('active');
      currentHeroSlide = index;
    }
    
    function nextHeroSlide() {
      currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
      showHeroSlide(currentHeroSlide);
    }
    
    function prevHeroSlide() {
      currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
      showHeroSlide(currentHeroSlide);
    }
    
    // Add event listeners for hero slider
    if (heroPrev && heroNext) {
      heroPrev.addEventListener('click', prevHeroSlide);
      heroNext.addEventListener('click', nextHeroSlide);
      
      heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showHeroSlide(index));
      });
      
      // Auto slide every 5 seconds
      let heroInterval = setInterval(nextHeroSlide, 5000);
      
      // Pause auto slide on hover
      document.querySelector('.hero-slider').addEventListener('mouseenter', () => {
        clearInterval(heroInterval);
      });
      
      document.querySelector('.hero-slider').addEventListener('mouseleave', () => {
        heroInterval = setInterval(nextHeroSlide, 5000);
      });
    }
    
    // Notices slider functions
    function showNotice(index) {
      noticeItems.forEach(item => item.classList.remove('active'));
      noticeDots.forEach(dot => dot.classList.remove('active'));
      
      noticeItems[index].classList.add('active');
      noticeDots[index].classList.add('active');
      currentNotice = index;
    }
    
    function nextNotice() {
      currentNotice = (currentNotice + 1) % noticeItems.length;
      showNotice(currentNotice);
    }
    
    function prevNotice() {
      currentNotice = (currentNotice - 1 + noticeItems.length) % noticeItems.length;
      showNotice(currentNotice);
    }
    
    // Add event listeners for notices slider
    if (noticePrev && noticeNext) {
      noticePrev.addEventListener('click', prevNotice);
      noticeNext.addEventListener('click', nextNotice);
      
      noticeDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showNotice(index));
      });
      
      // Auto slide every 4 seconds
      let noticeInterval = setInterval(nextNotice, 4000);
      
      // Pause auto slide on hover
      document.querySelector('.notices-slider').addEventListener('mouseenter', () => {
        clearInterval(noticeInterval);
      });
      
      document.querySelector('.notices-slider').addEventListener('mouseleave', () => {
        noticeInterval = setInterval(nextNotice, 4000);
      });
    }
    
    // Faculty box hover effects
    const facultyBoxes = document.querySelectorAll('.faculty-box');
    facultyBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        if (typeof gsap !== 'undefined') {
          gsap.to(this.querySelector('.faculty-icon'), {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
      
      box.addEventListener('mouseleave', function() {
        if (typeof gsap !== 'undefined') {
          gsap.to(this.querySelector('.faculty-icon'), {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });
    
    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
      const animateStats = () => {
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'));
          const duration = 2000; // 2 seconds
          
          let start = 0;
          const increment = Math.ceil(target / 50);
          
          const timer = setInterval(() => {
            start += increment;
            
            if (start > target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = start;
            }
          }, 40);
        });
      };
      
      // Use Intersection Observer to trigger animation when stats are visible
      const statsSection = document.querySelector('.faculty-stats');
      
      if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateStats();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
      }
    }
    
    // GSAP Animations (if GSAP is available)
    if (typeof gsap !== 'undefined') {
      // Hero section animation
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
      
      // Notices animation
      gsap.from('.notices-section', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power2.out'
      });
      
      if (typeof ScrollTrigger !== 'undefined') {
        // Faculty boxes animation
        gsap.from('.faculty-box', {
          scrollTrigger: {
            trigger: '.faculty-boxes',
            start: 'top 80%'
          },
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        });
        
        // Stats animation
        gsap.from('.stat-item', {
          scrollTrigger: {
            trigger: '.faculty-stats',
            start: 'top 80%'
          },
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        });
      }
    }
  });