// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add this code at the beginning of the DOMContentLoaded event handler

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")
  const closeMenuBtn = document.querySelector(".close-menu-btn")

  if (mobileMenuBtn && mobileNav && closeMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.add("active")
    })

    closeMenuBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active")
    })
  }

  // Notices Carousel
  const noticeItems = document.querySelectorAll(".notice-item")
  const carouselIndicators = document.querySelectorAll(".carousel-indicators span")
  const carouselPrev = document.querySelector(".carousel-prev")
  const carouselNext = document.querySelector(".carousel-next")
  let currentNoticeIndex = 0
  let carouselInterval

  function showNoticeItem(index) {
    noticeItems.forEach((item, i) => {
      item.classList.remove("active")
      if (carouselIndicators[i]) {
        carouselIndicators[i].classList.remove("active")
      }
    })

    noticeItems[index].classList.add("active")
    if (carouselIndicators[index]) {
      carouselIndicators[index].classList.add("active")
    }

    currentNoticeIndex = index
  }

  function nextNoticeItem() {
    const nextIndex = (currentNoticeIndex + 1) % noticeItems.length
    showNoticeItem(nextIndex)
  }

  function prevNoticeItem() {
    const prevIndex = (currentNoticeIndex - 1 + noticeItems.length) % noticeItems.length
    showNoticeItem(prevIndex)
  }

  if (noticeItems.length > 0) {
    // Start auto rotation
    carouselInterval = setInterval(nextNoticeItem, 3000)

    // Add event listeners for manual navigation
    if (carouselPrev && carouselNext) {
      carouselPrev.addEventListener("click", () => {
        clearInterval(carouselInterval)
        prevNoticeItem()
        carouselInterval = setInterval(nextNoticeItem, 3000)
      })

      carouselNext.addEventListener("click", () => {
        clearInterval(carouselInterval)
        nextNoticeItem()
        carouselInterval = setInterval(nextNoticeItem, 3000)
      })
    }

    // Add event listeners for indicators
    carouselIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        clearInterval(carouselInterval)
        showNoticeItem(index)
        carouselInterval = setInterval(nextNoticeItem, 3000)
      })
    })
  }

  // Notice Carousel
  const notices = document.querySelectorAll(".notice")
  const noticeIndicators = document.querySelectorAll(".notice-indicators span")
  const noticePrev = document.querySelector(".notice-prev")
  const noticeNext = document.querySelector(".notice-next")
  let currentNoticeIndex2 = 0
  let noticeInterval

  function showNotice(index) {
    notices.forEach((notice, i) => {
      notice.classList.remove("active")
      if (noticeIndicators[i]) {
        noticeIndicators[i].classList.remove("active")
      }
    })

    notices[index].classList.add("active")
    if (noticeIndicators[index]) {
      noticeIndicators[index].classList.add("active")
    }

    currentNoticeIndex2 = index
  }

  function nextNotice() {
    const nextIndex = (currentNoticeIndex2 + 1) % notices.length
    showNotice(nextIndex)
  }

  function prevNotice() {
    const prevIndex = (currentNoticeIndex2 - 1 + notices.length) % notices.length
    showNotice(prevIndex)
  }

  if (notices.length > 0) {
    // Start auto rotation
    noticeInterval = setInterval(nextNotice, 3000)

    // Add event listeners for manual navigation
    if (noticePrev && noticeNext) {
      noticePrev.addEventListener("click", () => {
        clearInterval(noticeInterval)
        prevNotice()
        noticeInterval = setInterval(nextNotice, 3000)
      })

      noticeNext.addEventListener("click", () => {
        clearInterval(noticeInterval)
        nextNotice()
        noticeInterval = setInterval(nextNotice, 3000)
      })
    }

    // Add event listeners for indicators
    noticeIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        clearInterval(noticeInterval)
        showNotice(index)
        noticeInterval = setInterval(nextNotice, 3000)
      })
    })

    // Pause auto rotation on hover
    const noticeContainer = document.querySelector(".notice-container")
    if (noticeContainer) {
      noticeContainer.addEventListener("mouseenter", () => {
        clearInterval(noticeInterval)
      })

      noticeContainer.addEventListener("mouseleave", () => {
        noticeInterval = setInterval(nextNotice, 3000)
      })
    }
  }

  // Testimonials Carousel
  const testimonials = document.querySelectorAll(".testimonial")
  const testimonialIndicators = document.querySelectorAll(".testimonial-indicators span")
  const testimonialPrev = document.querySelector(".testimonial-prev")
  const testimonialNext = document.querySelector(".testimonial-next")
  let currentTestimonialIndex = 0
  let testimonialInterval

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active")
      if (testimonialIndicators[i]) {
        testimonialIndicators[i].classList.remove("active")
      }
    })

    testimonials[index].classList.add("active")
    if (testimonialIndicators[index]) {
      testimonialIndicators[index].classList.add("active")
    }

    currentTestimonialIndex = index
  }

  function nextTestimonial() {
    const nextIndex = (currentTestimonialIndex + 1) % testimonials.length
    showTestimonial(nextIndex)
  }

  function prevTestimonial() {
    const prevIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    showTestimonial(prevIndex)
  }

  if (testimonials.length > 0) {
    // Start auto rotation
    testimonialInterval = setInterval(nextTestimonial, 5000)

    // Add event listeners for manual navigation
    if (testimonialPrev && testimonialNext) {
      testimonialPrev.addEventListener("click", () => {
        clearInterval(testimonialInterval)
        prevTestimonial()
        testimonialInterval = setInterval(nextTestimonial, 5000)
      })

      testimonialNext.addEventListener("click", () => {
        clearInterval(testimonialInterval)
        nextTestimonial()
        testimonialInterval = setInterval(nextTestimonial, 5000)
      })
    }

    // Add event listeners for indicators
    testimonialIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        clearInterval(testimonialInterval)
        showTestimonial(index)
        testimonialInterval = setInterval(nextTestimonial, 5000)
      })
    })

    // Pause auto rotation on hover
    const testimonialContainer = document.querySelector(".testimonials-container")
    if (testimonialContainer) {
      testimonialContainer.addEventListener("mouseenter", () => {
        clearInterval(testimonialInterval)
      })

      testimonialContainer.addEventListener("mouseleave", () => {
        testimonialInterval = setInterval(nextTestimonial, 5000)
      })
    }
  }

  // GSAP Animations
  const gsap = window.gsap

  // Hero Section Animations
  gsap.from(".hero-section.brac-style blockquote", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
  })

  gsap.from(".hero-section.brac-style .quote-author", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  })

  gsap.from(".hero-section.brac-style .read-more-btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  })

  gsap.from(".hero-section.brac-style .principal-image", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "power3.out",
  })

  gsap.from(".hero-section.brac-style .quick-links", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
  })

  // Programs Section Animations
  gsap.from(".program-card", {
    scrollTrigger: {
      trigger: ".programs-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out",
  })

  // About Section Animations
  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-content",
      start: "top 80%",
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: "power3.out",
  })

  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-content",
      start: "top 80%",
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: "power3.out",
  })

  gsap.from(".stat-item", {
    scrollTrigger: {
      trigger: ".about-stats",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: "power3.out",
  })

  // Events Section Animations
  gsap.from(".event-card", {
    scrollTrigger: {
      trigger: ".events-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out",
  })

  // Testimonials Section Animations
  gsap.from(".testimonial-content", {
    scrollTrigger: {
      trigger: ".testimonials-carousel",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  })

  // CTA Section Animations
  gsap.from(".cta-content", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  })

  // Add these GSAP animations at the end of the script.js file

  // Slideshow Gallery Functions
  let slideIndex = 1
  let slideInterval
  let isPlaying = true
  const slideDelay = 5000 // 5 seconds between slides

  // Initialize the slideshow
  showSlides(slideIndex)
  startSlideshow()

  // Add swipe functionality for mobile
  addSwipeDetection()

  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      changeSlide(-1)
    } else if (e.key === "ArrowRight") {
      changeSlide(1)
    }
  })

  // Pause slideshow when user hovers over it
  const slideshowContainer = document.querySelector(".slideshow-container")
  if (slideshowContainer) {
    slideshowContainer.addEventListener("mouseenter", pauseSlideshow)
    slideshowContainer.addEventListener("mouseleave", () => {
      if (isPlaying) startSlideshow()
    })
  }

  // Slideshow Animation
  gsap.from(".slideshow-container", {
    scrollTrigger: {
      trigger: ".slideshow-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  })

  // Make slideshow functions globally accessible
  window.changeSlide = changeSlide
  window.currentSlide = currentSlide
  window.togglePlayPause = togglePlayPause

  // Function to show slides
  function showSlides(n) {
    const slides = document.getElementsByClassName("slide")
    const dots = document.getElementsByClassName("dot")

    if (!slides.length) return

    // Handle wrapping around at the ends
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
    }

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"

    // Reset the slideshow timer when manually changing slides
    resetSlideshowTimer()
  }

  // Next/previous controls
  function changeSlide(n) {
    showSlides((slideIndex += n))
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n))
  }

  // Start automatic slideshow
  function startSlideshow() {
    isPlaying = true
    const playPauseIcon = document.getElementById("play-pause-icon")
    if (playPauseIcon) playPauseIcon.textContent = "❚❚"
    slideInterval = setInterval(() => {
      changeSlide(1)
    }, slideDelay)
  }

  // Pause the slideshow
  function pauseSlideshow() {
    clearInterval(slideInterval)
  }

  // Reset the slideshow timer
  function resetSlideshowTimer() {
    pauseSlideshow()
    if (isPlaying) {
      startSlideshow()
    }
  }

  // Toggle play/pause
  function togglePlayPause() {
    if (isPlaying) {
      pauseSlideshow()
      isPlaying = false
      const playPauseIcon = document.getElementById("play-pause-icon")
      if (playPauseIcon) playPauseIcon.textContent = "▶"
    } else {
      startSlideshow()
    }
  }

  // Add touch swipe detection for mobile devices
  function addSwipeDetection() {
    const slideshowContainer = document.querySelector(".slideshow-container")
    if (!slideshowContainer) return

    let touchStartX = 0
    let touchEndX = 0

    slideshowContainer.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX
      },
      false,
    )

    slideshowContainer.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX
        handleSwipe()
      },
      false,
    )

    function handleSwipe() {
      const swipeThreshold = 50
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next slide
        changeSlide(1)
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous slide
        changeSlide(-1)
      }
    }
  }

  // Preload images for better performance
  function preloadImages() {
    const slides = document.getElementsByClassName("slide")
    for (let i = 0; i < slides.length; i++) {
      const img = new Image()
      const imgElement = slides[i].querySelector("img")
      if (imgElement) img.src = imgElement.src
    }
  }

  // Call preload function
  preloadImages()
})

