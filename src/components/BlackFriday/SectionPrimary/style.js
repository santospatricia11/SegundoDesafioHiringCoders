import styled from "styled-components";

export const SectionPrimary = styled.section`
  width: auto;
  height: auto;
  background-color: #FF999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 50% 50%;
    .imageBox {
      padding-left: 30%;
    }
    .contentBox {
      padding-right: 30%;
    }
  }
`;

export const BoxImage = styled.article`
  img {
    max-height: 400px;
  }
`;

export const BoxContent = styled.article`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const Title = styled.h2`
  color:white;
  font-size: 1.5rem;
`;

export const SubTitle = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px auto;
`;

export const BoxEmail = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 10% 0 10%;
  input {
    min-width: 50px;
    height: 100%;
    backgraund:#FFCCFF;
    color: #FF99FF;
    border: 0;
    border-radius: 100px;
    margin: 1% 0 1% 0;
    padding: 10px 16px;
    outline: none;
    ::placeholder {
      color: #333333;
      opacity: 0.8;
    }
    &:hover {
      background-color: #CC6666;
    }
  }

  button {
    background-color: #1b262c;
    color: #ffffff;
    font-weight: bold;
    border-radius: 100px;
    border: 0;
    margin: 1% 0 1% 0;
    padding: 10px 12px;
    cursor: pointer;
    outline: none;
  }
`;

export const MensagemConfirmacao = styled.span`
  background-color: #4aa96c;
  color: #e8f0f2;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px auto;
  padding: 2px 10px 2px 10px;
`;

export const MensagemErro = styled.span`
  background-color: #da0037;
  color: #e8f0f2;
  border-radius: 8px;
  font-weight: bold;
  margin: 10px auto;
  padding: 2px 10px 2px 10px;
`;
