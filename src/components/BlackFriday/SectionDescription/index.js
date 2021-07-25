import React from "react";
import * as S from "./style";

export default function SectionDescription() {
  return (
    <S.SectionDescription>
      <S.Box className="imageBox">
        <a href="" target="_blank" rel=""><img src="../primeira.jpg" alt="Blusas de Ótima qualidade" /> </a>
      </S.Box>

      <S.Box className="descriptionBox">
        <S.Promo>70% OFF</S.Promo>
        <S.Description>Para a terceira compra</S.Description>
        <S.Promo>FRETE GRÁTIS</S.Promo>
        <S.Description>para os primeiros 5 pedidos</S.Description>
      </S.Box>

    </S.SectionDescription>
  );
}