// Add this to your script.js file

// Slideshow functionality
// let slideIndex = 1;
// let slideshowInterval;
// let slideshowPlaying = true;

// Initialize slideshow when DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
//   // Initialize the slideshow
//   showSlide(slideIndex);
//   startSlideshow();

//   // Add swipe detection for mobile
//   addSwipeDetection();

//   // Add keyboard navigation
//   document.addEventListener('keydown', function(e) {
//     if (e.key === 'ArrowLeft') {
//       changeSlide(-1);
//     } else if (e.key === 'ArrowRight') {
//       changeSlide(1);
//     }
//   });

//   // Add GSAP animation for the slideshow section
//   if (window.gsap) {
//     gsap.from(".campus-showcase .section-title", {
//       scrollTrigger: {
//         trigger: ".campus-showcase",
//         start: "top 80%",
//       },
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     gsap.from(".slideshow-container", {
//       scrollTrigger: {
//         trigger: ".campus-showcase",
//         start: "top 80%",
//       },
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       delay: 0.2,
//       ease: "power3.out",
//     });
//   }
// });

// Function to show slides
// function showSlide(n) {
//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.dot');

//   if (!slides.length) return;

//   // Handle wrapping around at the ends
//   if (n > slides.length) {
//     slideIndex = 1;
//   } else if (n < 1) {
//     slideIndex = slides.length;
//   } else {
//     slideIndex = n;
//   }

//   // Hide all slides
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Remove active class from all dots
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   // Show the current slide and activate the corresponding dot
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// Function to change slides
// function changeSlide(n) {
//   showSlide(slideIndex += n);
//   resetSlideshowTimer();
// }

// Function to set current slide
// function currentSlide(n) {
//   showSlide(slideIndex = n);
//   resetSlideshowTimer();
// }

// Function to start slideshow
// function startSlideshow() {
//   slideshowPlaying = true;
//   const playPauseIcon = document.getElementById('play-pause-icon');
//   if (playPauseIcon) {
//     playPauseIcon.className = 'fas fa-pause';
//   }

//   slideshowInterval = setInterval(function() {
//     changeSlide(1);
//   }, 5000); // Change slide every 5 seconds
// }

// Function to pause slideshow
// function pauseSlideshow() {
//   clearInterval(slideshowInterval);
//   slideshowPlaying = false;
//   const playPauseIcon = document.getElementById('play-pause-icon');
//   if (playPauseIcon) {
//     playPauseIcon.className = 'fas fa-play';
//   }
// }

// Function to toggle slideshow play/pause
// function toggleSlideshow() {
//   if (slideshowPlaying) {
//     pauseSlideshow();
//   } else {
//     startSlideshow();
//   }
// }

// Function to reset slideshow timer
// function resetSlideshowTimer() {
//   clearInterval(slideshowInterval);
//   if (slideshowPlaying) {
//     startSlideshow();
//   }
// }

// Function to add swipe detection for mobile devices
// function addSwipeDetection() {
//   const slideshowContainer = document.querySelector('.slideshow-container');
//   if (!slideshowContainer) return;

//   let touchStartX = 0;
//   let touchEndX = 0;

//   slideshowContainer.addEventListener('touchstart', function(e) {
//     touchStartX = e.changedTouches[0].screenX;
//   }, false);

//   slideshowContainer.addEventListener('touchend', function(e) {
//     touchEndX = e.changedTouches[0].screenX;
//     handleSwipe();
//   }, false);

//   function handleSwipe() {
//     const swipeThreshold = 50;
//     if (touchEndX < touchStartX - swipeThreshold) {
//       // Swipe left - next slide
//       changeSlide(1);
//     } else if (touchEndX > touchStartX + swipeThreshold) {
//       // Swipe right - previous slide
//       changeSlide(-1);
//     }
//   }
// }

// Make functions globally accessible
// window.changeSlide = changeSlide;
// window.currentSlide = currentSlide;
// window.toggleSlideshow = toggleSlideshow;

// Add this to your script.js file - Main Slideshow Functionality

// Main Slideshow functionality
let slideIndex2 = 1
let slideInterval2

// Initialize slideshow when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the main slideshow
  showSlides2(slideIndex2)

  // Auto advance slides
  startSlideshow2()

  // Add GSAP animation for the slideshow section if GSAP is available
  if (window.gsap) {
    gsap.from(".slide-content h2", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    })

    gsap.from(".slide-content p", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
    })

    gsap.from(".slide-btn", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.9,
      ease: "power3.out",
    })
  }
})

