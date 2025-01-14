import styled from "styled-components";

export const WorkInWrapper = styled.div`
  /* Overlay escuro */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  /* Modal */
  .modal-content {
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    width: 65%; /* Ajustando a largura para melhor responsividade */
    max-width: 100%;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 10000;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* X de fechamento */
  .close-btn {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    color: red;
    cursor: pointer;
  }

  /* Título */
  h2 {
    margin-bottom: 20px;
    font-size: 26px;
    text-align: center;
    color: #032541;
  }

  /* Contêiner do iframe */
  .iframe-container {
    width: 100%; /* Diminuindo a largura do iframe */
    height: 0;
    padding-bottom: 56.25%; /* Proporção de 16:9 */
    position: relative;
    overflow: hidden;
    background: #f1f1f1;
    border-radius: 10px;
    display: flex;
    justify-content: center; /* Centraliza o conteúdo */
    align-items: center; /* Centraliza o conteúdo */
  }

  /* Estilo do iframe */
  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Contêiner do Spinner e da Mensagem */
  .loading-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    flex-direction: column; /* Organiza os itens na coluna (spinner + mensagem) */
    text-align: center; /* Centraliza o texto da mensagem */
  }

  /* Estilo para a mensagem de carregamento */
  .loading-message {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
  }

  /* Estilo para o círculo de carregamento */
  .spinner {
    border: 8px solid #f3f3f3; /* Cor de fundo do círculo */
    border-top: 8px solid #3498db; /* Cor da parte giratória */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite; /* Define o tempo de animação */
  }

  /* Animação do círculo */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .modal-content {
      width: 100%;
    }

    h2 {
      font-size: 20px;
    }

    .iframe-container {
      width: 100%; /* Ajustando a largura para telas menores */
      padding-bottom: 75%; /* Ajuste para telas menores */
    }
  }

  @media (max-width: 480px) {
    .modal-content {
      width: 100%;
    }

    h2 {
      font-size: 18px;
    }

    .iframe-container {
      width: 100%; /* Ajuste para telas muito pequenas */
      padding-bottom: 85%; /* Ajuste para telas muito pequenas */
    }
  }
`;
