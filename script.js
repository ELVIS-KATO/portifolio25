/* ===== KATO ELVIS PERSONAL PORTFOLIO - JAVASCRIPT ===== */
/* Interactive functionality including smooth scrolling, animations, and form handling */

/* ===== SMOOTH NAVIGATION FUNCTIONALITY ===== */
// Handle smooth scrolling and active nav link highlighting when clicking nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
  
      if (target) {
        // Smooth scroll to the target section
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
  
        // Update active nav link
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active")
        })
        this.classList.add("active")
  
        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click()
        }
      }
    })
  })
  
  /* ===== UPDATE ACTIVE NAV LINK ON SCROLL ===== */
  // Automatically highlight the nav link for the current section as user scrolls
  window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section")
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      // Check if section is in viewport
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })
  
    // Update active nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  /* ===== CONTACT FORM HANDLING ===== */
  // Handle form submission with validation and user feedback
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault() // Prevent default form submission
  
    // Show success message (in a real app, send data to server)
    alert("Thank you for your message! I will get back to you soon.")
  
    // Reset the form
    this.reset()
  })
  
  /* ===== FRIENDS SLIDER FUNCTIONALITY ===== */
  let currentSlide = 0
  const friendSlides = document.querySelectorAll(".friend-slide")
  const indicators = document.querySelectorAll(".indicator")
  
  function updateSlider() {
    // Hide all slides
    friendSlides.forEach((slide) => slide.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))
  
    // Show current slide with smooth transition
    friendSlides[currentSlide].classList.add("active")
    indicators[currentSlide].classList.add("active")
  }
  
  // Navigate to next slide
  document.getElementById("friendsNext").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % friendSlides.length
    updateSlider()
  })
  
  // Navigate to previous slide
  document.getElementById("friendsPrev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + friendSlides.length) % friendSlides.length
    updateSlider()
  })
  
  // Click on indicators to jump to slide
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index
      updateSlider()
    })
  })
  
  // Auto-advance slider every 6 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % friendSlides.length
    updateSlider()
  }, 6000)
  
  // Initialize slider
  updateSlider()
  
  /* ===== INITIALIZE ON PAGE LOAD ===== */
  // Run initialization functions when the page has fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const hobbyCards = document.querySelectorAll(".hobby-card")
    hobbyCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`
    })
  })
  
  /* ===== SCROLL TO TOP BUTTON FUNCTIONALITY ===== */
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")
  
  // Show button when user scrolls down 300px
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show")
    } else {
      scrollToTopBtn.classList.remove("show")
    }
  })
  
  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
  
  /* ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ===== */
  // Trigger animations when elements enter viewport for enhanced visual effect
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Trigger animation when element enters viewport
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
  
        // Add glow effect to skill cards on hover
        if (entry.target.classList.contains("skill-card")) {
          entry.target.addEventListener("mouseenter", function () {
            this.style.textShadow = "0 0 20px rgba(233, 69, 96, 0.5)"
          })
          entry.target.addEventListener("mouseleave", function () {
            this.style.textShadow = "none"
          })
        }
  
        // Stop observing after animation
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  // Apply observer to all cards and interactive elements
  document.querySelectorAll(".card-item, .skill-card, .hobby-card, .contact-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })
  
  // Enable smooth scrolling for entire document
  document.documentElement.style.scrollBehavior = "smooth"
  
  /* ===== ENHANCED PARALLAX EFFECT ON HERO SHAPES ===== */
  // Create parallax motion on background shapes based on mouse movement
  window.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".hero-bg-shape")
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
  
    shapes.forEach((shape, index) => {
      const moveX = (x - 0.5) * (index + 1) * 50
      const moveY = (y - 0.5) * (index + 1) * 50
      shape.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  })
  