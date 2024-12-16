import React, { useState } from "react";
import { WorkInWrapper } from "../Style/WorkIn.style"; // Estilos do formulário

export default function WorkIn({ onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "", // Alterado de 'mensagem' para 'cargo'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui pode adicionar a lógica para enviar os dados do formulário
    console.log("Formulário enviado", formData);
    onClose(); // Fecha o modal após o envio do formulário
  };

  return (
    <WorkInWrapper>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <h2>Trabalhe Conosco</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cargo">Cargo Desejado:</label>
              <select
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="auxiliar_de_limpeza">Auxiliar de Limpeza</option>
                <option value="pedreiro">Pedreiro</option>
                <option value="copeira">Copeira</option>
                <option value="porteiro">Porteiro</option>
              </select>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </WorkInWrapper>
  );
}
