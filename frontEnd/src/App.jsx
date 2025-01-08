import React, { useState, useRef, useEffect } from "react";
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
  const [showScrollTop, setShowScrollTop] = useState(false); // Controla visibilidade do botão de scroll para o topo

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // Exibe o botão após rolar 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <Services ref={servicesRef} formRef={contactRef} />
      <Vsl />
      <FormC ref={contactRef} />
      <JoinUs />
      <Footer ref={footerRef} />
      <Credits />
      {isJoinUsVisible && <WorkIn onClose={handleCloseJoinUs} />}
      {/* Botão de scroll para o topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "20px",
            display: window.innerWidth > 400 ? "flex" : "none", // Responsividade
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Voltar para o topo"
        >
          ↑
        </button>
      )}
    </>
  );
}
