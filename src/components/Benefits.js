import React, { useEffect, useRef } from "react";

function Benefits() {
  const items = [
    { title: "Som Surround 7.1 Imersivo", desc: "Sinta cada tiro, passo e explosão com precisão total, como se estivesse dentro do jogo. em pouco tempo." },
    { title: "Microfone com Cancelamento de Ruído", desc: "Comunicação cristalina com seu time, sem ruídos ou interferências externas." },
    { title: "Conforto Extremo para Longas Sessões", desc: "Almofadas ergonômicas e leves que permitem horas de jogo sem desconforto." },
    { title: "Iluminação RGB Personalizável", desc: "Customize seu headset com cores vibrantes e efeitos que combinam com seu setup." },
    { title: "Compatível com Todas as Plataformas", desc: "Funciona em PC, consoles e dispositivos móveis, garantindo versatilidade total." },

  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="benefits" id="benefits">
      <h2>Benefícios do Produto</h2>
      <div className="benefits-grid">
        {items.map((item, i) => (
          <div
            key={i}
            className="benefit-card"
            ref={el => (cardRefs.current[i] = el)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
