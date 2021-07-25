import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../Loading";
import * as S from "./style";

export default function FormClient() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [saveClient, setSaveClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState({
    name: "",
    email: "",
    address: "",
  });

  function handleClient() {
    setLoading(true)
    setClient({
      name: name,
      email: email,
      address: address,
    });
    setSaveClient(true);
  }

  useEffect(() => {
    if (saveClient) return registerLocalStorage();
  });

  function registerLocalStorage() {
    const clientsLocalStorage = JSON.parse(localStorage.getItem("clients"));
    if (saveClient) {
      setSaveClient(false);
      if (clientsLocalStorage === null) {
        localStorage.setItem("clients", JSON.stringify([client]));
        setTimeout(() => {
          history.push('/#section-client');
        }, 2 * 1000);

      } else {
        localStorage.setItem("clients", JSON.stringify([...clientsLocalStorage, client]));
        setTimeout(() => {
          history.push('/#section-client');
        }, 2 * 1000);
      }
    }
  }

  return (
    <>
      <S.Form>
        { loading ? <Loading /> : ""}
        <S.Title>Novo Cliente</S.Title>
        <S.Message>Obrigatório: Nome e Email.</S.Message>
        <S.Input
          placeholder="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <S.Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required

        />
        <S.Input
          placeholder="endereço"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />

        <S.Button>
          <button onClick={handleClient} disabled={!name || !email }>Cadastrar!</button>
        </S.Button>
      </S.Form>
    </>
  );
}
