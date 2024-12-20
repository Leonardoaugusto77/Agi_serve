import React, { useState } from "react";
import { WorkInWrapper } from "../Style/WorkIn.style"; // Estilos do formulário

export default function WorkIn({ onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "", // Cargo desejado como campo de texto
    curriculo: null, // Novo campo para o arquivo do currículo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], // Atualiza o estado com o arquivo selecionado
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
          <p className="close-btn" onClick={onClose}>
            X
          </p>
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
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
                placeholder="Digite o cargo desejado"
              />
            </div>
            <div className="form-group">
              <label htmlFor="curriculo">Envie seu Currículo:</label>
              <input
                type="file"
                id="curriculo"
                name="curriculo"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </WorkInWrapper>
  );
}
