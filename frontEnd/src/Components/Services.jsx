import React, { useState } from "react";
import { Wrapper } from "../Style/Services.style"; // Importando os estilos
import copaImage from "../Images/copa.jpg";
import limpezaPosObra from "../Images/limpezaposobra.jpg";
import portariaEControle from "../Images/portariaeacesso.jpg";
import manutencaoAreasVerdes from "../Images/areasverdes.jpg";
import manutencaoPredial from "../Images/Manutenção Predial.jpg";
import recepcaoTelefonista from "../Images/Recepção e Telefonista.jpg";
import limpezaConservacao from "../Images/Limpeza e Conservação.jpg";
import zeladoriaCondominios from "../Images/Zeladoria para Condomínios.jpg";
import limpezaEmpresarialResidencial from "../Images/Limpeza Empresarial e Residencial.jpg";

const Services = React.forwardRef((props, ref) => {
  // Estado para gerenciar o card ativo
  const [activeCard, setActiveCard] = useState(null);

  // Dados dos serviços (9 itens no total)
  const services = [
    {
      id: 1,
      title: "Serviços de Copa",
      description:
        "Oferecemos serviços completos de copa, garantindo que seu ambiente esteja sempre organizado e pronto para atender às necessidades de colaboradores e clientes, com profissionalismo e eficiência.",
      image: copaImage,
    },
    {
      id: 2,
      title: "Limpeza Pós-Obras",
      description:
        "Nossa equipe especializada realiza limpeza profunda pós-obras, removendo resíduos e garantindo que seu espaço esteja pronto para uso com segurança e qualidade.",
      image: limpezaPosObra,
    },
    {
      id: 3,
      title: "Portaria e Controle de Acessos",
      description:
        "Profissionais treinados para garantir segurança e organização no controle de acessos, proporcionando tranquilidade e um ambiente seguro para seu negócio ou condomínio.",
      image: portariaEControle,
    },
    {
      id: 4,
      title: "Manutenção em Áreas Verdes",
      description:
        "Cuide do seu ambiente com nosso serviço de manutenção em áreas verdes, mantendo jardins e paisagismo impecáveis, proporcionando um ambiente agradável e bem-cuidado.",
      image: manutencaoAreasVerdes,
    },
    {
      id: 5,
      title: "Manutenção Predial",
      description:
        "Realizamos serviços de manutenção preventiva e corretiva, assegurando o bom funcionamento de seu prédio e a preservação da estrutura, prevenindo danos e otimizando custos.",
      image: manutencaoPredial,
    },
    {
      id: 6,
      title: "Recepção e Telefonista",
      description:
        "Profissionais qualificados para recepção e atendimento telefônico, proporcionando uma experiência agradável e eficiente para seus clientes e visitantes.",
      image: recepcaoTelefonista,
    },
    {
      id: 7,
      title: "Limpeza e Conservação",
      description:
        "Oferecemos serviços de limpeza e conservação que garantem ambientes sempre limpos, higienizados e agradáveis, tanto para empresas quanto para residências.",
      image: limpezaConservacao,
    },
    {
      id: 8,
      title: "Zeladoria para Condomínios",
      description:
        "Nossa zeladoria para condomínios é feita com dedicação e atenção aos detalhes, garantindo o bom funcionamento e a harmonia entre os moradores.",
      image: zeladoriaCondominios,
    },
    {
      id: 9,
      title: "Limpeza Empresarial e Residencial",
      description:
        "Cuidamos da limpeza de ambientes empresariais e residenciais com excelência, oferecendo soluções personalizadas para cada necessidade e sempre com qualidade superior.",
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
    <Wrapper ref={ref}>
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
                  <p className="close-btn" onClick={() => setActiveCard(null)}>
                    X
                  </p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button onClick={() => setActiveCard(null)}>
                    Entrar em contato!
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
});

export default Services;
