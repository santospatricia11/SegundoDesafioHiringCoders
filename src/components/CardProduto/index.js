import React from "react";
import * as S from "./style";

export default function CardProduto({ src, alt, title, price, size, amount}) {
  return (
    <S.Box >
        <S.Image><img src={src} alt={alt}/></S.Image>
        <S.Description>
            <S.TitleProduct>{title}</S.TitleProduct>
            <S.Info>Preço: {price}</S.Info>
            <S.Info>Tamanho: {size}</S.Info>
            <S.Info>Quantidade: {amount}</S.Info>
        </S.Description>
    </S.Box>

  );
}