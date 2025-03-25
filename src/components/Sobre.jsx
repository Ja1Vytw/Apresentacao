import React from "react";
import { motion } from "framer-motion";

const Sobre = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
    },
  };

  const principalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut", delay: 1 },
    },
  };

  return (
    <motion.div
      id="sobre"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="apresentacao__sobre"
      >
        <div className="foto">
          <img src="#" alt="" srcSet="" />
        </div>
        <div className="chamada__sobre">
          <div id="h2__chamada-sobre">
            <h2 className="h2__chamada-sobre">
              Olá, me chamo
              <br /> João Vitor Pereira
              <br />
              <strong>
                <span className="azul">Desenvolvedor Full Stack!</span>
              </strong>
            </h2>
          </div>
          <div className="icons-list">
            <img
              src="https://icongr.am/devicon/java-original.svg?size=40&color=currentColor"
              alt="JAVA"
              title="JAVA"
              className="icon"
            />
            <img
              src="https://icongr.am/devicon/javascript-original.svg?size=40&color=currentColor"
              alt="JavaScript"
              title="JavaScript"
              className="icon"
            />
            <img
              src="https://icongr.am/devicon/nodejs-original.svg?size=40&color=currentColor"
              alt="NodeJS"
              title="NodeJS"
              className="icon"
            />

            <img
              src="https://icongr.am/devicon/php-original.svg?size=40&color=currentColor"
              alt="PHP"
              title="PHP"
              className="icon"
            />
            <img
              src="https://icongr.am/devicon/postgresql-original.svg?size=40&color=currentColor"
              alt="PostgreSQL"
              title="PostgreSQL"
              className="icon"
            />
            <img
              src="https://icongr.am/devicon/mongodb-original.svg?size=40&color=currentColor"
              alt="MongoDB"
              title="MongoDB"
              className="icon"
            />
            <img
              src="https://icongr.am/devicon/mysql-original.svg?size=40&color=currentColor"
              alt="MySQL"
              title="MySQL"
              className="icon"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={principalVariants}
        initial="hidden"
        animate="visible"
        className="principal__sobre"
      >
        <h2 className="principal__sobre-title titulo-sessao">
          <span className="azul">Sobre</span>
        </h2>
        <h3 className="principal__sobre-subtitle">Quem é você? </h3>
        <p className="principal__sobre-text">
          Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de
          Sistemas e expertise em inglês, com sólida experiência no
          desenvolvimento de projetos para pequenas e médias empresas como
          freelancer. Proficiente em frontend e backend, entregando soluções
          completas, eficientes e de alta performance. Âmpla experiência prática
          com diversas tecnologias, sempre buscando aprimorar habilidades em
          ambientes dinâmicos e desafiadores. Apaixonado por criar aplicações
          escaláveis e de fácil manutenção, adotando constantemente novas
          tecnologias para resolver problemas complexos com criatividade e
          eficiência.
        </p>
        <a href="#" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
            title="Linkedin"
            className="icon__contato"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="https://images.icon-icons.com/1996/PNG/512/code_development_github_open_source_programming_source_icon_123274.png"
            alt="GitHub"
            title="GitHub"
            className="icon__contato"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Sobre;
