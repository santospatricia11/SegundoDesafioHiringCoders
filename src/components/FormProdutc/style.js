import styled from "styled-components";

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFCCCC;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 4;
`;
export const Title = styled.h1`
  color: #053742;
  font-size: 2rem;
`;

export const Input = styled.input`
  min-width: 50px;
  width: 200px;
  height: 40px;
  background-color: #f4f4f4;
  color: #053742;
  border: 0;
  border-radius: 100px;
  margin: 5px 0 5px 0;
  padding: 2px 16px ;
  outline: none;
  ::placeholder {
    color: #053742;
    opacity: 0.8;
    text-align: center;
    font-size: 1.1rem;

  }
  &:hover {
    background-color: #e8f0f2;
  }
`;

export const Message = styled.span`
  color: #053742;
  font-size: 0.9rem;
  font-style: italic;
`

export const Button = styled.div`
    width: 230px;

    button {
    background-color: #053742;
    color: #fff;
    width: 100%;
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