// Function to show slides
function showSlides2(n) {
  const slides = document.querySelectorAll(".main-slideshow .slide")
  const indicators = document.querySelectorAll(".main-slideshow .indicator")

  if (!slides.length) return

  // Handle wrapping around at the ends
  if (n > slides.length) {
    slideIndex2 = 1
  } else if (n < 1) {
    slideIndex2 = slides.length
  } else {
    slideIndex2 = n
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  // Remove active class from all indicators
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "")
  }

  // Show the current slide and activate the corresponding indicator
  slides[slideIndex2 - 1].style.display = "block"
  indicators[slideIndex2 - 1].className += " active"
}

// Function to change slides
function changeSlide2(n) {
  showSlides2((slideIndex2 += n))
  resetSlideInterval2()
}

// Function to set current slide
function currentSlide2(n) {
  showSlides2((slideIndex2 = n))
  resetSlideInterval2()
}

// Function to start slideshow
function startSlideshow2() {
  slideInterval2 = setInterval(() => {
    changeSlide2(1)
  }, 6000) // Change slide every 6 seconds
}

// Function to reset slideshow timer
function resetSlideInterval2() {
  clearInterval(slideInterval2)
  startSlideshow2()
}

// Make functions globally accessible
window.changeSlide2 = changeSlide2
window.currentSlide2 = currentSlide2

