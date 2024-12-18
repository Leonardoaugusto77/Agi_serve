import { WrapperHeader } from "../Style/Wrapperheader.style";
import Logo from "../Images/agi.jpeg";
import { useState } from "react";

export default function Header({
  onContactClick,
  onServicesClick,
  onWorkInClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <WrapperHeader>
      {/* Logo no lado esquerdo */}
      <div className="logo">
        <img src={Logo} alt="Logo" width={150} />
      </div>

      {/* Menu hambúrguer no lado direito */}
      <div
        className="menu-hamburger"
        onClick={toggleMenu} // Alterna o estado do menu
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li onClick={onContactClick}>Contate-nos</li>{" "}
            {/* Aciona a rolagem até "Contate-nos" */}
            <li onClick={onWorkInClick}>Trabalhe conosco</li>{" "}
            {/* Abre o pop-up "Trabalhe Conosco" */}
            <li onClick={onServicesClick}>Nossos serviços</li>{" "}
            {/* Aciona a rolagem até "Nossos serviços" */}
            <li>Redes sociais</li>
          </ul>
        </div>
      )}
    </WrapperHeader>
  );
}
