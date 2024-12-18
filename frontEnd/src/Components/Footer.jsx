import React from "react";
import Logo from "../Images/agi.jpeg"; // Logo da empresa
import { Wrapper } from "../Style/Footer.style"; // Importando o styled-component

const Footer = React.forwardRef((props, ref) => {
  const { socialLinks } = props;

  return (
    <Wrapper ref={ref}>
      {" "}
      {/* Garantindo que a ref esteja no wrapper */}
      {/* Parte 1 - Logo e Texto */}
      <div className="footer-section logo-section">
        <img
          src={Logo}
          alt="Logo da Agi Serve, empresa especializada em terceirização de serviços de limpeza e manutenção"
        />
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
          <li>
            <a
              href="tel:+5511987654321"
              aria-label="Ligar para +55 11 98765-4321"
            >
              +55 11 98765-4321
            </a>
          </li>
          <li>
            <a
              href="tel:+5511123456789"
              aria-label="Ligar para +55 11 12345-6789"
            >
              +55 11 12345-6789
            </a>
          </li>
          <li>
            <a
              href="mailto:contato@agiserve.com"
              aria-label="Enviar email para contato@agiserve.com"
            >
              contato@agiserve.com
            </a>
          </li>
        </ul>
      </div>
      {/* Parte 3 - Redes sociais e Horário */}
      <div className="footer-section social-hours-section">
        <div className="social-media">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a
                href={socialLinks?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar página do Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={socialLinks?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar página do Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={socialLinks?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar página do LinkedIn"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="hours">
          <h3>Horário</h3>
          <p>Segunda a Sexta: 08:00 - 18:00</p>
        </div>
      </div>
    </Wrapper>
  );
});

export default Footer;
