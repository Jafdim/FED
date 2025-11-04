document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger")
  const mobileMenu = document.getElementById("mobileMenu")

  if (!hamburger || !mobileMenu) {
    console.log("[v0] Hamburger or mobile menu element not found")
    return
  }

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation()
    hamburger.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })


  const carousel = document.getElementById("carousel")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  if (carousel && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: -carousel.offsetWidth * 0.5,
        behavior: "smooth",
      })
    })

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: carousel.offsetWidth * 0.5,
        behavior: "smooth",
      })
    })
  }

  
  document.addEventListener("click", (e) => {
    if (hamburger && mobileMenu && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    }
  })

 
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#") {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })
})

