import React, { useState, useRef, useEffect } from "react";
import { WrapperHeader } from "../Style/Wrapperheader.style";
import Logo from "../Images/agi.jpeg";

export default function Header({
  onContactClick,
  onServicesClick,
  onWorkInClick,
  scrollToFooter, // Corrigindo o nome da prop para combinar com o App
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <WrapperHeader>
      <div className="logo">
        <img src={Logo} alt="Logo" width={150} />
      </div>
      <div className="menu-hamburger" onClick={toggleMenu} ref={menuButtonRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className="menu-dropdown" ref={menuRef}>
          <ul>
            <li onClick={onContactClick}>Contate-nos</li>
            <li onClick={onWorkInClick}>Trabalhe conosco</li>
            <li onClick={onServicesClick}>Nossos serviços</li>
            <li onClick={scrollToFooter}>Redes sociais</li> {/* Corrigido */}
          </ul>
        </div>
      )}
    </WrapperHeader>
  );
}
