import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from 'gsap/SplitText';
import { useRef, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Education from './components/formacao';

import { CardImage } from "./components/card.jsx";
import nobreImg from './imagens/nobre-mk.png'
import dashboardImg from './imagens/dashmk.png'
import idfImg from './imagens/idfmk.png'

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



  return (<BrowserRouter>

    <>
      <div id="smooth-wrapper">
        <nav id="navbar">
          <div id='logo'>
          </div>
          <ul type='none'>
            <li className='font-light text-sm cursor-pointer '>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li className='font-light text-sm cursor-pointer '>
              <HashLink smooth to="/#projetos">
                Projetos
              </HashLink>
            </li>
            <li className='font-light text-sm cursor-pointer '>
              <HashLink smooth to="/#sobre">
                Sobre
              </HashLink>
            </li>
            <li className='font-light text-sm cursor-pointer '>
              <HashLink smooth to="/#box-contato">
                Contato
              </HashLink>
            </li>
          </ul>
        </nav>
        <div id="smooth-content">
          <div className="app-container">
            <section className="zoom-hero" ref={containerRef}>

              <div className="zoom-content" id='home'>
                <h1 id="name" >Eai! eu sou o Erick Duarte! <span id="saudacao"></span></h1>

                <h1 className="font-extrabold zoom-text" id='h1-first' ref={zoomTextRef}>
                  DESENVOLVEDOR
                </h1>

                <p id='pp' ref={subtle}>FULLSTACK</p>

                <div id="box-btn" className='flex flex-row justify-around gap-10'>

                  {/* <button id='first-button'><span>Descobrir</span></button> */}

                  <div id="btn-linkedin" className='flex flex-row justify-around items-center w-40 h-10 border text-slate-300'>
                    <div id="in-icon"></div>
                    <span>LinkedIn</span>
                  </div>
                  
                  <div id="btn-github" className='flex flex-row justify-around items-center w-40 h-10 border text-slate-300'>
                    <span>Github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </div>
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
                  <p id="p-arrow" className='font-light'>Role para ver mais</p>
                </div>
              </div>

            </section>
            <section className="next-section-projetos" id='projetos'>
              <h3 className='font-bold text-8xl mb-14 mt-14' id='h3-stacks'>Projetos</h3>
              <Carousel>
                <CarouselContent className={"max-w-250"}>
                  <CarouselItem className="carrosel-item w-full flex justify-center items-center">
                    <CardImage
                      img={idfImg}
                      titulo="IdealFocus"
                      span="FullStack Development 2025"
                      descricao="O IdFocus é um APP de produtividade. Aplicação FULLSTACK com sistema de Login, registra dados para futuros insights."
                    />
                  </CarouselItem>
                  <CarouselItem className="carrosel-item w-full flex justify-center items-center">
                    <CardImage
                      img={dashboardImg}
                      titulo="Metrics UI"
                      span="FullStack Development 2025"
                      descricao="Metrics UI é um APP de métricas, todos os dados gerados na aplicação IdFocus são mostrados aqui. Aplicação FULLSTACK."
                    />
                  </CarouselItem>
                  <CarouselItem className="carrosel-item w-full flex justify-center items-center ">
                    <CardImage
                      img={nobreImg}
                      titulo="Nobre Soluções Digitais"
                      span="Web Development 2026"
                      descricao="O site da Nobre é focado em UI, com animações suaves, cores e elementos que agradam o usuário."
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>
            <section className='next-section'>
              <h3 className='font-bold text-8xl mb-8' id='h3-stacks'>Minhas Stacks</h3>
              <ul id="stacks" type="none" className=' flex gap-8 justify-center p-4 mt-8 w-full'>
                <li className='text-xs w-22 text-center flex flex-col justify-center items-center gap-2'>
                  <div className="background-stacks">
                    <div id="html-s"></div>
                  </div>HTML</li>
                <li className='text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="css-s"></div>
                </div>CSS</li>
                <li className='text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="js-s"></div>
                </div>JAVASCRIPT</li>
                <li className='text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="node-s" ></div>
                </div>NODE.JS</li>
                <li className='text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="react-s"></div>
                </div>REACT.JS</li>
                <li className='text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="mongo-s"></div>
                </div>MONGODB</li>
              </ul>
            </section>
            <section className="next-section-sobre relative">
              <div id="_3-dashs"></div>
              <div id="sobre" className='w-full '>
                <div id="box-sobre" className='w-full flex flex-row justify-center items-center gap-5'>
                  <div id="img-box-sobre" className='w-1/2 rounded-lg '>
                    <div id='boneco-sentado'></div>
                    <div id='boneco-voando'></div>
                    <div id='boneco-encostado'></div>
                    <div id="dedsec"></div>
                  </div>
                  <div id="text-box-sobre" className='w-1/2 p-4 mb-14 '>
                    <h4 className='text-5xl font-medium mb-8 ' id='h-sobre'>Sobre mim</h4>
                    <p className='p-sobre text-lg '>
                      Me chamo Erick Duarte, graduando no curso de Análise e Desenvolvimento de Sistemas pela instituição Senac e Desenvolvedor FullStack.
                    </p>
                    <p className='p-sobre text-lg '>
                      Desenvolvo páginas e sistemas web responsívos e de layout atrativo. Hoje, com muito estudo na área de desenvolvimento vivo o aprendizado continuo, focando em tecnologias JavaScript. Busco oportunidades no mercado como dev.
                    </p>
                    <p className='p-sobre text-lg '>
                      Desenvolvo páginas e sistemas web responsívos e de layout atrativo. Hoje, com muito estudo na área de desenvolvimento vivo o aprendizado continuo, focando em tecnologias JavaScript. Busco oportunidades no mercado como dev.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Education />

            <section className="next-section-contato">
              <div id="box-ctt" className='w-3/5 flex flex-col gap-10'>
                <h5 className='text-6xl font-extrabold text-left'>Bora codar algo top!?</h5>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus. Repudiandae in magni tempora eius aperiam, atque.</p>
              </div>
              <div id="box-contato" className='self-end mr-8 mb-8'>
                <h6 className='text-3xl text-left pl-8'>Fale comigo por aqui:</h6>
                <ul type='none' className='lista-ctt gap-6 mt-6 text-left pl-8 w-full h-32'>
                  <a href=""><li className='li-ctt'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg></li>
                  </a>

                  <a href=""><li className='li-ctt'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg></li></a>
                  <a href=""><li className='li-ctt'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></li></a>

                  <a href=""><li className='li-ctt'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg></li></a>
                  <a href=""><li className='li-ctt'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg></li></a>
                </ul>
              </div>
            </section>
            <footer className='w-full h-34 flex justify-center items-center text-slate-200 bg-black border-t'>
              <p>2026 Erick Duarte. Todos os direitos reservados.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  </BrowserRouter>
  );
}

export default App;