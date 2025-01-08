import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 20px;
  position: relative;
  text-align: center;
  overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse as bordas */

  .mission-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 30px;
    color: #333;

    h2 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 15px;
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
      width: 100vw; /* Largura total da tela */
      height: 95px;
      background-color: #032541;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      left: 50%; /* Começa no meio da tela */
      margin-left: -50vw; /* Move a faixa para que ela se estenda além das bordas */
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
      width: 100%;
      flex-direction: column;
      margin-bottom: -60px;
    }

    .image-section .image-placeholder {
      margin: 10px 0;
      width: 250px; /* Ajuste de largura para a imagem */
      height: 200px; /* Ajuste de altura para a imagem */
      object-fit: cover; /* Garante que a imagem mantenha a proporção sem distorção */
    }

    .mission-content h2 {
      font-size: 35px;
    }

    .mission-content p {
      font-size: 15px;
      color: #333;
    }
  }
`;
