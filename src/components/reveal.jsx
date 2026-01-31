import { useEffect } from 'react';

function RevealOnScroll() {
    useEffect(() => {
      function reveal() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((el) => {
          const windowHeight = window.innerHeight;
          const elementTop = el.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", reveal);
      reveal();

      return () => {
        window.removeEventListener("scroll", reveal);
      };
    }, []);

    return null ;
  }

export default RevealOnScroll;