import styled from "styled-components";

export const VslWrapper = styled.section`
  /* Container principal */
  .vsl-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 40px; /* Espaçamento interno do container */
    gap: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Estilo para a descrição */
  .vsl-description {
    flex: 1; /* Ocupa o lado esquerdo */
    max-width: 65%; /* Limita o tamanho no layout maior */
    color: #333;
    padding-left: 100px; /* Afastamento das bordas esquerda e direita */
    box-sizing: border-box; /* Inclui o padding no cálculo do tamanho */
  }

  p {
    width: 600px;
    font-size: 25px;
    line-height: 1.6;
    font-weight: 500;
    text-align: left;
  }

  /* Estilo para o vídeo */
  .vsl-video {
    flex: 1; /* Ocupa o lado direito */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 35px; /* Afastamento das bordas esquerda e direita */
    padding-right: 35px;
    box-sizing: border-box; /* Inclui o padding no cálculo do tamanho */

    .video-frame {
      width: 100%;
      max-width: 300px; /* Define o tamanho no estilo de vídeos curtos */
      aspect-ratio: 9 / 16; /* Define a proporção 9:16 (Shorts, Reels) */
      background: #000; /* Fundo para simular o vídeo */
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

      .video-content {
        width: 100%;
        height: 100%;
        object-fit: cover; /* O vídeo preenche a área sem distorção */
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .vsl-container {
      flex-direction: column;
      padding: 20px;
    }

    .vsl-description {
      max-width: 100%;
      text-align: center; /* Centraliza o texto para dispositivos menores */
      padding-left: 20px; /* Ajusta para telas menores */
      padding-right: 20px;
    }

    .vsl-video {
      max-width: 100%;
      padding-left: 20px; /* Ajusta para telas menores */
      padding-right: 20px;
    }
  }

  /* Responsividade específica para telas de 1007px por 4120px */
  @media (max-width: 1007px) {
    .vsl-container {
      padding: 40px 35px; /* Afastamento ajustado */
    }

    .vsl-description {
      width: 100%; /* Ajuste aqui para controlar a largura do texto */
      font-size: 25px; /* Ajuste de fonte */
      line-height: 1.8; /* Espaçamento maior entre as linhas */
      padding-left: 35px;
      padding-right: 35px;
    }

    p {
      width: 450px;
    }

    .vsl-video .video-frame {
      max-width: 300px; /* Aumenta o tamanho do vídeo */
    }
  }
`;
