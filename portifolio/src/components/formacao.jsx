import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    id: 1,
    type: "Tecnólogo",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Senac EAD",
    period: "2025 - Presente",
    featured: true, // Vamos usar isso para destacar este card
  },
  {
    id: 2,
    type: "Curso",
    title: "Full-Stack Web Development Bootcamp",
    institution: "Udemy - By: Dr.Angela Yu",
    hours: "61h",
    year: "2025",
  },
  {
    id: 3,
    type: "Curso",
    title: "Desenvolvimento Web Completo",
    institution: "Udemy - By: Jorge Sant Ana",
    hours: "120h",
    year: "2024",
  },
  {
    id: 4,
    type: "Curso",
    title: "HTML e CSS (Módulo 1 ao 5)",
    institution: "Curso em vídeo",
    hours: "160h",
    year: "2025",
  },
  {
    id: 5,
    type: "Curso",
    title: "Javascript",
    institution: "Curso em vídeo",
    hours: "40h",
    year: "2024",
  },
];

export default function Education() {
  const containerRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.from(".edu-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Começa quando o topo da seção estiver em 80% da tela
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="education-section" ref={containerRef}>
      <h2 className="section-title">Formação <span className="highlight-text">& Cursos</span></h2>
      
      <div className="education-grid">
        {courses.map((item) => (
          <div 
            key={item.id} 
            className={`edu-card ${item.featured ? "featured-card" : ""}`}
          >
            <div className="card-header">
              <span className="course-type">{item.type}</span>
            </div>
            
            <h3 className="course-title">{item.title}</h3>
            <p className="course-institution">{item.institution}</p>
            
            <div className="card-footer">
              {item.hours && <span className="course-hours">{item.hours}</span>}
              <span className="course-period">{item.period || item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

