import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".link__navbar-Header");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div id="Header">
      <div className="logo">
        <h1>João Vitor Pereira</h1>
        <p>DEV</p>
      </div>

      <div className="navbar">
        <nav>
          <ul id="navbar">
            <li className="item__navbar-Header">
              <a href="#home" className="link__navbar-Header">
                Home
              </a>
            </li>
            <li className="item__navbar-Header">
              <a href="#sobre" className="link__navbar-Header">
                Sobre
              </a>
            </li>
            <li className="item__navbar-Header">
              <a href="#experiencia" className="link__navbar-Header">
                Experiência
              </a>
            </li>
            <li className="item__navbar-Header">
              <a href="#tecnologias" className="link__navbar-Header">
                Tecnologias
              </a>
            </li>
            <li className="item__navbar-Header">
              <a href="#projetos" className="link__navbar-Header">
                Projetos
              </a>
            </li>
            <li className="item__navbar-Header">
              <a href="#contato" className="link__navbar-Header">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
    </div>
  );
};

export default Header;