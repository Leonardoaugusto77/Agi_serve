import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: #cac9c7; /* Cor de fundo alterada */
  color: #333; /* Cor do texto */
  text-align: center;
  padding: 20px 0;
  font-family: Arial, sans-serif;

  p {
    font-size: 14px;
    margin: 0;
    line-height: 1.8; /* Ajustando o espaçamento entre as linhas */
    white-space: pre-line; /* Quebra de linha automática */
  }

  a {
    color: #007bff; /* Cor do link */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #0056b3; /* Cor do link ao passar o mouse */
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 15px 0;

    p {
      font-size: 15px; /* Aumenta um pouco o tamanho da fonte em telas menores */
    }

    a {
      font-size: 16px; /* Ajusta o tamanho do link */
    }
  }

  @media (max-width: 480px) {
    padding: 10px 0;

    p {
      font-size: 14px; /* Ajusta o tamanho da fonte em telas muito pequenas */
      font-weight: bold;
    }

    a {
      font-size: 16px; /* Ajusta o tamanho do link */
    }
  }
`;
