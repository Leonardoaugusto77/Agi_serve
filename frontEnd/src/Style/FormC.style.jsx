import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 40px;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #032541;
    margin-bottom: 30px;
  }

  /* Container do Google Forms */
  .google-form-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      border-radius: 10px;
    }
  }

  /* Estilização do botão */
  button {
    width: 100%;
    max-width: 400px; /* Limita a largura do botão */
    height: 70px; /* Aumenta a altura do botão */
    padding: 15px 25px; /* Aumenta o padding */
    font-size: 20px; /* Aumenta o tamanho da fonte */
    background-color: #032541;
    color: white;
    border: none;
    border-radius: 10px; /* Aumenta o arredondamento das bordas */
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 20px auto; /* Adiciona margem para centralizar */

    &:hover {
      background-color: #0056b3;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }
  }
`;
