import React, { useState } from "react";
import { Wrapper } from "../Style/FormC.style"; // Importando os estilos

const FormC = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Wrapper ref={ref}>
      <h2>Solicite seu orçamento!</h2>
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
          <label htmlFor="serviceType">Descrição do Serviço:</label>
          <textarea
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Solicitar orçamento</button>
      </form>
    </Wrapper>
  );
});

export default FormC;
