import React, { useState } from "react";
import { Wrapper } from "../Style/Join_us.style"; // Importando os estilos
import WorkIn from "./Work_in"; // Importando o componente do formulário

export default function JoinUs() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Função para abrir/fechar o modal
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <Wrapper>
      <button onClick={toggleModal}>Trabalhe conosco</button>

      {/* Abrir o modal quando o estado isModalOpen for true */}
      {isModalOpen && <WorkIn onClose={toggleModal} />}
    </Wrapper>
  );
}
