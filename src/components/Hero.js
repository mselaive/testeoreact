import React from 'react';
import heroImage from './assets/img/hero-bg.jpg';

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <img src={heroImage} alt="" data-aos="fade-in" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">Choripan-HTML</h2>
            <p data-aos="fade-up" data-aos-delay="200">Grupo de estudiantes de ingeniería civil informática</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
