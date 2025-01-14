import React from "react";

import {
  Wrapper,
  LogoContainer,
  ContactContainer,
  SocialContainer,
  HoursContainer,
} from "../Style/Footer.style";

import Logo from "../Images/Logo.png"; // Logo da empresa

const Footer = React.forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      {/* Logo e Descrição */}
      <LogoContainer>
        <div className="logo">
          <img
            src={Logo}
            alt="Logo da Agi Serv, empresa especializada em terceirização de serviços de limpeza e manutenção"
          />
        </div>
        <div className="description">
          <p>
            A Agi Serv Terceirização de Mão de Obra está preparada para realizar
            serviços de limpeza e manutenção de acordo com a necessidade de seus
            clientes.
          </p>
        </div>
      </LogoContainer>

      {/* Contatos */}
      <ContactContainer>
        <h3>Contatos</h3>
        <ul>
          <li>
            <a
              href="mailto:contato@agiserv.com.br"
              aria-label="Enviar email para contato@agiserv.com.br"
            >
              contato@agiserv.com.br
            </a>
          </li>
        </ul>
      </ContactContainer>

      {/* Redes Sociais */}
      <SocialContainer>
        <h3>Redes Sociais</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61571532427296"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar página do Facebook"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/agiservofc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar página do Instagram"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/agiserv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar página do LinkedIn"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </SocialContainer>

      {/* Horários */}
      <HoursContainer>
        <h3>Horário</h3>
        <p>Segunda a Sexta: 08:00 - 18:00</p>
      </HoursContainer>
    </Wrapper>
  );
});

export default Footer;
