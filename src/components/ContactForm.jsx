import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanepoaa");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [state.succeeded, navigate]);

  const handleEmailChange = (e) => {
    if (!e.target.value.includes("@")) {
      setEmailError("Email inválido");
    } else {
      setEmailError("");
    }
  };

  if (state.succeeded) {
    return <div className="success-message">Obrigado pelo seu contato!</div>;
  }

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Envie uma mensagem</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" name="nome" />
            <ValidationError prefix="Nome" field="nome" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="empresa">Nome da Empresa (opcional)</label>
            <input id="empresa" type="text" name="empresa" />
            <ValidationError
              prefix="Empresa"
              field="empresa"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleEmailChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="assunto">Assunto</label>
            <input id="assunto" type="text" name="assunto" />
            <ValidationError
              prefix="Assunto"
              field="assunto"
              errors={state.errors}
            />
          </div>
        </div>

        <div
          className="form-group"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            style={{ gridColumn: "1 / span 2" }}
          />
          <ValidationError
            prefix="Mensagem"
            field="mensagem"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="submit-button"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
