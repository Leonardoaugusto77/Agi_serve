import styled from "styled-components";
import Logo from "../Images/agi.jpeg"; // Logo da empresa

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Alinha as seções no topo */
  background-color: #032541; /* Cor de fundo do footer */
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;

  .footer-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  /* Parte 1 - Logo e Texto */
  .logo-section {
    img {
      width: 150px; /* Ajuste o tamanho da logo */
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
      line-height: 1.6;
      max-width: 300px;
      margin: 0; /* Remover margem extra */
    }
  }

  /* Parte 2 - Contatos */
  .contact-section {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;

      li {
        font-size: 16px;
        margin: 5px 0;
      }
    }
  }

  /* Parte 3 - Redes sociais e Horários */
  .social-hours-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px; /* Ajusta a distância entre as partes */

    /* Redes sociais */
    .social-media {
      a {
        color: white;
        font-size: 16px;
        margin: 5px 0;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff; /* Alterar cor ao passar o mouse */
        }
      }
    }

    /* Horário */
    .hours {
      margin-top: 20px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  /* Responsividade para dispositivos móveis */
  @media (max-width: 768px) {
    flex-direction: column; /* Empilha as seções em telas menores */
    padding: 30px 10px;

    .footer-section {
      width: 100%; /* Ocupa toda a largura da tela */
      margin-bottom: 20px; /* Espaçamento entre as seções */
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px;

    .logo-section p {
      font-size: 12px;
    }

    .contact-section h3,
    .social-hours-section h3 {
      font-size: 16px;
    }

    .contact-section ul li,
    .social-media a,
    .hours p {
      font-size: 14px;
    }
  }
`;
