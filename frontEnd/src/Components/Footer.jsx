import React from "react";
import Logo from "../Images/agi.jpeg"; // Logo da empresa
import { Wrapper } from "../Style/Footer.style"; // Importando o styled-component

export default function Footer() {
  return (
    <Wrapper>
      {/* Parte 1 - Logo e Texto */}
      <div className="footer-section logo-section">
        <img src={Logo} alt="Logo" />
        <p>
          A Agi Serve Terceirização de Mão de Obra está preparada para realizar
          serviços de limpeza e manutenção de acordo com a necessidade de seus
          clientes.
        </p>
      </div>

      {/* Parte 2 - Contatos */}
      <div className="footer-section contact-section">
        <h3>Contatos</h3>
        <ul>
          <li>+55 11 98765-4321</li>
          <li>+55 11 12345-6789</li>
          <li>contato@agiserve.com</li>
        </ul>
      </div>

      {/* Parte 3 - Redes sociais e Horário */}
      <div className="footer-section social-hours-section">
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="hours">
          <h3>Horário</h3>
          <p>Segunda a Sexta: 08:00 - 18:00</p>
        </div>
      </div>
    </Wrapper>
  );
}
