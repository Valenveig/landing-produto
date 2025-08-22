import React from 'react';
import '../App.css';

function ProdutoDescricao() {
  return (
    <section className="produto-descricao fade-in-up" id="descricao">
      <div className="container">
        <div className="descricao-card">
          <h2>Conheça o HyperSound X1</h2>
          <div className="colunas-texto">
            <p>
              O HyperSound X1 leva sua experiência de jogo a outro nível. Com som surround 7.1 imersivo, 
              microfone com cancelamento de ruído e conforto extremo para longas sessões, você sente cada 
              detalhe do jogo como nunca antes.
            </p>
            <p>
              Personalize a iluminação RGB e mergulhe no mundo dos games com estilo e performance. 
              Compatível com PC, consoles e dispositivos móveis, ele se adapta perfeitamente à sua rotina gamer.
            </p>
          </div>
          <button className="cta-btn">Comprar Agora</button>
        </div>
      </div>
    </section>
  );
}

export default ProdutoDescricao;
