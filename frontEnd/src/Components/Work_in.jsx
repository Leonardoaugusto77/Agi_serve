import React, { useState, useEffect } from "react";
import { WorkInWrapper } from "../Style/WorkIn.style"; // Estilos do formulário

export default function WorkIn({ onClose }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Após 5 segundos, o iframe será carregado
    }, 5000); // Alterado para 5 segundos

    return () => clearTimeout(timer); // Limpa o timeout ao desmontar o componente
  }, []);

  return (
    <WorkInWrapper>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p className="close-btn" onClick={onClose}>
            X
          </p>
          <h2>Trabalhe Conosco</h2>
          <div className="iframe-container">
            {isLoading ? (
              <div className="loading-wrapper">
                {/* Spinner exibido durante o carregamento */}
                <p className="loading-message">Um minuto, por favor.</p>
                <div className="spinner"></div>{" "}
              </div>
            ) : (
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeKLlSkDPpzrCYrZ1ZMSu_P4MI0TYLjGcte0DcvizHybOxgQw/viewform?embedded=true"
                width="600"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Carregando…
              </iframe>
            )}
          </div>
        </div>
      </div>
    </WorkInWrapper>
  );
}
