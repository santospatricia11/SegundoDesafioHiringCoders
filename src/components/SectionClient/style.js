import styled from "styled-components";

export const SectionClients = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fcc4ec;

  @media (min-width: 769px) {
    width: 100%;
    min-height: calc(100vh - 150px);
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color:#053742;
`;

export const BoxClients = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  width: 380px;
  overflow-x: scroll;
  padding: 0;
  margin: 0;

  th {
    background: #f8bbd0;
    color: #053742;
    padding: 5px 80px 5px 80px;
  }

  td {
    background-color: #e8f0f2;
    color: #053742;
    padding: 5px 0 5px 0;
    :hover {
      background-color: white;
    }
  }

  @media (min-width: 800px) {
    width: auto;
    overflow-x: hidden;
    justify-items: center;
    align-items: center;
    padding: 0;
  }
`;


export const Button = styled.div`
  margin: 20px;

  button {
    background-color: #1b262c;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 100px;
    border: 0;
    margin: 1% 0 1% 0;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`
