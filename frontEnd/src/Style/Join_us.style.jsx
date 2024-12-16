import styled from "styled-components";
import backgroundImage from "../Images/background_tbc.png"; // Imagem de fundo

export const Wrapper = styled.section`
  width: 100%;
  height: 400px; /* Ajuste a altura conforme necessário */
  background-image: url(${backgroundImage});
  background-size: cover; /* Para cobrir toda a seção */
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color: white;
  padding: 0 20px;

  /* Sobreposição escura */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Sobreposição preta com opacidade */
    z-index: 1; /* Fica abaixo do conteúdo */
  }

  /* Botão Trabalhe Conosco */
  button {
    padding: 15px 30px;
    font-size: 20px;
    background-color: #032541; /* Cor de fundo azul com opacidade */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2; /* Fica acima da sobreposição */
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 123, 255, 1); /* Muda a cor ao passar o mouse */
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    height: 300px; /* Reduz a altura em dispositivos menores */

    button {
      font-size: 18px;
      padding: 12px 24px;
    }
  }

  @media (max-width: 480px) {
    height: 250px; /* Ajusta ainda mais a altura em dispositivos muito pequenos */

    button {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
`;
