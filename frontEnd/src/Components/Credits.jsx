import React from "react";
import { Wrapper } from "../Style/Credits.style"; // Importando o styled-component

export default function Credits() {
  return (
    <Wrapper>
      <p>
        Serviços de Limpeza em Curitiba – Agi Serv Terceirização de Mão de Obra
        | Todos os Direitos Reservados | Desenvolvido e Otimizado por{" "}
        <a
          href="https://www.instagram.com/leonardoaugusto137/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heisen
        </a>
        .
      </p>
    </Wrapper>
  );
}
