import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import * as S from "./style";
import clients from "../../data/clients.json";

export default function SectionClient() {
  const history = useHistory();
  const [ list, setList ] = useState([...clients]);


  useEffect(() => {
    let newClient = localStorage.getItem('clients');

    if (newClient !== null) { 
      newClient = JSON.parse(newClient);
      setList([...list, ...newClient]);
    } else {
      history.push('/')
    }
 
  }, [])

  function handleNewClient() {
    history.push('/newClient')
  }

  return (
    <>
      <S.SectionClients>
        <div id="section-client">
          <S.Title>Clientes</S.Title>
        </div>
        <div>
          <S.BoxClients>
            <table>
              <tbody>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Endereço</th>
                </tr>
                {list.map((client) => (
                  <tr key={client.email}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.BoxClients>
        </div>

      <S.Button>
        <button onClick={handleNewClient} >Cadastrar novo cliente</button>
      </S.Button>

      </S.SectionClients>
    </>
  );
}
