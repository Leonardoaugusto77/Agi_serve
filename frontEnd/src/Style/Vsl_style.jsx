import styled from "styled-components";

export const VslWrapper = styled.section`
  .vsl-container {
    display: flex;
    height: 400px; /* Altura ajustável para dispositivos menores */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; /* Reorganiza em dispositivos menores */
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  /* Estilo para a descrição */
  .vsl-description {
    max-width: 90%; /* Limita a largura para textos maiores */
    color: #333;
    text-align: center; /* Alinha o texto ao centro */
    overflow-wrap: break-word; /* Garante que o texto não quebre o layout */
    padding: 0 20px; /* Espaçamento interno lateral */
    box-sizing: border-box;
  }

  p {
    font-size: 30px; /* Tamanho base do texto */
    line-height: 1.6;
    font-weight: 500;
    margin: 0; /* Remove margens extras */
  }

  /* Responsividade para tablets e dispositivos médios */
  @media (max-width: 1024px) {
    .vsl-container {
      padding: 15px;
    }

    .vsl-description {
      max-width: 95%;
      font-size: 26px;
      padding: 0 15px;
    }
  }

  /* Responsividade para smartphones grandes */
  @media (max-width: 768px) {
    .vsl-container {
      padding: 15px;
    }

    .vsl-description {
      max-width: 100%;
      font-size: 22px; /* Ajusta o tamanho do texto */
      padding: 0 10px;
      p {
        font-size: 25px;
      }
    }
  }

  /* Responsividade para smartphones médios e pequenos */
  @media (max-width: 480px) {
    .vsl-container {
      padding: 10px;
    }

    .vsl-description {
      font-size: 20px; /* Ajusta o tamanho da fonte */
      padding: 0 8px;
    }

    p {
      font-size: 18px;
    }
  }

  /* Responsividade para dispositivos menores que 360px */
  @media (max-width: 360px) {
    .vsl-description {
      font-size: 16px; /* Ajusta para dispositivos pequenos */
      padding: 0 5px;
    }

    p {
      font-size: 16px;
    }
  }
`;
