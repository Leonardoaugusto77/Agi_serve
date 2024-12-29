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
  const { socialLinks } = props;

  return (
    <Wrapper ref={ref}>
      {/* Logo e Descrição */}
      <LogoContainer>
        <div className="logo">
          <img
            src={Logo}
            alt="Logo da Agi Serve, empresa especializada em terceirização de serviços de limpeza e manutenção"
          />
        </div>
        <div className="description">
          <p>
            A Agi Serve Terceirização de Mão de Obra está preparada para
            realizar serviços de limpeza e manutenção de acordo com a
            necessidade de seus clientes.
          </p>
        </div>
      </LogoContainer>

      {/* Contatos */}
      <ContactContainer>
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
      </ContactContainer>

      {/* Redes Sociais */}
      <SocialContainer>
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
