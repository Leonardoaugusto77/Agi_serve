import React, { useState, useRef } from "react";
import Credits from "./Components/Credits";
import Footer from "./Components/Footer";
import FormC from "./Components/FormC";
import Header from "./Components/Header";
import JoinUs from "./Components/Join_us";
import MissionSection from "./Components/Misson";
import SectionCta from "./Components/SectionCta"; // Atualizado
import Services from "./Components/Services";
import Vsl from "./Components/Vls_Section";
import WorkIn from "./Components/Work_in"; // Importando o pop-up

export default function App() {
  const [isJoinUsVisible, setIsJoinUsVisible] = useState(false); // Controla a visibilidade do pop-up
  const contactRef = useRef(null); // Referência para a seção de "Contate-nos"
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (section) => {
    if (section && section.current) {
      window.scrollTo({
        top: section.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleOpenJoinUs = () => {
    setIsJoinUsVisible(true);
  };

  const handleCloseJoinUs = () => {
    setIsJoinUsVisible(false);
  };

  return (
    <>
      <Header
        onContactClick={() => scrollToSection(contactRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onWorkInClick={handleOpenJoinUs}
        scrollToFooter={() => scrollToSection(footerRef)}
      />
      <SectionCta onContactClick={() => scrollToSection(contactRef)} />{" "}
      {/* Adicionado */}
      <MissionSection />
      <Services ref={servicesRef} />
      <Vsl />
      <FormC ref={contactRef} />
      <JoinUs />
      <Footer ref={footerRef} />
      <Credits />
      {isJoinUsVisible && <WorkIn onClose={handleCloseJoinUs} />}
    </>
  );
}
