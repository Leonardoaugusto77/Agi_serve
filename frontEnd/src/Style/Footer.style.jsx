import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #032541;
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  flex-wrap: wrap; /* Permite que os itens se reorganizem em dispositivos menores */

  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    flex: 1; /* Permite que as seções cresçam de maneira proporcional */
    min-width: 200px; /* Garante que as seções não fiquem muito pequenas */
  }

  /* Parte 1 - Logo e Texto */
  .logo-section {
    img {
      width: 150px;
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
      line-height: 1.6;
      max-width: 300px;
      margin: 0;
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

        a {
          color: white;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  /* Parte 3 - Redes sociais */
  .social-media-section {
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

        a {
          color: white;
          text-decoration: none;

          &:hover {
            color: #007bff;
          }
        }
      }
    }
  }

  /* Parte 4 - Horário */
  .hours-section {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 10px;

    .footer-section {
      width: 100%;
      margin-bottom: 20px;
    }

    .logo-section p {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px;

    .footer-section {
      h3 {
        font-size: 16px;
      }

      p,
      li {
        font-size: 14px;
      }
    }

    .social-media-section ul,
    .contact-section ul {
      display: flex;
      flex-direction: column; /* As listas ficam empilhadas */
      align-items: flex-start;
    }
  }
`;
