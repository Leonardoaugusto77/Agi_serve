import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #032541;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  .logo {
    font-size: 24px;
    justify-content: flex-start;
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center; /* Para alinhar verticalmente a logo com os outros elementos */

    img {
      width: 180px;
      margin-left: 2px;
    }
  }

  /* Estilo do menu hambúrguer */
  .menu-hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #ffffff;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
    }

    &:hover span {
      background-color: #555;
    }
  }

  /* Estilo do menu dropdown */
  .menu-dropdown {
    position: absolute;
    z-index: 1;
    top: 80px; /* Logo abaixo do header */
    right: 50px; /* Alinha à direita */
    background-color: #ffffff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 0;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        padding: 10px 20px;
        color: #333;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 15px; /* Menor espaçamento para telas menores */
    .menu-hamburger {
      height: 20px;
      width: 25px;
    }

    .menu-dropdown {
      z-index: 999999;
      right: 15px;
    }
  }

  @media (max-width: 480px) {
    .logo {
      font-size: 20px;
    }

    .menu-hamburger {
      height: 18px;
      width: 20px;
    }
  }
`;
