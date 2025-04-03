// Library Standalone JavaScript with Animations

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")
  const closeMenuBtn = document.querySelector(".close-menu-btn")

  if (mobileMenuBtn && mobileNav) {
    // Toggle mobile menu when hamburger button is clicked
    mobileMenuBtn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation() // Prevent event from bubbling up
      mobileNav.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")

      // Prevent body scrolling when menu is open
      if (mobileNav.classList.contains("active")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    // Close mobile menu when X button is clicked
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", (e) => {
        e.preventDefault()
        mobileNav.classList.remove("active")
        mobileMenuBtn.classList.remove("active")
        document.body.style.overflow = ""
      })
    }

    // Close mobile menu when clicking on a menu item
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        mobileMenuBtn.classList.remove("active")
        document.body.style.overflow = ""
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mobileNav.classList.contains("active") &&
        !mobileMenuBtn.contains(e.target) &&
        !mobileNav.contains(e.target)
      ) {
        mobileNav.classList.remove("active")
        mobileMenuBtn.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      if (this.getAttribute("href") === "#") return

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Close mobile menu if open
        if (mobileNav && mobileNav.classList.contains("active")) {
          mobileNav.classList.remove("active")
        }

        // Scroll to the target element
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Add active class to nav links based on scroll position
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav-links a")

  function highlightNavLink() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })

    // If we're at the top of the page, highlight the home link
    if (scrollPosition < 100) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === "#") {
          link.classList.add("active")
        }
      })
    }
  }

  window.addEventListener("scroll", highlightNavLink)
  highlightNavLink() // Call once on page load

  // Counter animation for stats
  const statNumbers = document.querySelectorAll(".stat-number[data-count]")

  function animateCounter(el) {
    const target = Number.parseInt(el.getAttribute("data-count"))
    const duration = 2000 // 2 seconds
    const step = (target / duration) * 10 // Update every 10ms
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        el.textContent = target.toLocaleString()
        clearInterval(timer)
      } else {
        el.textContent = Math.floor(current).toLocaleString()
      }
    }, 10)
  }

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation delay if specified
        const delay = entry.target.getAttribute("data-delay")
        if (delay) {
          setTimeout(() => {
            entry.target.style.animationDelay = "0ms"
            entry.target.style.animationPlayState = "running"
          }, Number.parseInt(delay))
        } else {
          entry.target.style.animationPlayState = "running"
        }

        // If it's a counter, start the animation
        if (entry.target.hasAttribute("data-count")) {
          animateCounter(entry.target)
        }

        // Stop observing after animation is triggered
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all animated elements
  document
    .querySelectorAll(".animate-fade-in, .animate-fade-up, .animate-slide-right, .animate-slide-left")
    .forEach((el) => {
      // Set animation-play-state to paused initially
      el.style.animationPlayState = "paused"

      // Set animation delay if specified
      const delay = el.getAttribute("data-delay")
      if (delay) {
        el.style.animationDelay = `${delay}ms`
      }

      observer.observe(el)
    })

  // Observe stat numbers for counter animation
  statNumbers.forEach((el) => {
    observer.observe(el)
  })

  // Form submission
  const contactForm = document.querySelector(".contact-form form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const name = this.querySelector("#name").value
      const email = this.querySelector("#email").value
      const subject = this.querySelector("#subject").value
      const message = this.querySelector("#message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields")
        return
      }

      // In a real application, you would send this data to a server
      // For now, we'll just show a success message
      alert(`Thank you, ${name}! Your message has been sent.`)
      this.reset()
    })
  }

  // Back to top button
  const backToTopBtn = document.createElement("button")
  backToTopBtn.classList.add("back-to-top")
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
  document.body.appendChild(backToTopBtn)

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show")
    } else {
      backToTopBtn.classList.remove("show")
    }
  })

  // Add this to the end of your CSS file
  const style = document.createElement("style")
  style.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary);
      color: var(--text-light);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
      z-index: 99;
    }
    
    .back-to-top.show {
      opacity: 1;
      visibility: visible;
    }
    
    .back-to-top:hover {
      transform: translateY(-5px);
    }
  `
  document.head.appendChild(style)

  // Gallery functionality - FIXED VERSION
  const galleryContainer = document.querySelector(".gallery-container")
  const galleryMain = document.getElementById("gallery-featured")
  const galleryCaption = document.querySelector(".gallery-caption")
  const galleryThumbs = document.querySelectorAll(".gallery-thumb")
  const galleryDots = document.querySelectorAll(".gallery-dot")
  const galleryPrev = document.querySelector(".gallery-prev")
  const galleryNext = document.querySelector(".gallery-next")

  let currentGalleryIndex = 0
  const totalGalleryItems = galleryThumbs.length

  // Preload all gallery images to avoid disappearing during transitions
  function preloadGalleryImages() {
    galleryThumbs.forEach((thumb) => {
      const imgSrc = thumb.getAttribute("data-img")
      const img = new Image()
      img.src = imgSrc
    })
  }

  // Call preload function
  preloadGalleryImages()

  function updateGallery(index) {
    // Get the new image source and caption
    const activeThumb = galleryThumbs[index]
    const imgSrc = activeThumb.getAttribute("data-img")
    const imgCaption = activeThumb.getAttribute("data-caption")

    // Create a clone of the current main image that will stay visible during transition
    const currentImg = galleryMain.cloneNode(true)
    currentImg.id = "gallery-temp"
    currentImg.style.position = "absolute"
    currentImg.style.top = "0"
    currentImg.style.left = "0"
    currentImg.style.width = "100%"
    currentImg.style.height = "100%"
    currentImg.style.zIndex = "1"

    // Add the clone to the container
    const mainContainer = galleryMain.parentElement
    mainContainer.style.position = "relative"
    mainContainer.appendChild(currentImg)

    // Set the new image source
    galleryMain.src = imgSrc
    galleryMain.style.opacity = "0"
    galleryCaption.textContent = imgCaption

    // Once the new image is loaded, fade it in and remove the clone
    galleryMain.onload = () => {
      galleryMain.style.opacity = "1"

      // Remove the clone after transition
      setTimeout(() => {
        if (document.getElementById("gallery-temp")) {
          mainContainer.removeChild(document.getElementById("gallery-temp"))
        }
      }, 500)
    }

    // If image is already cached and onload doesn't fire
    if (galleryMain.complete) {
      galleryMain.style.opacity = "1"
      setTimeout(() => {
        if (document.getElementById("gallery-temp")) {
          mainContainer.removeChild(document.getElementById("gallery-temp"))
        }
      }, 500)
    }

    // Update active thumbnail
    galleryThumbs.forEach((thumb) => thumb.classList.remove("active"))
    activeThumb.classList.add("active")

    // Update active dot
    galleryDots.forEach((dot) => dot.classList.remove("active"))
    galleryDots[index].classList.add("active")

    currentGalleryIndex = index
  }

  // Add click event to thumbnails
  galleryThumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      updateGallery(index)
    })
  })

  // Add click event to dots
  galleryDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateGallery(index)
    })
  })

  // Add click event to prev/next buttons
  galleryPrev.addEventListener("click", () => {
    let newIndex = currentGalleryIndex - 1
    if (newIndex < 0) newIndex = totalGalleryItems - 1
    updateGallery(newIndex)
  })

  galleryNext.addEventListener("click", () => {
    let newIndex = currentGalleryIndex + 1
    if (newIndex >= totalGalleryItems) newIndex = 0
    updateGallery(newIndex)
  })

  // Auto rotate gallery
  let galleryInterval

  function startGalleryRotation() {
    galleryInterval = setInterval(() => {
      let newIndex = currentGalleryIndex + 1
      if (newIndex >= totalGalleryItems) newIndex = 0
      updateGallery(newIndex)
    }, 5000)
  }

  function stopGalleryRotation() {
    clearInterval(galleryInterval)
  }

  // Start auto rotation
  if (galleryThumbs.length > 0) {
    startGalleryRotation()

    // Pause on hover
    if (galleryContainer) {
      galleryContainer.addEventListener("mouseenter", stopGalleryRotation)
      galleryContainer.addEventListener("mouseleave", startGalleryRotation)
    }
  }

  // Add this to the end of the DOMContentLoaded event handler

  // Clock functionality
  function updateClock() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const hourDeg = (hours % 12) * 30 + minutes * 0.5
    const minuteDeg = minutes * 6
    const secondDeg = seconds * 6

    const hourHand = document.querySelector(".clock-hour")
    const minuteHand = document.querySelector(".clock-minute")
    const secondHand = document.querySelector(".clock-second")

    if (hourHand && minuteHand && secondHand) {
      hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
      minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`
      secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`
    }

    // Update library status
    updateLibraryStatus(now)
  }

  function updateLibraryStatus(now) {
    const statusElement = document.getElementById("library-status")
    if (!statusElement) return

    const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const currentTime = hours * 60 + minutes // Convert to minutes for easier comparison

    let isOpen = false
    let statusText = ""

    // Check if library is open based on day and time
    if (day === 0) {
      // Sunday
      statusText = "Closed Today"
    } else if (day === 6) {
      // Saturday
      if (currentTime >= 9 * 60 && currentTime < 13 * 60) {
        isOpen = true
        statusText = "Open Now"
      } else if (currentTime < 9 * 60) {
        statusText = "Opens at 9:00 AM"
      } else {
        statusText = "Closed Now"
      }
    } else {
      // Monday to Friday
      if (currentTime >= 8 * 60 && currentTime < 17 * 60) {
        isOpen = true
        statusText = "Open Now"
      } else if (currentTime < 8 * 60) {
        statusText = "Opens at 8:00 AM"
      } else {
        statusText = "Closed Now"
      }
    }

    statusElement.textContent = statusText
    statusElement.className = "status-value " + (isOpen ? "open" : "closed")
  }

  // Initialize and update clock every second
  updateClock()
  setInterval(updateClock, 1000)
})

