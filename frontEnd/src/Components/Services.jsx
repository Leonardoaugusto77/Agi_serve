import React, { useState } from "react";
import { Wrapper } from "../Style/Services.style"; // Importando os estilos

export default function Services() {
  // Estado para gerenciar o card ativo
  const [activeCard, setActiveCard] = useState(null);

  // Dados de exemplo para os serviços
  const services = [
    {
      id: 1,
      title: "Serviço 1",
      description: "Descrição detalhada do serviço 1",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Serviço 2",
      description: "Descrição detalhada do serviço 2",
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Serviço 3",
      description: "Descrição detalhada do serviço 3",
      image: "/path/to/image3.jpg",
    },
    {
      id: 4,
      title: "Serviço 4",
      description: "Descrição detalhada do serviço 4",
      image: "/path/to/image4.jpg",
    },
    {
      id: 5,
      title: "Serviço 5",
      description: "Descrição detalhada do serviço 5",
      image: "/path/to/image5.jpg",
    },
    {
      id: 6,
      title: "Serviço 6",
      description: "Descrição detalhada do serviço 6",
      image: "/path/to/image6.jpg",
    },
    {
      id: 7,
      title: "Serviço 7",
      description: "Descrição detalhada do serviço 7",
      image: "/path/to/image7.jpg",
    },
    {
      id: 8,
      title: "Serviço 8",
      description: "Descrição detalhada do serviço 8",
      image: "/path/to/image8.jpg",
    },
    {
      id: 9,
      title: "Serviço 9",
      description: "Descrição detalhada do serviço 9",
      image: "/path/to/image9.jpg",
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
            style={{ backgroundImage: `url(${service.image})` }}
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
