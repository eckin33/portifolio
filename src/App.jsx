import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from 'gsap/SplitText';
import { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Education from './components/formacao';
import Navbar from './components/navbar';
import LanguageSwitcher from './components/languageToggler';
import ThemeToggler from './components/themeToggler.jsx';
import RevealOnScroll from './components/reveal.jsx';
import Stacks from './components/stacks';
import Projetos from './components/projetos';
import Sobre from './components/sobre';
import Contato from './components/contato';
import Footer from './components/footer';
import Principal from './components/principal';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

function App() {

  useEffect(() => {
    let split = SplitText.create("#pp", { type: "lines", wordsClass: "word" });

    gsap.from(split.lines, {
      duration: 1,
      delay: 1.6,
      x: -100,
      autoAlpha: 0,
      stagger: {
        amount: 0.06,
        from: "random"
      },
      ease: "power2.out"
    });

    return () => {
      split.revert();
    };

  }, []);

  useEffect(() => {
    let splith1 = SplitText.create("#h1-first", { type: "chars" });

    gsap.from(splith1.chars, {
      duration: 1.5,
      y: 100,
      autoAlpha: 0,
      stagger: {
        from: "random",
        amount: 0.05
      },

      ease: "power2.out"
    });

    //Desenvolvedor
    gsap.to("#h1-first", {
      delay: 3.6,
      y: -25,
      fontSize: "4rem",
      textAlign: "left",
      display: "block",
      duration: .8,
      ease: "power1.inOut"
    })
    let mm = gsap.matchMedia();


    gsap.to(".zoom-content", {
      delay: 3.6,
      position: "absolute",
      left: 0,
      marginRight: "auto",
      ease: "power1.inOut"
    })

    //NavBar
    gsap.fromTo("#navbar", {
      opacity: 0,
      y: -100
    }, {
      delay: 3,
      opacity: 1,
      y: 0,
    })
    gsap.fromTo(".toggle-language", {
      opacity: 0,
      y: -100
    }, {
      delay: 4,
      opacity: 1,
      y: 0,
    })
    gsap.fromTo(".toggle-theme", {
      opacity: 0,
      y: -100
    }, {
      delay: 4,
      opacity: 1,
      y: 0,
    })

    //fullstack
    gsap.to("#pp", {
      delay: 3.6,
      y: -18,
      x: -4
    })

    //icones stacks
    gsap.fromTo(".icons-eu", {
      display: "none",
      opacity: 0,
    }, {
      delay: 5,
      duration: 1.4,
      opacity: 1,
      display: "block"
    })
    gsap.to('#js', {
      y: 10
    })

    //Minha foto
    gsap.fromTo("#eu", {
      display: "none",
      opacity: 0,
      y: 100
    }, {
      delay: 5,
      duration: 1.4,
      opacity: 1,
      display: "block",
      y: 0
    })
    gsap.fromTo("#btn-linkedin", {
      opacity: 0,
      y: 100
    }, {
      delay: 5,
      duration: 1.4,
      opacity: 1,
      y: 0
    })
    gsap.fromTo("#btn-github", {
      opacity: 0,
      y: 100
    }, {
      delay: 5,
      duration: 1.4,
      opacity: 1,
      y: 0
    })


    //Nome
    gsap.fromTo("#name", {
      opacity: 0,
      x: -200
    }, {
      delay: 4.8,
      duration: 1.8,
      opacity: 1,
      x: 0
    })
    gsap.to("#saudacao", {
      opacity: 1,
      delay: 4.7,
      y: 20,
      duration: 3

    })

    gsap.fromTo("#first-button", {
      display: "none",
      opacity: 0,
      y: 100
    }, {
      delay: 5.2,
      duration: 1.4,
      y: 0,
      opacity: 1,
      display: "block"
    })
    gsap.fromTo("#box-arrow", {
      opacity: 0,
      display: "none",
      y: -100
    }, {
      y: 0,
      delay: 4.9,
      opacity: 1,
      display: "block"
    })

    gsap.to("#arrow-svg", {
      delay: 4.9,
      y: 7,
      duration: .8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    gsap.to("#boneco-voando", {
      y: 27,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    document.addEventListener("mousemove", (e) => {
      const layers = document.querySelectorAll(".parallax-layer");

      // Capturae a posição do mouse
      const x = e.clientX;
      const y = e.clientY;

      layers.forEach((layer) => {

        const speed = layer.getAttribute("data-speed");

        const xOffset = (window.innerWidth / 2 - x) * (speed / 100);
        const yOffset = (window.innerHeight / 2 - y) * (speed / 100);

        // Aplica o movimento
        layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });

    return () => {
      splith1.revert();
    };
  }, [])

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.3,
      effects: false,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, [])

  return (<BrowserRouter>

    <>
      <RevealOnScroll />
      <div id="smooth-wrapper" >
        <ThemeToggler></ThemeToggler>
        <LanguageSwitcher></LanguageSwitcher>
        <Navbar></Navbar>
        <div id="smooth-content">
          <div className="app-container">
            <Principal></Principal>
            <Projetos></Projetos>
            <Stacks></Stacks>
            <Sobre></Sobre>
            <Education />
            <Contato></Contato>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  </BrowserRouter>
  );
}

export default App;