import React, { useState, useRef } from "react";
import Credits from "./Components/Credits";
import Footer from "./Components/Footer";
import FormC from "./Components/FormC";
import Header from "./Components/Header";
import JoinUs from "./Components/Join_us";
import MissionSection from "./Components/Misson";
import SectionCta from "./Components/SectionCta";
import Services from "./Components/Services";
import Vsl from "./Components/Vls_Section";
import WorkIn from "./Components/Work_in"; // Importando o pop-up

export default function App() {
  const [isJoinUsVisible, setIsJoinUsVisible] = useState(false); // Controla a visibilidade do pop-up
  const contactRef = useRef(null); // Referência para a seção de "Contate-nos"
  const servicesRef = useRef(null); // Referência para a seção de "Nossos serviços"

  // Função para rolar até uma seção específica
  const scrollToSection = (section) => {
    if (section && section.current) {
      // Verifica se a ref está definida
      window.scrollTo({
        top: section.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Função para abrir o pop-up "Trabalhe Conosco"
  const handleOpenJoinUs = () => {
    setIsJoinUsVisible(true);
  };

  // Função para fechar o pop-up "Trabalhe Conosco"
  const handleCloseJoinUs = () => {
    setIsJoinUsVisible(false);
  };

  return (
    <>
      <Header
        onContactClick={() => scrollToSection(contactRef)} // Passa para a seção de "Contate-nos"
        onServicesClick={() => scrollToSection(servicesRef)} // Passa para a seção de "Nossos Serviços"
        onWorkInClick={handleOpenJoinUs} // Abre o pop-up "Trabalhe Conosco"
      />
      <SectionCta />
      <MissionSection />
      <Services ref={servicesRef} /> {/* Usando a ref para "Nossos serviços" */}
      <Vsl />
      <FormC ref={contactRef} /> {/* Usando a ref para "Contate-nos" */}
      <JoinUs />
      <Footer />
      <Credits />
      {/* Pop-up "Trabalhe Conosco" */}
      {isJoinUsVisible && <WorkIn onClose={handleCloseJoinUs} />}
    </>
  );
}
