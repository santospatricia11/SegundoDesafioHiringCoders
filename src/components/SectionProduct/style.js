import styled from "styled-components";

export const SectionProducts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcdfce;
  /* padding: 4% 0 0 6%; */

  @media(min-width: 769px) { 
    width: 100%;
    min-height: calc(100vh - 180px);
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #053742;
  margin: 20px;
` 

export const BoxProducts = styled.article`
  @media(min-width: 769px) { 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    justify-items: center;
    align-items: center;
    padding: 0;
 }
` 

export const Button = styled.div`
  margin: 30px;
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

