import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";
import ProdutoDescricao from "./components/ProdutoDescricao";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProdutoDescricao/>
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
