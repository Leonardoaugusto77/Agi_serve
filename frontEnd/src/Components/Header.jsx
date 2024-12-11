import { WrapperHeader } from "../Style/Wrapperheader.style";
import Logo from "../Images/agi.jpeg";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref para o menu dropdown
  const hamburgerRef = useRef(null); // Ref para o hambúrguer

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu se o clique for fora do hambúrguer ou do menu dropdown
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) && // Clique fora do menu dropdown
      !hamburgerRef.current.contains(event.target) // Clique fora do hambúrguer
    ) {
      setIsMenuOpen(false); // Fecha o menu
    }
  };

  // Adiciona o event listener para detectar cliques fora do menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <WrapperHeader>
      {/* Logo no lado esquerdo */}
      <div className="logo">
        <img src={Logo} alt="Logo" width={150} />
      </div>

      {/* Menu hambúrguer no lado direito */}
      <div
        className="menu-hamburger"
        onClick={toggleMenu}
        ref={hamburgerRef} // Referência ao hambúrguer
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="menu-dropdown" ref={menuRef}>
          <ul>
            <li>Entre em contato</li>
            <li>Trabalhe conosco</li>
            <li>Nossos serviços</li>
            <li>Contatos</li>
            <li>Redes sociais</li>
          </ul>
        </div>
      )}
    </WrapperHeader>
  );
}
