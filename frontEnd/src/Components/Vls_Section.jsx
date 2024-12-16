import React from "react";
import { VslWrapper } from "../Style/Vsl_style"; // Estilos do componente

export default function Vsl() {
  return (
    <VslWrapper>
      <div className="vsl-container">
        {/* Descrição do lado esquerdo */}
        <div className="vsl-description">
          <p>
            Sermos a parceira estratégica de escolha para empresas que buscam
            transformar seus negócios através de soluções personalizadas em
            gestão de pessoas, promovendo o crescimento e o bem-estar de todos
            os envolvidos.
          </p>
        </div>

        {/* Quadro de vídeo do lado direito */}
        <div className="vsl-video">
          <div className="video-frame">
            <video
              src="/path-to-your-video.mp4"
              controls
              autoPlay
              muted
              loop
              className="video-content"
            ></video>
          </div>
        </div>
      </div>
    </VslWrapper>
  );
}
