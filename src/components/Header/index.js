import React from "react";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header >
      <S.BoxLogo>
        <img src="../fin.jpg" alt="logo" />
      </S.BoxLogo>
      <S.Title>Gestão de Cadastros</S.Title>
    </S.Header>
  );
}
