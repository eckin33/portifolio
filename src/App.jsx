import './App.css';
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function App() {
  useEffect(() => {
    const split = new SplitText("#pp", {
      type: "words",
    });

    gsap.fromTo(
      split.words,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        autoAlpha: 0,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      }
    );

    // Cleanup to avoid memory leaks
    return () => {
      split.revert();
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div id="first">
          <h1 id="h1-first" aria-label="Desenvolvedor">
            <div aria-hidden="true">D</div>
            <div aria-hidden="true">e</div>
            <div aria-hidden="true">s</div>
            <div aria-hidden="true">e</div>
            <div aria-hidden="true">n</div>
            <div aria-hidden="true">v</div>
            <div aria-hidden="true">o</div>
            <div aria-hidden="true">l</div>
            <div aria-hidden="true">v</div>
            <div aria-hidden="true">e</div>
            <div aria-hidden="true">d</div>
            <div aria-hidden="true">o</div>
            <div aria-hidden="true">r</div>
          </h1>
          <p id="pp">Transformando ideias em código</p>
        </div>
      </div>
    </>
  );
}

export default App;