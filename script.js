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

navSlide();
window.addEventListener('scroll', handleScroll);