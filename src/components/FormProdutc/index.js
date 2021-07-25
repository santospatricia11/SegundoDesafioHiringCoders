import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../Loading";
import * as S from "./style";

export default function FormProduct() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [descriptionImage, setDescriptionImage] = useState("");
  const [saveProduct, setSaveProduct] = useState(false);
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    size: "",
    amount: "",
    image: "",
    descriptionImage: "",
  });

  function handleProduct() {
    setLoading(true)
    setProduct({
      name: name,
      price: price,
      size: size,
      amount: amount,
      image: image,
      descriptionImage: descriptionImage,
    });

    setSaveProduct(true);
  }

  useEffect(() => {
    if (saveProduct) return registerLocalStorage();
  });


  function registerLocalStorage() {
    const productsLocalStorage = JSON.parse(localStorage.getItem("products"));

    if (saveProduct) {
      setSaveProduct(false);
      if (productsLocalStorage === null) {
        localStorage.setItem("products", JSON.stringify([product]));
        setTimeout(() => { history.push('/') }, 2 * 1000);
      } else {
        localStorage.setItem("products", JSON.stringify([...productsLocalStorage, product]));
          setTimeout(() => { history.push('/') }, 2 * 1000);
      }
    }
  }

  return (
    <S.Form>
      { loading ? <Loading /> : ""}
      <S.Title>Novo Produto</S.Title>
      <S.Message>obrigatório: nome, preço, tamanho e quantidade:</S.Message>
      <S.Input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <S.Input
        placeholder="Preço"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />
      <S.Input
        placeholder="Tamanho"
        value={size}
        onChange={(event) => setSize(event.target.value)}
        required
      />
      <S.Input
        placeholder="Quantidade"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        required
      />
      <S.Input
        placeholder="Link "
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <S.Input
        placeholder="Descrição do Produto"
        value={descriptionImage}
        onChange={(event) => setDescriptionImage(event.target.value)}
      />

      <S.Button>
        <button onClick={handleProduct} disabled={!name || !price || !size || !amount }>Cadastrar</button>
      </S.Button>
    </S.Form>
  );
  
}
