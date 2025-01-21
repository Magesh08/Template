// Burger menu functionality
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
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });
      burger.classList.toggle("toggle");
  });

  // Close menu on link click
  navLinks.forEach((link) => {
      link.addEventListener("click", () => {
          nav.classList.remove("nav-active");
          burger.classList.remove("toggle");
          navLinks.forEach((link) => {
              link.style.animation = "";
          });
      });
  });
};

// Scroll-based animation
const handleScroll = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const windowHeight = window.innerHeight;
      const triggerBottom = sectionTop - windowHeight + 200;

      if (
          !section.classList.contains("hero") &&
          window.scrollY > triggerBottom &&
          !section.classList.contains("show")
      ) {
          section.classList.add("show");
      }
  });
};

// EmailJS functionality
(function () {
  emailjs.init("KgWk9D9YYPLosc66U"); // Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const formData = {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      message: this.message.value,
  };

  emailjs
      .send("service_z6ozmnc", "template_prl12pj", formData) // Replace with actual Service ID & Template ID
      .then(
          (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("Message sent successfully!");
              this.reset();
          },
          (error) => {
              console.error("FAILED...", error);
              alert("Failed to send the message, please try again!");
          }
      );
});

// Initialize functionality
navSlide();
window.addEventListener("scroll", handleScroll);
