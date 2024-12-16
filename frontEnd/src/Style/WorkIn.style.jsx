import styled from "styled-components";

export const WorkInWrapper = styled.div`
  /* Overlay escuro */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* Escurecendo o fundo */
    display: flex;
    justify-content: center; /* Centraliza o modal */
    align-items: center; /* Centraliza verticalmente */
    z-index: 9999; /* Garante que o modal fique acima de outros conteúdos */
  }

  /* Modal */
  .modal-content {
    background-color: #fff; /* Alterado para fundo branco */
    padding: 20px;
    border-radius: 8px;
    width: 390px;
    height: 520px;
    max-width: 90%; /* Para dispositivos menores */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 10000;
    color: #333; /* Cor do texto preta */
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    color: red;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center; /* Título centralizado */
    color: #032541; /* Cor do título */
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        font-size: 16px;
        font-weight: bold; /* Deixa os títulos em negrito */
        color: #333; /* Cor preta para os títulos */
        text-align: left; /* Alinha os títulos à esquerda */
      }

      input,
      select,  /* Adicionando estilo para o select */
      textarea {
        padding: 12px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%; /* Ajustado para 100% para ocupar toda a largura da modal */
      }

      select {
        -webkit-appearance: none; /* Remove a aparência padrão do select no Safari */
        -moz-appearance: none; /* Remove a aparência padrão do select no Firefox */
        appearance: none; /* Remove a aparência padrão em outros navegadores */
      }

      textarea {
        resize: vertical;
        min-height: 100px;
      }
    }

    button {
      padding: 12px;
      background-color: #032541;
      color: white;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  /* Responsividade para dispositivos menores */
  @media (max-width: 768px) {
    .modal-content {
      width: 90%;
      height: auto;
      padding: 15px;
    }

    h2 {
      font-size: 20px;
    }

    .form-group label {
      font-size: 14px;
    }

    input,
    select,
    textarea {
      font-size: 14px;
    }

    button {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .modal-content {
      width: 90%;
      height: auto;
      padding: 10px;
    }

    h2 {
      font-size: 18px;
    }

    .form-group label {
      font-size: 12px;
    }

    input,
    select,
    textarea {
      font-size: 12px;
    }

    button {
      font-size: 14px;
    }
  }
`;
