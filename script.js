document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle")
    const body = document.body
  
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
      const isDarkMode = body.classList.contains("dark-mode")
      localStorage.setItem("dark-mode", isDarkMode)
  
      if (isDarkMode) {
        document.querySelector("#theme-toggle .fa-moon").style.display = "none"
        document.querySelector("#theme-toggle .fa-sun").style.display = "inline-block"
      } else {
        document.querySelector("#theme-toggle .fa-moon").style.display = "inline-block"
        document.querySelector("#theme-toggle .fa-sun").style.display = "none"
      }
    })
    const savedTheme = localStorage.getItem("dark-mode")
    if (savedTheme === "true") {
      body.classList.add("dark-mode")
      document.querySelector("#theme-toggle .fa-moon").style.display = "none"
      document.querySelector("#theme-toggle .fa-sun").style.display = "inline-block"
    } else {
      document.querySelector("#theme-toggle .fa-moon").style.display = "inline-block"
      document.querySelector("#theme-toggle .fa-sun").style.display = "none"
    }
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".service-card, .project-card")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate")
        }
      })
    }
    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() 
  })
  
  