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

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
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

    /* Fundo escuro será aplicado em um pseudo-elemento */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6); /* Fundo escuro 60% */
      z-index: 1; /* Este fundo escuro deve ficar abaixo do conteúdo */
    }

    .content {
      z-index: 2; /* Garantir que o conteúdo tenha a prioridade de aparecer sobre o fundo escuro */
      position: relative;
      text-align: center;

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Sombra no título */
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
  }

  .modal-content {
    background: url(${(props) => props.image}) no-repeat center center;
    background-size: cover;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 600px;
    width: 100%;
    height: 350px;
    position: relative; /* Para posicionar o X no topo direito */
    color: white;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8); /* Fundo escuro 60% */
      z-index: -1; /* Deve ficar abaixo do conteúdo */
    }

    h3 {
      font-size: 30px;
      margin-bottom: 20px;
      z-index: 2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Sombra no título */
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

  /* Ajustes para dispositivos móveis */
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