// Notice Board Functionality
const noticeBoardItems = document.querySelectorAll(".notice-board-item")
const noticeBoardIndicators = document.querySelectorAll(".notice-board-indicators span")
const noticeBoardPrev = document.querySelector(".notice-board-prev")
const noticeBoardNext = document.querySelector(".notice-board-next")
let currentNoticeBoardIndex = 0
let noticeBoardInterval

function showNoticeBoardItem(index) {
  noticeBoardItems.forEach((item, i) => {
    item.classList.remove("active")
    if (noticeBoardIndicators[i]) {
      noticeBoardIndicators[i].classList.remove("active")
    }
  })

  noticeBoardItems[index].classList.add("active")
  if (noticeBoardIndicators[index]) {
    noticeBoardIndicators[index].classList.add("active")
  }

  currentNoticeBoardIndex = index
}

function nextNoticeBoardItem() {
  const nextIndex = (currentNoticeBoardIndex + 1) % noticeBoardItems.length
  showNoticeBoardItem(nextIndex)
}

function prevNoticeBoardItem() {
  const prevIndex = (currentNoticeBoardIndex - 1 + noticeBoardItems.length) % noticeBoardItems.length
  showNoticeBoardItem(prevIndex)
}

if (noticeBoardItems.length > 0) {
  // Start auto rotation
  noticeBoardInterval = setInterval(nextNoticeBoardItem, 3000)

  // Add event listeners for manual navigation
  if (noticeBoardPrev && noticeBoardNext) {
    noticeBoardPrev.addEventListener("click", () => {
      clearInterval(noticeBoardInterval)
      prevNoticeBoardItem()
      noticeBoardInterval = setInterval(nextNoticeBoardItem, 3000)
    })

    noticeBoardNext.addEventListener("click", () => {
      clearInterval(noticeBoardInterval)
      nextNoticeBoardItem()
      noticeBoardInterval = setInterval(nextNoticeBoardItem, 3000)
    })
  }

  // Add event listeners for indicators
  noticeBoardIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      clearInterval(noticeBoardInterval)
      showNoticeBoardItem(index)
      noticeBoardInterval = setInterval(nextNoticeBoardItem, 3000)
    })
  })

  // Pause auto rotation on hover
  const noticeBoardContainer = document.querySelector(".notice-board-container")
  if (noticeBoardContainer) {
    noticeBoardContainer.addEventListener("mouseenter", () => {
      clearInterval(noticeBoardInterval)
    })

    noticeBoardContainer.addEventListener("mouseleave", () => {
      noticeBoardInterval = setInterval(nextNoticeBoardItem, 3000)
    })
  }
}

