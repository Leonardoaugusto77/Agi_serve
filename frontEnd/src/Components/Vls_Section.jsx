import React from "react";
import { VslWrapper } from "../Style/Vsl_style"; // Estilos do componente

export default function Vsl() {
  return (
    <VslWrapper>
      <div className="vsl-container">
        {/* Descrição centralizada */}
        <div className="vsl-description">
          <p>
            Buscamos ser uma opção estratégica para empresas interessadas em
            transformar seus negócios por meio de soluções personalizadas em
            gestão de pessoas, contribuindo para o crescimento e o bem-estar de
            todos os envolvidos.
          </p>
        </div>
      </div>
    </VslWrapper>
  );
}
