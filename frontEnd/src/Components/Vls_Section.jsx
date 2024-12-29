import React from "react";
import { VslWrapper } from "../Style/Vsl_style"; // Estilos do componente

export default function Vsl() {
  return (
    <VslWrapper>
      <div className="vsl-container">
        {/* Descrição centralizada */}
        <div className="vsl-description">
          <p>
            Sermos a parceira estratégica de escolha para empresas que buscam
            transformar seus negócios através de soluções personalizadas em
            gestão de pessoas, promovendo o crescimento e o bem-estar de todos
            os envolvidos.
          </p>
        </div>
      </div>
    </VslWrapper>
  );
}
