import React, { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('EN');

  const content = {
    EN: {
      title: <>Empowering Children.<br />Transforming Lives.</>,
      
      text: `Action For Grace is a globally recognized humanitarian foundation dedicated to improving the lives of children of all ages in impoverished communities throughout Guatemala’s Dry Corridor. We are committed to eradicating hunger, malnutrition, and the effects of systemic poverty by addressing the root causes of inequality, climate vulnerability, and limited access to education and healthcare that disproportionately affect rural and Indigenous families.

Our programs provide comprehensive and transformative support, including access to education, mentorship, psychosocial assistance, community initiatives, and skill development opportunities. We work closely with families, schools, and local organizations to create sustainable solutions that break the cycle of poverty.`,

      missionTitle: "Our Mission",

      missionText: `Our mission is to ensure that children of all ages have access to essential resources and support systems to grow, learn, and flourish. Through programs focused on nutrition, education, healthcare, mentorship, and community engagement, we aim to build resilience and provide long-term sustainable opportunities.

We strive to empower children and communities to overcome social, economic, and environmental challenges by building pathways toward self-sufficiency and sustainable development. By fostering holistic growth, promoting equality, and advocating for the rights of every child, Action For Grace serves as a bridge for global solidarity and transformative impact.`,

      cta: "Donate / Contact Us"
    },

    ES: {
      title: <>Empoderando Niños.<br />Transformando Vidas.</>,

      text: `Action For Grace es una fundación humanitaria global dedicada a mejorar la vida de niños de todas las edades en comunidades empobrecidas del Corredor Seco de Guatemala. Nos comprometemos a erradicar el hambre, la desnutrición y los efectos de la pobreza sistémica, abordando las causas profundas de la desigualdad, la vulnerabilidad climática y el acceso limitado a la educación y la atención médica que afectan de manera desproporcionada a las familias rurales e indígenas.

Nuestros programas ofrecen apoyo integral y transformador, incluyendo acceso a educación, mentoría, apoyo psicosocial, iniciativas comunitarias y oportunidades de desarrollo de habilidades. Trabajamos estrechamente con familias, escuelas y organizaciones locales para crear soluciones sostenibles que rompan el ciclo de la pobreza.`,

      missionTitle: "Nuestra misión",

      missionText: `Nuestra misión es garantizar que los niños de todas las edades tengan acceso a los recursos y apoyos esenciales para crecer, aprender y prosperar. A través de programas centrados en nutrición, educación, salud, mentoría y participación comunitaria, buscamos fortalecer la resiliencia y brindar oportunidades sostenibles a largo plazo.

Nos esforzamos por empoderar a los niños y a las comunidades para superar desafíos sociales, económicos y ambientales, construyendo caminos hacia la autosuficiencia y el desarrollo sostenible. Al fomentar un crecimiento integral, promover la igualdad y defender los derechos de cada niño, Action For Grace actúa como un puente para la solidaridad global y el impacto transformador.`,

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

        {/* TITULO PRINCIPAL */}
        <h1>{content[lang].title}</h1>

        {/* TEXTO INSTITUCIONAL */}
        <p>{content[lang].text}</p>

        {/* SEGUNDO TITULO - MISSÃO */}
        <h2 className="mission-title">
          {content[lang].missionTitle}
        </h2>

        {/* TEXTO MISSÃO */}
        <p>{content[lang].missionText}</p>

        {/* BOTÃO */}
        <a href="mailto:actionforgrace@gmail.com" className="btn-cta">
          {content[lang].cta}
        </a>

      </section>

      {/* IMAGEM KIDS */}
      <section className="kids-image">
        <img src="/kids.png" alt="Children" />
      </section>

      {/* VIDEO */}
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

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Action For Grace – Committed to a world where every child thrives with dignity and opportunity.
        </p>
      </footer>

    </div>
  );
}

export default App;
