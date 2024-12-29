import styled from "styled-components";

export const VslWrapper = styled.section`
  .vsl-container {
    display: flex;
    height: 300px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 40px; /* Espaçamento interno do container */
    gap: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  /* Estilo para a descrição */
  .vsl-description {
    flex: 1; /* Ocupa o lado esquerdo */
    max-width: 80%; /* Limita o tamanho no layout maior */
    color: #333;
    padding-left: 40px; /* Afastamento das bordas esquerda e direita */
    box-sizing: border-box; /* Inclui o padding no cálculo do tamanho */
    text-align: center; /* Alinha o texto à esquerda em telas grandes */
    overflow-wrap: break-word; /* Garante que o texto não quebre o layout */
  }

  p {
    width: 100%; /* Garante que o parágrafo ocupe toda a largura disponível */
    font-size: 30px;
    line-height: 1.6;
    font-weight: 500;
    margin-bottom: 20px; /* Adiciona espaçamento abaixo do parágrafo */
  }

  /* Estilo para o vídeo */
  .vsl-video {
    flex: 1; /* Ocupa o lado direito */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 35px; /* Afastamento das bordas esquerda e direita */
    padding-right: 35px;
    box-sizing: border-box;

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
      font-size: 22px; /* Ajusta o tamanho da fonte */
      line-height: 1.5; /* Ajusta o espaçamento entre linhas */
    }

    .vsl-video {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }

    .vsl-video .video-frame {
      max-width: 90%; /* Permite que o vídeo ocupe 90% da largura em telas menores */
      aspect-ratio: 9 / 16; /* Garante que o vídeo mantenha a proporção */
    }
  }

  @media (max-width: 1024px) {
    .vsl-container {
      padding: 20px;
    }

    .vsl-description {
      max-width: 100%;
      text-align: center;
      font-size: 24px;
      line-height: 1.6;
      padding-left: 15px;
      padding-right: 15px;
    }

    .vsl-video .video-frame {
      max-width: 80%; /* Ajusta o vídeo para que se encaixe melhor em telas médias */
    }
  }

  @media (max-width: 480px) {
    .vsl-container {
      flex-direction: column;
      padding: 15px;
    }

    .vsl-description {
      font-size: 20px;
      padding-left: 10px;
      padding-right: 10px;

      p {
        margin-top: 20px;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
      }
    }

    .vsl-video .video-frame {
      max-width: 100%; /* Ajuste o tamanho do vídeo */
    }
  }

  /* Responsividade para telas grandes de 1007px até 1200px */
`;
