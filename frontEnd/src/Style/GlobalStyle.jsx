import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     /* Reset CSS */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* Base para responsividade (1rem = 16px) */
    -webkit-font-smoothing: antialiased; /* Suaviza fontes no Chrome/Safari */
    -moz-osx-font-smoothing: grayscale; /* Suaviza fontes no Firefox */
    scroll-behavior: smooth; /* Suaviza rolagem */
  }

  body {
    font-family: 'Roboto', Arial, sans-serif; /* Fontes padrões */
    line-height: 1.6; /* Altura de linha para melhor leitura */
    color: #333; /* Cor do texto padrão */
    background-color: #f9f9f9; /* Cor de fundo padrão */
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit; /* Herda a cor do texto */
    text-decoration: none; /* Remove sublinhado */
  }

  img {
    max-width: 100%; /* Imagens responsivas */
    height: auto; /* Mantém proporção */
    display: block; /* Remove espaço extra abaixo da imagem */
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit; /* Usa mesma fonte do body */
  }

  ul, ol {
    list-style: none; /* Remove estilos de listas */
  }

  /* Estilo base para inputs */
  input, textarea {
    font-family: inherit;
    font-size: 1rem;
    color: #333;
  }

  /* Classes utilitárias */
  .container {
    max-width: 1200px; /* Limita a largura máxima */
    margin: 0 auto; /* Centraliza o container */
    padding: 0 20px; /* Espaçamento lateral */
  }

  /* Media Queries para responsividade */
  @media (max-width: 768px) {
    html {
      font-size: 14px; /* Reduz o tamanho base do texto */
    }

    .container {
      padding: 0 15px; /* Reduz padding lateral em telas menores */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px; /* Ajusta ainda mais o tamanho base do texto */
    }
  }
`;
