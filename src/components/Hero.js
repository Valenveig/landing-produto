// Hero.jsx
import React from 'react';
import heroImg from '../assets/Daco_4596686.png';
import '../App.css'; // CSS importado

function Hero() {
  return (
    <section className="hero fade-in-up" id="hero">
      <div className="container">
        {/* Conteúdo do lado esquerdo */}
        <div className="hero-content">
          <h1>
            Imersão Total nos <span>Games</span>
          </h1>
          <p>
            Descubra o HyperSound X1, o headset gamer que transforma cada partida em uma experiência única. 
            Som surround 7.1, microfone com cancelamento de ruído e conforto extremo para longas sessões.
          </p>
          <button className="cta-btn">Garanta o Seu</button>
        </div>

        {/* Imagem do lado direito */}
        <div className="hero-image">
          <img src={heroImg} alt="Jogador usando headset HyperSound X1" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
