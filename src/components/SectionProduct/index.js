import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as S from "./style";
import products from "../../data/products.json"
import CardProduto from "../CardProduto";

export default function SectionProduct() {
  const history = useHistory();
  const [ list, setList ] = useState([...products]);


  useEffect(() => {
    let newProduct = localStorage.getItem('products');

    if (newProduct !== null) { 
      newProduct = JSON.parse(newProduct);
      setList([...list, ...newProduct]);
    } else {
      history.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleNewProduct() {
    history.push('/newProduct')
  }

  return (
    <>
    <S.SectionProducts>
      <div>
        <S.Title>Produtos</S.Title>
      </div>
      <div>
      <S.BoxProducts>
        {list.map((product) => (
          <CardProduto
            key={product.name}
            title={product.name}
            src={product.image}
            alt={product.descriptionImage}
            price={product.price}
            size={product.size}
            amount={product.amount}
          />
        ))}
      </S.BoxProducts>
      </div>

      <S.Button>
        <button onClick={handleNewProduct}>Cadastrar novo produto</button>
      </S.Button>
      
    </S.SectionProducts>
    </>
  );
}