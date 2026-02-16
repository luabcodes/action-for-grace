import React, { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('EN');

  const content = {
    EN: {
      title: "Empowering Children. Transforming Lives.",
      text: `Action For Grace is a globally recognized foundation dedicated to delivering direct-impact programs that improve the lives of children of all ages in impoverished communities throughout Guatemala’s Dry Corridor. We work to reduce child hunger, malnutrition, and inequality, while providing education, mentorship, and holistic development programs that empower children to reach their full potential.

Our programs include school support, special events, nutritional guidance, and community mentorship, ensuring that every child receives the tools to grow, learn, and thrive with hope and dignity. By partnering with families, local communities, and global supporters, we aim to break the cycle of poverty, strengthen resilience to climate challenges, and provide sustainable opportunities for children to flourish.

Supporting Action For Grace means joining a global network committed to changing lives, nurturing potential, and inspiring hope, one child at a time. Every contribution helps bring education, joy, and opportunity to those who need it most.`,
      cta: "Donate / Contact Us"
    },
    ES: {
      title: "Empoderando Niños. Transformando Vidas.",
      text: `Action For Grace es una fundación reconocida a nivel global dedicada a ofrecer programas de impacto directo que mejoran la vida de los niños de todas las edades en comunidades empobrecidas a lo largo del Corredor Seco de Guatemala. Trabajamos para reducir el hambre infantil, la desnutrición y la desigualdad, mientras proporcionamos educación, mentoría y programas de desarrollo integral que permiten a los niños alcanzar su máximo potencial.

Nuestros programas incluyen apoyo escolar, eventos especiales, orientación nutricional y mentoría comunitaria, asegurando que cada niño reciba las herramientas necesarias para crecer, aprender y prosperar con esperanza y dignidad. Al asociarnos con familias, comunidades locales y colaboradores globales, buscamos romper el ciclo de la pobreza, fortalecer la resiliencia ante desafíos climáticos y ofrecer oportunidades sostenibles para que los niños puedan desarrollarse plenamente.

Apoyar a Action For Grace significa unirse a una red global comprometida con cambiar vidas, fomentar el potencial y brindar esperanza, un niño a la vez. Cada contribución ayuda a llevar educación, alegría y oportunidades a quienes más lo necesitan.`,
      cta: "Donar / Contáctanos"
    }
  };

  const changeLang = (newLang) => setLang(newLang);

  return (
    <div className="App">
      {/* NAVBAR */}
      <header className="navbar">
        <img src="/action.png" alt="Logo" className="logo" />
        <div className="nav-center">
          <button onClick={() => changeLang('EN')} className={lang === 'EN' ? 'active' : ''}>EN</button>
          <button onClick={() => changeLang('ES')} className={lang === 'ES' ? 'active' : ''}>ES</button>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="hero-banner-section">
        <img src="/bannerkidss.png" alt="Action For Grace Banner" className="hero-banner" />
      </section>

      {/* TEXTO INSTITUCIONAL */}
      <section className="video-text">
        <h1>{content[lang].title}</h1>
        <p>{content[lang].text}</p>
        <a href="mailto:actionforgrace@gmail.com" className="btn-cta">{content[lang].cta}</a>
      </section>

      {/* IMAGEM KIDS */}
      <section className="kids-image">
        <img src="/kids.png" alt="Children" />
      </section>

      {/* VIDEO 16:9 - AUTOPLAY, LOOP, MUTED */}
      <section className="video-section">
        <video 
          controls 
          loop 
          autoPlay 
          muted 
          className="hero-video"
        >
          <source src="/actionn.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* FOOTER MODERNO */}
      <footer>
        <p>© 2026 Action For Grace – Committed to a world where every child thrives with dignity and opportunity.</p>
      </footer>
    </div>
  );
}

export default App;