// Add GSAP animation for the notice board
if (window.gsap) {
  gsap.from(".notice-board-container", {
    scrollTrigger: {
      trigger: ".notice-board-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  })
}
window.currentSlide2 = currentSlide2

// Notice Board Animation
if (window.gsap) {
  gsap.from(".notice-card", {
    scrollTrigger: {
      trigger: ".notice-board-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out",
  })
}

// Add this code at the end of your script.js file

// Notice Board Section (BRAC University Style)
document.addEventListener("DOMContentLoaded", () => {
  // Featured Notice Slideshow
  const featuredSlides = document.querySelectorAll(".featured-slide")
  let currentSlideIndex = 0
  let slideInterval

  function showSlide(index) {
    // Hide all slides
    featuredSlides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Show the current slide
    featuredSlides[index].classList.add("active")
    currentSlideIndex = index
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % featuredSlides.length
    showSlide(currentSlideIndex)
  }

  // Start the slideshow
  if (featuredSlides.length > 0) {
    // Initialize with the first slide
    showSlide(0)

    // Auto advance slides every 3 seconds
    slideInterval = setInterval(nextSlide, 3000)

    // Don't pause on hover - let it continue to change automatically
    const featuredNotice = document.querySelector(".featured-notice")
    if (featuredNotice) {
      featuredNotice.addEventListener("click", (e) => {
        // Only pause when clicked, not on hover
        if (e.target.closest(".featured-notice-overlay")) {
          // If they click on the content, you might want to navigate to the full notice
          console.log("Notice clicked")
        }
      })
    }
  }
})

// Notice Board Section (BRAC University Style)
document.addEventListener("DOMContentLoaded", () => {
  // Notice Board Pagination
  const paginationDots = document.querySelectorAll(".pagination-dot")
  const featuredNotice = document.querySelector(".featured-notice")
  const noticeItems = document.querySelectorAll(".notice-item")
  let currentPage = 0
  let touchStartX = 0
  let touchEndX = 0
  let noticeInterval

  // Initialize
  if (paginationDots.length > 0) {
    paginationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        setActivePage(index)
      })
    })
  }

  // Set active page
  function setActivePage(index) {
    // Update pagination dots
    paginationDots.forEach((dot) => dot.classList.remove("active"))
    if (paginationDots[index]) {
      paginationDots[index].classList.add("active")
    }

    currentPage = index

    // Animate content based on page
    animateNoticeBoardContent(index)
  }

  // Animate notice board content
  function animateNoticeBoardContent(index) {
    // Use GSAP for smooth animations if available
    if (window.gsap) {
      // Animate featured notice
      gsap.fromTo(featuredNotice, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })

      // Animate notice items with stagger
      gsap.fromTo(
        noticeItems,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      )
    } else {
      // Fallback for browsers without GSAP
      featuredNotice.style.opacity = 0
      setTimeout(() => {
        featuredNotice.style.opacity = 1
      }, 100)

      noticeItems.forEach((item, i) => {
        item.style.opacity = 0
        setTimeout(
          () => {
            item.style.opacity = 1
          },
          100 + i * 200,
        )
      })
    }
  }

  // Start auto-rotate pages every 3 seconds
  function startNoticeInterval() {
    noticeInterval = setInterval(() => {
      const nextPage = (currentPage + 1) % paginationDots.length
      setActivePage(nextPage)
    }, 3000)
  }

  // Start the interval immediately
  startNoticeInterval()

  // Add touch swipe support for mobile devices
  const noticeBoard = document.querySelector(".notice-board-content")
  if (noticeBoard) {
    noticeBoard.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX
      },
      false,
    )

    noticeBoard.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX
        handleSwipe()
      },
      false,
    )
  }

  function handleSwipe() {
    const swipeThreshold = 50
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next page
      clearInterval(noticeInterval)
      const nextPage = (currentPage + 1) % paginationDots.length
      setActivePage(nextPage)
      startNoticeInterval()
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous page
      clearInterval(noticeInterval)
      const prevPage = (currentPage - 1 + paginationDots.length) % paginationDots.length
      setActivePage(prevPage)
      startNoticeInterval()
    }
  }

  // Initial animation
  setActivePage(0)

  // Add hover effects for notice items
  noticeItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (window.gsap) {
        gsap.to(item, { y: -5, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", duration: 0.3 })
      } else {
        item.style.transform = "translateY(-5px)"
        item.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)"
      }
    })

    item.addEventListener("mouseleave", () => {
      if (window.gsap) {
        gsap.to(item, { y: 0, boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)", duration: 0.3 })
      } else {
        item.style.transform = "translateY(0)"
        item.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.05)"
      }
    })
  })

  // Add subtle image movement on featured notice hover, but don't pause the slideshow
  if (featuredNotice) {
    featuredNotice.addEventListener("mousemove", (e) => {
      const rect = featuredNotice.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const moveX = (x - centerX) / 20
      const moveY = (y - centerY) / 20

      const image = featuredNotice.querySelector(".featured-notice-image")
      if (image && window.gsap) {
        gsap.to(image, {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: "power2.out",
        })
      }
    })

    featuredNotice.addEventListener("mouseleave", () => {
      const image = featuredNotice.querySelector(".featured-notice-image")
      if (image && window.gsap) {
        gsap.to(image, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
        })
      }
    })
  }

  // Add responsive adjustments for different screen sizes
  function adjustForScreenSize() {
    const windowWidth = window.innerWidth

    if (windowWidth <= 576) {
      // Mobile adjustments
      noticeItems.forEach((item) => {
        const dateBox = item.querySelector(".notice-date-box")
        if (dateBox) {
          dateBox.style.minWidth = "70px"
        }
      })
    } else {
      // Reset for larger screens
      noticeItems.forEach((item) => {
        const dateBox = item.querySelector(".notice-date-box")
        if (dateBox) {
          dateBox.style.minWidth = "80px"
        }
      })
    }
  }

  // Call once on load
  adjustForScreenSize()

  // Update on window resize
  window.addEventListener("resize", adjustForScreenSize)
})