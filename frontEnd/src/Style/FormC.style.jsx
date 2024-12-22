import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 600px; /* Ajuste o tamanho máximo */
  margin: 0 auto 100px;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #032541;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%; /* Garante que o formulário ocupe 100% da largura do container */

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        font-size: 18px;
        color: #333;
      }

      input,
      textarea {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
      }

      textarea {
        resize: vertical;
      }
    }

    button {
      width: 100%;
      max-width: 320px; /* Limita a largura do botão */
      height: 60px;
      padding: 12px 25px;
      font-size: 18px;
      background-color: #032541;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin: 0 auto;
      display: block;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%; /* Maior flexibilidade em telas menores */

    h2 {
      font-size: 30px;
    }

    .form-group label {
      font-size: 16px;
    }

    input,
    textarea {
      font-size: 14px;
    }

    button {
      font-size: 16px;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }

    .form-group label {
      font-size: 14px;
    }

    input,
    textarea {
      font-size: 12px;
    }

    button {
      font-size: 14px;
      padding: 8px 15px;
    }
  }
`;
