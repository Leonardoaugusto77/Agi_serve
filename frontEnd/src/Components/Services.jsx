import React, { useState } from "react";
import { Wrapper } from "../Style/Services.style"; // Importando os estilos

// Importando as imagens corretas
import copaImage from "../Images/copa.jpg";
import limpezaPosObra from "../Images/limpezaposobra.jpg";
import portariaEControle from "../Images/portariaeacesso.jpg";
import manutencaoAreasVerdes from "../Images/areasverdes.jpg";
import manutencaoPredial from "../Images/Manutenção Predial.jpg";
import recepcaoTelefonista from "../Images/Recepção e Telefonista.jpg";
import limpezaConservacao from "../Images/Limpeza e Conservação.jpg";
import zeladoriaCondominios from "../Images/Zeladoria para Condomínios.jpg";
import limpezaEmpresarialResidencial from "../Images/Limpeza Empresarial e Residencial.jpg";

export default function Services() {
  // Estado para gerenciar o card ativo
  const [activeCard, setActiveCard] = useState(null);

  // Dados dos serviços (9 itens no total)
  const services = [
    {
      id: 1,
      title: "Serviços de Copa",
      description: "Descrição detalhada do serviço 1",
      image: copaImage,
    },
    {
      id: 2,
      title: "Limpeza Pós-Obras",
      description: "Descrição detalhada do serviço 2",
      image: limpezaPosObra,
    },
    {
      id: 3,
      title: "Portaria e Controle de Acessos",
      description: "Descrição detalhada do serviço 3",
      image: portariaEControle,
    },
    {
      id: 4,
      title: "Manutenção em Áreas Verdes",
      description: "Descrição detalhada do serviço 4",
      image: manutencaoAreasVerdes,
    },
    {
      id: 5,
      title: "Manutenção Predial",
      description: "Descrição detalhada do serviço 5",
      image: manutencaoPredial,
    },
    {
      id: 6,
      title: "Recepção e Telefonista",
      description: "Descrição detalhada do serviço 6",
      image: recepcaoTelefonista,
    },
    {
      id: 7,
      title: "Limpeza e Conservação",
      description: "Descrição detalhada do serviço 7",
      image: limpezaConservacao,
    },
    {
      id: 8,
      title: "Zeladoria para Condomínios",
      description: "Descrição detalhada do serviço 8",
      image: zeladoriaCondominios,
    },
    {
      id: 9,
      title: "Limpeza Empresarial e Residencial",
      description: "Descrição detalhada do serviço 9",
      image: limpezaEmpresarialResidencial,
    },
  ];

  // Função para lidar com a exibição de mais detalhes
  const handleShowMore = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };

  // Função para fechar o modal ao clicar fora
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setActiveCard(null);
    }
  };

  return (
    <Wrapper>
      <h2>Como podemos te ajudar?</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            className={`service-card ${
              activeCard === service.id ? "active" : ""
            }`}
            key={service.id}
            style={
              service.image ? { backgroundImage: `url(${service.image})` } : {}
            }
          >
            <div className="content">
              <h3>{service.title}</h3>
              <button onClick={() => handleShowMore(service.id)}>
                Saiba Mais
              </button>
            </div>
            {activeCard === service.id && (
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div className="modal-content">
                  <button
                    className="close-btn"
                    onClick={() => setActiveCard(null)}
                  >
                    X
                  </button>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button onClick={() => setActiveCard(null)}>Fechar</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
