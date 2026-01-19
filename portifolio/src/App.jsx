import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import { useLayoutEffect, useRef, useEffect } from "react";
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
      x: -100,
      y: 100,
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
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: {
        from: "random",
        amount: 0.05
      },

      ease: "power2.out"
    });

    return () => {
      splith1.revert();
    };
  }, [])

  useLayoutEffect(() => {
    // Criamos um contexto do GSAP para facilitar a limpeza depois
    let ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // O elemento que dispara a animação
          start: "top top", // Começa quando o topo do container bate no topo da tela
          end: "+=300%", // A animação vai durar o equivalente a 3x a altura da tela de scroll
          scrub: 1, // O "1" dá um atraso suave de 1 segundo entre o scroll e a animação
          pin: true, // FIXA o container na tela durante a animação
          // markers: true // Descomente para ver os marcadores de início/fim na tela (debug)
        }
      });

      tl.to(subtle.current, {
        opacity: 0,
        color: '#15151b',
        x: -50,
        duration: 0.002
      })

      tl.to(zoomTextRef.current, {
        scale: 150, // Aumenta a escala em 150 vezes!
        // Opcional: um leve movimento no eixo Z para ajudar na performance do navegador
        z: 1,
        ease: "power1.inOut", // Uma aceleração suave no início e no fim
        duration: 2
      });

    }, containerRef); // Escopo do contexto

    return () => ctx.revert(); // Limpeza crucial para o React não bugar
  }, []);

  return (
    <>
    
    <div className="app-container">
      {/* SEÇÃO DO ZOOM (Hero) */}
      <section className="zoom-hero" ref={containerRef}>
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