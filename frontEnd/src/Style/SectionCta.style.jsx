import HeadB from "../Images/head back.png";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 500px; /* Ajuste a altura conforme necessário */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  position: relative;
  background-image: url(${HeadB}); /* Substitua pelo caminho correto da imagem */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white; /* Cor do texto */
  padding: 0 50px; /* Alinhar com o padding do header */

  /* Sobreposição do fundo para melhorar a legibilidade do texto */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Cor preta com 60% de opacidade */
  }

  /* Container para o texto */
  .cta-content {
    position: relative;
    z-index: 1;
    text-align: center; /* Centraliza o texto */
    max-width: 700px; /* Largura máxima do conteúdo */
    padding: 20px;
    color: white;

    h2 {
      font-size: 45px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    h4 {
      font-size: 20px;
      margin-bottom: 30px;
      line-height: 1.5;
    }

    .cta-button {
      width: 320px;
      height: 60px;
      padding: 15px 30px;
      font-size: 18px;
      background-color: #032541;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #555;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    height: 400px;
    padding: 0 15px; /* Ajustar o padding para telas menores */

    .cta-content {
      max-width: 90%;
      text-align: center; /* Texto centralizado */
    }

    .cta-content h2 {
      font-size: 28px;
    }

    .cta-content h4 {
      font-size: 18px;
    }

    .cta-button {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 300px;

    .cta-content h2 {
      font-size: 20px;
      font-weight: bold;
    }

    .cta-content h4 {
      font-size: 12px;
      font-weight: 400;
    }

    .cta-button {
      font-size: 14px;
      padding: 12px 25px;
    }
  }
`;
