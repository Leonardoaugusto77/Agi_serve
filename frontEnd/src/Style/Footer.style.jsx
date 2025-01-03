import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;

  align-items: center;
  background-color: #032541;
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 30px; /* Reduz o espaço entre seções em tablets */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px; /* Espaçamento reduzido em dispositivos menores */
  }

  @media (max-width: 360px) {
    padding: 20px 10px; /* Reduz o padding em dispositivos muito pequenos */
    gap: 15px; /* Ajusta o espaçamento para telas de 360px */
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .logo img {
    width: 300px; /* Tamanho fixo da imagem */
    margin-bottom: 40px;
  }

  .description p {
    font-size: 14px;
    line-height: 1.5;
    max-width: 300px;
    margin: 0;
    text-align: justify; /* Melhor aparência em telas menores */
  }

  @media (max-width: 768px) {
    align-items: center;

    .description p {
      max-width: 100%; /* Ajuste a largura para dispositivos móveis */
    }
  }

  @media (max-width: 360px) {
    .logo img {
      width: 150px; /* Ajusta o tamanho da imagem para dispositivos menores */
    }

    .description p {
      font-size: 12px; /* Reduz o tamanho da fonte em telas pequenas */
    }
  }
`;

export const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 14px;
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

  @media (max-width: 768px) {
    align-items: center;

    ul {
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    h3 {
      font-size: 16px; /* Reduz o tamanho do título */
    }

    li {
      font-size: 12px; /* Reduz o tamanho da fonte */
    }
  }
`;

export const SocialContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 14px;
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

  @media (max-width: 768px) {
    align-items: center;

    ul {
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    h3 {
      font-size: 16px; /* Reduz o tamanho do título */
    }

    li {
      font-size: 12px; /* Reduz o tamanho da fonte */
    }
  }
`;

export const HoursContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  @media (max-width: 768px) {
    align-items: center;

    p {
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    h3 {
      font-size: 16px; /* Reduz o tamanho do título */
    }

    p {
      font-size: 12px; /* Reduz o tamanho da fonte */
    }
  }
`;
