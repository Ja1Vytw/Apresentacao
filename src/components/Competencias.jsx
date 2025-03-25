import React from "react";
import { motion } from "framer-motion";

const Competencias = () => {
  const animacao = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut", delay: 1.5 },
    },
  };

  return (
    <motion.section
      id="competencias"
      variants={animacao}
      initial="hidden"
      animate="visible"
    >
      <h2 className="titulo-sessao azul">Competências</h2>
      <div className="competencias__conteudo">
        <div className="competencias__colunas">
          {/* Coluna de Formação */}
          <div className="competencias__coluna">
            <div className="competencias__cabecalho">
              <img
                src="https://icongr.am/entypo/graduation-cap.svg?size=25&color=00bdbd"
                alt="graduação"
              />
              <h3>Formação</h3>
            </div>
            <div className="competencias__item">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Universidade de São Caetano Do Sul
                </p>
                <p>Jan 2022 a Dez 2023</p>
                <p className="competencias__item-resumo">
                  Formação completa em Análise e Desenvolvimento de Sistemas,
                  com foco em programação orientada a objetos, modelagem de
                  banco de dados e engenharia de software. Experiência prática
                  em projetos de desenvolvimento web e mobile, utilizando
                  metodologias ágeis.
                </p>
              </div>
            </div>
            <div className="competencias__item">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">Cyber Security</h3>
                <p className="competencias__status competencias__status--andamento">
                  Em andamento
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  FIAP
                </p>
                <p>Jan 2024 a Dez 2025</p>
                <p className="competencias__item-resumo">
                  Especialização em Cyber Security em andamento, com
                  aprofundamento em segurança de redes, análise de
                  vulnerabilidades e resposta a incidentes. Desenvolvimento de
                  projetos práticos em segurança da informação, aplicando
                  técnicas de hardening e pentest.
                </p>
              </div>
            </div>
          </div>

          {/* Separador Visual */}
          <div className="competencias__separador">
            <div className="competencias__separador-bolinha"></div>
            <div className="competencias__separador-linha"></div>
            <div className="competencias__separador-bolinha"></div>
          </div>

          {/* Coluna de Experiência */}
          <div className="competencias__coluna">
            <div className="competencias__cabecalho">
              <img
                src="https://icongr.am/entypo/suitcase.svg?size=25&color=00bdbd"
                alt="experiencia"
              />
              <h3>Experiência</h3>
            </div>
            <div className="competencias__item">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Desenvolvedor Full Stack Freelancer
                </h3>
                <p className="competencias__status competencias__status--atual">
                  Atual
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Freelance
                </p>
                <p>Jan 2023 - Presente</p>
                <p className="competencias__item-resumo">
                  Desenvolvimento de projetos web para pequenas e médias
                  empresas, utilizando diversas tecnologias de frontend e
                  backend.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="competencias__cursos">
          <div className="competencias__cabecalho">
            <img
              src="https://icongr.am/entypo/graduation-cap.svg?size=25&color=00bdbd"
              alt="graduação"
            />
            <h3>Cursos</h3>
          </div>
          <div className="container__item-curso">
            <div className="competencias__item curso">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Curso HTML | CSS | JavaScript
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Serliv Code | 123.5 Horas
                </p>
                <p className="azul">Fev 2023 a Abr 2023</p>
                <p className="competencias__item-resumo">
                  Aprendi HTML, CSS, JavaScript e lógica de programação, criando
                  mais de 10 projetos práticos. O curso abordou desde a
                  estruturação de páginas até interatividade.
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>
                  <img
                    src="https://icongr.am/devicon/css3-original.svg?size=25&color=00bdbd"
                    alt="CSS"
                    title="CSS"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/html5-original.svg?size=25&color=00bdbd"
                    alt="HTML"
                    title="html"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/javascript-original.svg?size=25&color=00bdbd"
                    alt="JavaScript"
                    title="JavaScript"
                    className="icon__curso"
                  />
                </div>
              </div>
            </div>

            <div className="competencias__item curso">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Curso ReactJS c/ hooks, router, API
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Hora de Codar | 30.5 Horas
                </p>
                <p className="azul">Fev 2023 a Abr 2023</p>
                <p className="competencias__item-resumo">
                  Aprendi React do zero, utilizando hooks, router e integração
                  com APIs. Desenvolvi projetos completos com Firebase, Node.js
                  e MongoDB, adquirindo habilidades para criar aplicações
                  modernas.
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>
                  <img
                    src="https://icongr.am/devicon/react-original.svg?size=25&color=currentColor"
                    alt="ReactJS"
                    title="ReactJS"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/nodejs-original.svg?size=25&color=currentColor"
                    alt="NodeJS"
                    title="NodeJS"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/mongodb-original.svg?size=25&color=currentColor"
                    alt="MongoDB"
                    title="MongoDB"
                    className="icon__curso"
                  />
                </div>
              </div>
            </div>

            <div className="competencias__item curso">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Curso HTML | CSS | JavaScript
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Serliv Code | 123.5 Horas
                </p>
                <p className="azul">Fev 2023 a Abr 2023</p>
                <p className="competencias__item-resumo">
                  Aprendi HTML, CSS, JavaScript e lógica de programação, criando
                  mais de 10 projetos práticos. O curso abordou desde a
                  estruturação de páginas até interatividade.
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>
                  <img
                    src="https://icongr.am/devicon/css3-original.svg?size=25&color=00bdbd"
                    alt="CSS"
                    title="CSS"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/html5-original.svg?size=25&color=00bdbd"
                    alt="HTML"
                    title="html"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/javascript-original.svg?size=25&color=00bdbd"
                    alt="JavaScript"
                    title="JavaScript"
                    className="icon__curso"
                  />
                </div>
              </div>
            </div>

            <div className="competencias__item curso">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Curso HTML | CSS | JavaScript
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Serliv Code | 123.5 Horas
                </p>
                <p className="azul">Fev 2023 a Abr 2023</p>
                <p className="competencias__item-resumo">
                  Aprendi HTML, CSS, JavaScript e lógica de programação, criando
                  mais de 10 projetos práticos. O curso abordou desde a
                  estruturação de páginas até interatividade.
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>
                  <img
                    src="https://icongr.am/devicon/css3-original.svg?size=25&color=00bdbd"
                    alt="CSS"
                    title="CSS"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/html5-original.svg?size=25&color=00bdbd"
                    alt="HTML"
                    title="html"
                    className="icon__curso"
                  />
                  <img
                    src="https://icongr.am/devicon/javascript-original.svg?size=25&color=00bdbd"
                    alt="JavaScript"
                    title="JavaScript"
                    className="icon__curso"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Competencias;
