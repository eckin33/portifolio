import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from 'gsap/SplitText';
import { useRef, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

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
      delay: 4,
      opacity: 1,
      y: 0,
      display: "flex"
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

    document.addEventListener("mousemove", (e) => {
      const layers = document.querySelectorAll(".parallax-layer");

      // Captura a posição do mouse
      const x = e.clientX;
      const y = e.clientY;

      layers.forEach((layer) => {
        // Puxa a velocidade definida no HTML
        const speed = layer.getAttribute("data-speed");

        // Calcula o deslocamento (dividimos por 100 para o movimento ser sutil)
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


  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
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


              <div className="zoom-content">
                <h1 id="name">Eai! eu sou o Erick Duarte <span id="saudacao">🖖</span></h1>
                <h1 className="zoom-text" id='h1-first' ref={zoomTextRef}>
                  DESENVOLVEDOR
                </h1>
                <p id='pp' ref={subtle}>FULLSTACK</p>

                <div id="box-btn">
                  <button id='first-button'><span>Descobrir</span></button>
                </div>
              </div>

              <div id="box-box-eu" >
                <div id="eu">

                  <div id="js" className='icons-eu parallax-layer' data-speed='.9'></div>
                  <div id="css" className='icons-eu parallax-layer' data-speed='0.6'></div>
                  <div id="html" className='icons-eu parallax-layer' data-speed='1'></div>
                  <div id="node" className='icons-eu parallax-layer' data-speed='.4'></div>
                  <div id="mongodb" className='icons-eu parallax-layer' data-speed='.6'></div>
                  <div id="express" className='icons-eu parallax-layer' data-speed='1'></div>

                </div>
              </div>

              <div id="box-arrow">
                <div id="arrow">

                  <div id="arrow-svg"></div>
                  <p id="p-arrow">Role para ver mais</p>
                </div>
              </div>

            </section>

            {/* PRÓXIMA SEÇÃO (O que será revelado) */}
            <section className="next-section">
              <h2 id='h2-projects'>Projetos</h2>

              <div id="grid-box">

                <div id="left-box">
                  <div className="project-card-left first-card">
                    <h3>Ideal Focus</h3>
                    <p>Descrição do projeto 1.</p>
                  </div>
                </div>

                <div id="right-box">
                  <div className="project-card-right second-card">
                    <h3>Projeto 2</h3>
                    <p>Descrição do projeto 2.</p>
                  </div>
                  <div className="project-card-right thirty-card">
                    <h3>Projeto 3</h3>
                    <p>Descrição do projeto 3.</p>
                  </div>
                </div>

              </div>

            </section>
            <section className="next-section" style={{ background: '#111' }}>
              <p>Mais espaço para scroll...</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;