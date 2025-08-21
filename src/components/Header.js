import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefícios</a>
        <a href="#cta" onClick={() => setMenuOpen(false)}>Quero Agora</a>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
