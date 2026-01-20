import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import { useRef, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Referências para os elementos que vamos manipular
  const containerRef = useRef(null);
  const zoomTextRef = useRef(null);
  const subtle = useRef(null)

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

    gsap.to("#h1-first", {
      delay:3.6,
      y: -25,
      fontSize: "4rem",
      textAlign: "left",
      display: "block",
      ease: "power1.inOut"
    })
    gsap.to(".zoom-content", {
      delay: 3.6,
      position: "absolute",
      left: 0,
      marginRight: "auto",
      ease: "power1.inOut"
    })
    gsap.fromTo("#navbar",{
      opacity: 0,
      y: -100
    }, {
      delay:4,
      opacity: 1,
      y: 0,
      display: "flex"
    })
    gsap.to("#pp", {
      delay: 3.6,
      y:-18,
      x: -4
    })

    return () => {
      splith1.revert();
    };
  }, [])


  return (
    <>
    
    <div className="app-container">
      {/* SEÇÃO DO ZOOM (Hero) */}
      <section className="zoom-hero" ref={containerRef}>

        <nav id="navbar">
          <div id='logo'>
            <span>DD</span>
          </div>

          <ul type='none'>
            <li>Home</li>
            <li>Projetos</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>

        <div id="eu"></div>

        <div className="zoom-content">
          <h1 className="zoom-text" id='h1-first' ref={zoomTextRef}>
            DESENVOLVEDOR
          </h1>
          <p id='pp' ref={subtle}>FULLSTACK</p>
        </div>
      </section>

      {/* PRÓXIMA SEÇÃO (O que será revelado) */}
      <section className="next-section">
        <h2>Bem-vindo ao meu mundo.</h2>
        <p>Aqui é onde a jornada começa de verdade depois de passar pelo portal.</p>
        {/* Mais conteúdo... */}
        <DotLottieReact
          src="assets/coding.lottie"
          loop
          autoplay
        />
      </section>
      <section className="next-section" style={{ background: '#111' }}>
        <p>Mais espaço para scroll...</p>
      </section>
    </div>
    </>
  );
}

export default App;