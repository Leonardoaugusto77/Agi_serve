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

    // Verificar se todos os campos estão preenchidos
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceType
    ) {
      window.alert("Por favor, preencha todos os campos."); // Aviso de preenchimento obrigatório
      return;
    }

    // Preencher o campo 'nome' do Google Forms via iframe
    const googleNameField = document.querySelector(".KHxj8b.tL9Q4c input"); // Usando a classe do campo de nome
    if (googleNameField) {
      googleNameField.value = formData.name; // Preencher o campo com o valor do 'name'
    }

    try {
      console.log(formData); // Aqui você pode fazer a lógica de envio, como uma requisição ao back-end
      window.alert("Dados enviados com sucesso!"); // Sucesso
      setFormData({ name: "", email: "", phone: "", serviceType: "" }); // Reseta os inputs
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      window.alert("Falha ao enviar os dados. Tente novamente."); // Falha
    }
  };

  return (
    <Wrapper ref={ref}>
      <h2>Solicite seu orçamento!</h2>

      {/* Formulário com o iframe do Google Forms */}
      <div className="google-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScCKeEsTGTb0CytZoSz1XJyhrlCWAxUDyvWqy9AaZhfVpQz8Q/viewform?embedded=true"
          width="100%"
          height="1000px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Formulário de Orçamento"
        >
          Carregando…
        </iframe>
      </div>
    </Wrapper>
  );
});

export default FormC;
