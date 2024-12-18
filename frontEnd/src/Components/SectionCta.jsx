import React from "react";
import { Wrapper } from "../Style/SectionCta.style"; // Importando o styled component

export default function SectionCta({ onContactClick }) {
  return (
    <Wrapper>
      <div className="cta-content">
        <h2>Especialistas em serviços terceirizados</h2>
        <h4>
          Oferecemos soluções em limpeza, conservação e gestão de pessoas,
          promovendo eficiência e bem-estar.
        </h4>
        <button className="cta-button" onClick={onContactClick}>
          Entre em contato
        </button>
      </div>
    </Wrapper>
  );
}
