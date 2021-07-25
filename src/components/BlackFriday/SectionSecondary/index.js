import React from "react";
import * as S from "./style";

export default function SectionSecondary() {
  return (
    <S.SectionSecondary>
      <S.Image>
        <S.Title>Blusas</S.Title>
        <img
          src="../primeiro.jpg"
          alt="Blusas Finas"
        />{" "}
        <S.Promo>40% OFF</S.Promo>
      </S.Image>

      <S.Image>
        <S.Title>Vestidos</S.Title>
        <img
          src="../quarta.jpg"
          alt="Basicos"
        />{" "}
        <S.Promo>20% OFF</S.Promo>
      </S.Image>

      <S.Image>
        <S.Title>Calças</S.Title>
        <img src="../segunda.jpg" alt="Elegantes" />
        <S.Promo>40% OFF</S.Promo>
      </S.Image>
    </S.SectionSecondary>
  );
}
