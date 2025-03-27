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
                  Em Andamento
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

          {/* Separador */}
          <div className="competencias__separador">
            <div className="competencias__separador-bolinha"></div>
            <div className="competencias__separador-linha"></div>
            <div className="competencias__separador-bolinha"></div>
          </div>

          {/* Coluna das Experiência */}
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
                <p className="competencias__status competencias__status--andamento">
                  Em Andamento
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
                  Curso de Programação JavaScript
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Andre Iacono | 10.5 Horas
                </p>
                <p className="azul">Mar 2023</p>
                <p className="competencias__item-resumo">
                  Aprendi JavaScript e lógica de programação, criando mais de 7
                  projetos práticos de forma intensiva e abrangendo uma série de
                  funcionalidades quentes no mercado de trabalho.
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>
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
                  PHP do Zero a Maestria
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Hora de Codar | 69.5 Horas
                </p>
                <p className="azul">Dez 2023 a Fev 2024</p>
                <p className="competencias__item-resumo">
                  Aprendi desde os fundamentos até o desenvolvimento de
                  aplicações web com Laravel e MySQL, incluindo 4 projetos
                  práticos.
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>

                  <img
                    src="https://icongr.am/devicon/php-plain.svg?size=25&color=777BB4"
                    alt="PHP"
                    title="PHP"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/mysql-plain.svg?size=25&color=4479A1"
                    alt="MySQL"
                    title="MySQL"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/laravel-plain.svg?size=25&color=FF2D20"
                    alt="Laravel"
                    title="Laravel"
                    className="icon__curso"
                  />
                </div>
              </div>
            </div>

            <div className="competencias__item curso">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">
                  Desenvolvimento Web Completo
                </h3>
                <p className="competencias__status competencias__status--finalizado">
                  Finalizado
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Udemy | Jorge Sant Ana & Jamilton Damasceno | 146 Horas
                </p>
                <p className="azul">Ago 2024 a Nov 2024</p>
                <p className="competencias__item-resumo">
                  Desenvolvimento web full-stack com o curso, adquirindo
                  habilidades em front-end (HTML5, CSS3, Bootstrap, JavaScript),
                  back-end (PHP, MySQL), APIs, desenvolvimento mobile (Ionic) e
                  gerenciamento de conteúdo (WordPress).
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>

                  <img
                    src="https://icongr.am/devicon/html5-plain.svg?size=25&color=E34F26"
                    alt="HTML5"
                    title="HTML5"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/css3-plain.svg?size=25&color=1572B6"
                    alt="CSS3"
                    title="CSS3"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/sass-original.svg?size=25&color=CC6699"
                    alt="SASS"
                    title="SASS"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/bootstrap-plain.svg?size=25&color=563D7C"
                    alt="Bootstrap"
                    title="Bootstrap"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/javascript-original.svg?size=25&color=F7DF1E"
                    alt="JavaScript"
                    title="JavaScript"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/javascript-plain.svg?size=25&color=F7DF1E"
                    alt="ES6"
                    title="ES6"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/php-plain.svg?size=25&color=777BB4"
                    alt="PHP"
                    title="PHP"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/mysql-plain.svg?size=25&color=4479A1"
                    alt="MySQL"
                    title="MySQL"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/jquery-plain.svg?size=25&color=0769AD"
                    alt="jQuery"
                    title="jQuery"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/laravel-plain.svg?size=25&color=FF2D20"
                    alt="Laravel"
                    title="Laravel"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/ionic-original.svg?size=25&color=3880FF"
                    alt="Ionic"
                    title="Ionic"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/wordpress-plain.svg?size=25&color=21759B"
                    alt="WordPress"
                    title="WordPress"
                    className="icon__curso"
                  />
                </div>
              </div>
            </div>

            <div className="competencias__item curso">
              <div className="competencias__item-cabecalho">
                <h3 className="competencias__item-titulo">Java10x</h3>
                <p className="competencias__status competencias__status--andamento">
                  Em Andamento
                </p>
              </div>
              <div className="competencias__instituicao">
                <p className="competencias__instituicao-nome clear azul">
                  Hotmart | Oracio "Fiasco" | 39.2 Horas
                </p>
                <p className="azul">Mar 2025...</p>
                <p className="competencias__item-resumo">
                  Experiência em desenvolvimento full-stack, incluindo Java
                  (POO, JavaFX, Spring Boot), ReactJS, Angular e bancos de dados
                  (MySQL/PostgreSQL), com foco em projetos práticos{" "}
                </p>
                <div className="competencias__item-tecnologias">
                  <p className="competencias__item-tecnologiasTitle azul">
                    Tecnologias aprendidas
                  </p>

                  <img
                    src="https://icongr.am/devicon/java-plain.svg?size=25&color=007396"
                    alt="Java"
                    title="Java"
                    className="icon__curso"
                  />

                  <img
                    src="https://spring.io/img/projects/spring-boot.svg"
                    alt="Spring Boot"
                    title="Spring Boot"
                    className="icon__curso"
                    width="25"
                    height="25"
                  />

                  <img
                    src="https://icongr.am/devicon/mysql-plain.svg?size=25&color=4479A1"
                    alt="MySQL"
                    title="MySQL"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/postgresql-plain.svg?size=25&color=336791"
                    alt="PostgreSQL"
                    title="PostgreSQL"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/react-original.svg?size=25&color=61DAFB"
                    alt="React"
                    title="React"
                    className="icon__curso"
                  />

                  <img
                    src="https://icongr.am/devicon/angularjs-plain.svg?size=25&color=DD0031"
                    alt="Angular"
                    title="Angular"
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
