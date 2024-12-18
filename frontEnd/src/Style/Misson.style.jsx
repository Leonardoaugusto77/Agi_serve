import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 20px;
  position: relative;
  text-align: center;

  .mission-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 30px;
    color: #333;

    h2 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #032541;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
      color: #666;
    }
  }

  .image-section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    /* Faixa azul */
    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 95px;
      background-color: #032541;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
    }

    .image-placeholder {
      width: 200px;
      height: 200px;
      background-color: #ddd;
      margin: 0 15px;
      z-index: 2;
      position: relative; /* Para conter as imagens */
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); /* Sombra leve */

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Faz a imagem preencher o quadro */
        border-radius: 4px; /* Opcional: arredonda os cantos */
      }
    }
  }

  @media (max-width: 768px) {
    .image-section .image-placeholder {
      width: 120px;
      height: 120px;
      margin: 0 10px;
    }

    .mission-content h2 {
      font-size: 28px;
    }

    .mission-content p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .image-section {
      flex-direction: column;
    }

    .image-section .image-placeholder {
      margin: 10px 0;
    }

    .mission-content h2 {
      font-size: 24px;
    }

    .mission-content p {
      font-size: 16px;
    }
  }
`;
