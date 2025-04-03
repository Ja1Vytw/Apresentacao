import React from "react";
import { motion } from "framer-motion";
import { cursosData } from "./cursosData";

const Desenvolvimento = () => {
    const animacao = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeInOut", delay: 1.5 },
        },
    };

    return (
        <motion.section id="desenvolvimento" variants={animacao} initial="hidden" animate="visible">
            <h2 className="titulo-sessao azul">Desenvolvimento Profissional</h2>
            <main className="desenvolvimento__conteudo">
                <div className="desenvolvimento__colunas">
                    {/* Seção de Formação */}
                    <section className="desenvolvimento__coluna">
                        <header className="desenvolvimento__cabecalho">
                            <img src="https://icongr.am/entypo/graduation-cap.svg?size=25&color=00bdbd" alt="graduação" />
                            <h3>Formação</h3>
                        </header>
                        <article className="desenvolvimento__item">
                            <header className="desenvolvimento__item-cabecalho">
                                <h3 className="desenvolvimento__item-titulo">Análise e Desenvolvimento de Sistemas</h3>
                                <p className="desenvolvimento__status desenvolvimento__status--finalizado">Finalizado</p>
                            </header>
                            <div className="desenvolvimento__instituicao">
                                <p className="desenvolvimento__instituicao-nome clear azul">Universidade de São Caetano Do Sul</p>
                                <p>Jan 2022 a Dez 2023</p>
                                <p className="desenvolvimento__item-resumo">
                                    Formação completa em Análise e Desenvolvimento de Sistemas, com foco em programação orientada a objetos,
                                    modelagem de banco de dados e engenharia de software. Experiência prática em projetos de desenvolvimento web
                                    e mobile, utilizando metodologias ágeis.
                                </p>
                            </div>
                        </article>
                        <article className="desenvolvimento__item">
                            <header className="desenvolvimento__item-cabecalho">
                                <h3 className="desenvolvimento__item-titulo">Cyber Security</h3>
                                <p className="desenvolvimento__status desenvolvimento__status--andamento">Em Andamento</p>
                            </header>
                            <div className="desenvolvimento__instituicao">
                                <p className="desenvolvimento__instituicao-nome clear azul">FIAP</p>
                                <p>Jan 2024 a Dez 2025</p>
                                <p className="desenvolvimento__item-resumo">
                                    Especialização em Cyber Security em andamento, com aprofundamento em segurança de redes, análise de
                                    vulnerabilidades e resposta a incidentes. Desenvolvimento de projetos práticos em segurança da informação,
                                    aplicando técnicas de hardening e pentest.
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Separador */}
                    <aside className="desenvolvimento__separador">
                        <div className="desenvolvimento__separador-bolinha"></div>
                        <div className="desenvolvimento__separador-linha"></div>
                        <div className="desenvolvimento__separador-bolinha"></div>
                    </aside>

                    {/* Seção de Experiência */}
                    <section className="desenvolvimento__coluna">
                        <header className="desenvolvimento__cabecalho">
                            <img src="https://icongr.am/entypo/suitcase.svg?size=25&color=00bdbd" alt="experiencia" />
                            <h3>Experiência</h3>
                        </header>
                        <article className="desenvolvimento__item">
                            <header className="desenvolvimento__item-cabecalho">
                                <h3 className="desenvolvimento__item-titulo">Desenvolvedor Full Stack Freelancer</h3>
                                <p className="desenvolvimento__status desenvolvimento__status--andamento">Em Andamento</p>
                            </header>
                            <div className="desenvolvimento__instituicao">
                                <p className="desenvolvimento__instituicao-nome clear azul">Freelance</p>
                                <p>Jan 2023 - Presente</p>
                                <p className="desenvolvimento__item-resumo">
                                    Desenvolvimento de projetos web para pequenas e médias empresas, utilizando diversas tecnologias de frontend e
                                    backend.
                                </p>
                            </div>
                        </article>
                    </section>
                </div>

                {/* Seção de Cursos */}
                <section className="desenvolvimento__cursos">
                    <header className="desenvolvimento__cabecalho">
                        <img src="https://icongr.am/entypo/graduation-cap.svg?size=25&color=00bdbd" alt="graduação" />
                        <h3>Cursos</h3>
                    </header>
                    <div className="container__item-curso">
                        {/* Renderização dinâmica dos cursos */}
                        {cursosData.map((curso) => (
                            <article className="desenvolvimento__item curso" key={curso.id}>
                                <header className="desenvolvimento__item-cabecalho">
                                    <h3 className="desenvolvimento__item-titulo">{curso.title}</h3>
                                    <p className={`desenvolvimento__status desenvolvimento__status--${curso.status === "Finalizado" ? "finalizado" : "andamento"}`}>
                                        {curso.status}
                                    </p>
                                </header>
                                <div className="desenvolvimento__instituicao">
                                    <p className="desenvolvimento__instituicao-nome clear azul">{curso.instituicao}</p>
                                    <p className="azul">{curso.tempo}</p>
                                    <p className="desenvolvimento__item-resumo">{curso.descricao}</p>
                                    <div className="desenvolvimento__item-tecnologias">
                                        <p className="desenvolvimento__item-tecnologiasTitle azul">Tecnologias aprendidas</p>
                                        {curso.tecnologias.map((tec) => (
                                            <img
                                                src={tec.icone}
                                                alt={tec.nome}
                                                title={tec.nome}
                                                className="icon__curso"
                                                key={tec.nome}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </motion.section>
    );
};

export default Desenvolvimento;