const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Add event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active"); // Close the sidebar
      burger.classList.remove("toggle"); // Close burger animation
      navLinks.forEach((link) => {
        link.style.animation = "";
      }); // Remove the animation on every link
    });
  });
};

const handleScroll = () => {
  const sections = document.querySelectorAll("section");
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const windowHeight = window.innerHeight;
    const triggerBottom = sectionTop - windowHeight + 200;
    
    // Check if the section is NOT the hero section and has not already been shown
      if (section.classList.contains('hero') == false && window.scrollY > triggerBottom && !section.classList.contains('show')) {
        section.classList.add("show");
      }
  });
};


navSlide();
window.addEventListener("scroll", handleScroll);  