import React, { useState } from "react";
import { Wrapper } from "../Style/FormC.style"; // Importando os estilos

export default function FormC() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o backend ou realizar alguma ação
    console.log(formData);
  };

  return (
    <Wrapper>
      <h2>Entre em contato!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Tipo de Serviço:</label>
          <textarea
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Entrar em contato</button>
      </form>
    </Wrapper>
  );
}
