import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 20px;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
    color: #032541;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 20px;
    justify-items: center; /* Garante que os cards fiquem centralizados na tela */
    max-width: 1200px; /* Limita a largura da grid para evitar que ocupe toda a tela em dispositivos grandes */
    margin: 0 auto; /* Centraliza a grid */

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 10px; /* Ajusta o espaçamento para telas menores */
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      padding: 0 10px;
    }

    @media (max-width: 400px) {
      grid-template-columns: 1fr; /* Garantir um único card por linha em telas pequenas */
      padding: 0 10px;
    }
  }

  .service-card {
    background-size: cover;
    background-position: center;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 15px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%; /* Garante que o card ocupe 100% da largura disponível dentro do grid */
    max-width: 300px; /* Limita o tamanho máximo do card para que não fique muito grande em telas maiores */

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }

    .content {
      z-index: 2;
      position: relative;
      text-align: center;
      display: flex;
      flex-direction: column; /* Coloca os elementos (h3, p, button) em coluna */
      justify-content: center; /* Alinha os itens verticalmente no centro */
      align-items: center; /* Alinha os itens horizontalmente no centro */
      height: 100%; /* Garante que a área seja ocupada completamente pelo conteúdo */

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      }

      p {
        font-size: 16px;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        color: white;
      }

      button {
        width: 160px;
        height: 50px;
        background-color: #032541;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    overflow: hidden; /* Impede o scroll quando o modal estiver ativo */
  }

  .modal-content {
    background: url(${(props) => props.image}) no-repeat center center;
    background-size: cover;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 90%; /* Deixa o modal com 90% da largura da tela */
    max-width: 600px; /* Limita o tamanho máximo do modal */
    height: 400px; /* Altura ajustada do modal */
    position: relative;
    color: white;
    display: flex;
    flex-direction: column; /* Organiza os elementos em coluna */
    justify-content: center; /* Alinha os elementos verticalmente no centro */
    align-items: center; /* Alinha os elementos horizontalmente no centro */

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: -1;
    }

    h3 {
      font-size: 30px;
      margin-bottom: 20px;
      z-index: 2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    p {
      font-size: 20px;
      margin-bottom: 20px;
      z-index: 2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      color: white;
    }

    button {
      width: 250px;
      height: 60px;
      font-size: 15px;
      background-color: #032541;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
      z-index: 2;

      &:hover {
        background-color: #0056b3;
        transition: 1s;
      }
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 25px;
      background: none;
      border: none;
      color: #ff0000;
      font-size: 25px;
      cursor: pointer;
      z-index: 2;
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 28px;
    }

    .service-card {
      height: 200px;

      .content {
        h3 {
          font-size: 18px;
        }

        button {
          padding: 6px 12px;
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .modal-content {
      height: 400px;
      h3 {
        font-size: 25px;
      }

      p {
        font-size: 15px;
      }
    }

    h2 {
      font-size: 28px;
      font-weight: bold;
    }

    .service-card {
      height: 250px;
      .content {
        h3 {
          font-size: 20px;
        }

        button {
          padding: 8px 16px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 35px;
    }

    .service-card {
      height: 200px;

      .content {
        h3 {
          font-size: 18px;
        }

        button {
          padding: 6px 12px;
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 28px;
    }

    .service-card {
      height: 200px;

      .content {
        h3 {
          font-size: 18px;
        }

        button {
          padding: 6px 12px;
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 24px;
    }

    .service-card {
      height: 180px;

      .content {
        h3 {
          font-size: 16px;
        }

        button {
          padding: 4px 10px;
          font-size: 10px;
        }
      }
    }
  }
`;
