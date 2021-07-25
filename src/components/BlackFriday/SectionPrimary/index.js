import React, { useState } from "react";
import * as S from "./style";

function SectionPrimary() {
  const [ email, setEmail ] = useState("");
  const [ nome, setNome ] = useState("");
  const [ mensagemConfirmacao, setMensagemConfirmacao ] = useState(false);
  const [ mensagemErro, setMensagemErro ] = useState(false);

  function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  }

  function handleEmail() {
    const emailValid = validEmail(email);
    setMensagemConfirmacao(emailValid);
    setMensagemErro(!emailValid);
    const contato = { nome: nome, email: email };
    if (emailValid) return localStorage.setItem('contato', JSON.stringify(contato));
  }

  return (
    <S.SectionPrimary>
      <S.BoxImage className="imageBox">
        <img src="../fin.jpg" alt="logo" />
      </S.BoxImage>

      <S.BoxContent className="contentBox">
        <S.Title>SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS</S.Title>
        <S.SubTitle>Informe o nome e seu  e-mail:</S.SubTitle>
        <S.BoxEmail>
          <input placeholder="nome" value={ nome } onChange={(e) => setNome(e.target.value)}></input>
          <input placeholder="patricia@email.com" value={ email } onChange={(e) => setEmail(e.target.value)}></input>
          <button type="button" onClick={handleEmail}>Enviar</button>
        </S.BoxEmail>
        { mensagemConfirmacao ? <S.MensagemConfirmacao>E-mail registrado com sucesso!</S.MensagemConfirmacao> : " " }
        { mensagemErro ? <S.MensagemErro>Informe seu e-mail</S.MensagemErro> : " " }
      </S.BoxContent>
    </S.SectionPrimary>
  );
}

export default SectionPrimary;
