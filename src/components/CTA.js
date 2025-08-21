import React from "react";

function CTA() {
  return (
    <section className="cta" id="cta">
      <h2>Pronto para começar?</h2>
      <p>Cadastre-se agora e dê o primeiro passo para transformar sua jornada.</p>
      <form className="cta-form">
        <input type="email" placeholder="Digite seu e-mail" required />
        <button type="submit">Quero Receber</button>
      </form>
    </section>
  );
}

export default CTA;
