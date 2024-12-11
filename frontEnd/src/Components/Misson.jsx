import React from "react";
import { Wrapper } from "../Style/Misson.style"; // Certifique-se de importar o styled-component

// Importando as imagens
import Imagem01 from "../Images/Imagem01.png";
import Imagem02 from "../Images/Imagem02.png";
import Imagem03 from "../Images/Imagem03.png";

export default function MissionSection() {
  return (
    <Wrapper>
      <div className="mission-content">
        <h2>Missão</h2>
        <p>
          Oferecer soluções completas e inovadoras em gestão de pessoas,
          conectando talentos a oportunidades e construindo um futuro mais
          humano e sustentável.
        </p>
      </div>

      <div className="image-section">
        {/* Renderizando as imagens nas divs */}
        <div className="image-placeholder">
          <img src={Imagem01} alt="Descrição da imagem 01" />
        </div>
        <div className="image-placeholder">
          <img src={Imagem02} alt="Descrição da imagem 02" />
        </div>
        <div className="image-placeholder">
          <img src={Imagem03} alt="Descrição da imagem 03" />
        </div>
      </div>
    </Wrapper>
  );
}
