const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
     const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
           if(link.style.animation){
             link.style.animation = '';
          }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
          }
         
        });
          // Burger Animation
        burger.classList.toggle('toggle')
    });
};

const handleScroll = () => {
   const sections = document.querySelectorAll('section');

   sections.forEach(section => {
       const sectionTop = section.offsetTop;
       const windowHeight = window.innerHeight;
       const triggerBottom = sectionTop - windowHeight + 200;

       if (window.scrollY > triggerBottom) {
           section.classList.add('show');
       } else {
           section.classList.remove('show');
       }
   });
};

// Validate email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return emailRegex.test(email);
};

// Validate phone
const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[0-9]{10,15}$/; // Accepts international and local formats
  return phoneRegex.test(phone);
};

// EmailJS functionality with validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  // Validation
  let isValid = true;

  if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
  }
  if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number (10-15 digits).");
      isValid = false;
  }
  // if (message.length < 10) {
  //     alert("Your message should be at least 10 characters long.");
  //     isValid = false;
  // }

  if (!isValid) {
      return; // Stop submission if any validation fails
  }

  const formData = { name, phone, email, message };

  // Send the email
  emailjs
      .send("service_z6ozmnc", "template_prl12pj", formData) // Replace with your Service ID & Template ID
      .then(
          (response) => {
              console.log("SUCCESS!", response.status, response.text);
             showSuccessModal(); // Show the modal on success
              this.reset();
          },
          (error) => {
              console.error("FAILED...", error);
              alert("Failed to send the message, please try again!");
          }
      );
});

// Initialize EmailJS and functionality
(function () {
  emailjs.init("KgWk9D9YYPLosc66U"); // Replace with your EmailJS Public Key
})();


// Function to show the success modal
function showSuccessModal() {
  const modal = document.createElement("div");
  modal.classList.add("success-modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">×</span>
      <p>Message sent successfully!</p>
    </div>
  `;
  document.body.appendChild(modal);

  // Close modal functionality
  const closeModalButton = modal.querySelector(".close-modal");
  closeModalButton.addEventListener("click", () => {
      document.body.removeChild(modal);
  });

  // Close the modal if clicked outside
  modal.addEventListener('click', function(event) {
      if (event.target === modal) {
          document.body.removeChild(modal);
      }
  });


    // Close the modal after 3 sec
    setTimeout(() => {
      if(document.body.contains(modal)){
          document.body.removeChild(modal);
      }
    }, 3000);


}
// Initialize burger menu and scroll animations
navSlide();
window.addEventListener("scroll", handleScroll);