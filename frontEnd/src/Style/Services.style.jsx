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
    flex-direction: column;
    justify-content: space-between;
    color: white;
    padding: 15px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    .content {
      z-index: 2;
      position: relative;

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      button {
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

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
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
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 100%;
    position: relative; /* Para posicionar o X no topo direito */

    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    button {
      background-color: #032541;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
    }

    /* Estilo para o botão de fechar X */
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      color: #000000;
      font-size: 24px;
      cursor: pointer;
      z-index: 2;
    }
  }
`;
