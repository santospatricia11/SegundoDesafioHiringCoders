import styled from "styled-components";

export const SectionSecondary = styled.section`
  width: auto;
  height: auto;
  background-color: #FFCC99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  text-align: center;

  @media(min-width: 769px) { 
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1%;
` 
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  img:hover {
    opacity: 0.9;
  }

  @media(min-width: 769px) { 
    display: flex;
    flex-direction: column;
  }
`

export const Promo = styled.span`
  width: 100px;
  height: 100px;
  background-color: #FFCCFF;
  color: #FFCCCC;
  font-weight: bold;
  font-size: 1.7rem;
  border-radius: 1000px;
  border: solid 1px #0F4C75;
  position: absolute;
  top: 215px;
  left: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 100ms;
  &:hover{
    transform: scale(1.1)
  }

  @media(min-width: 769px) { 
    top: 210px;
    left: 210px;
    display: flex;
    flex-direction: row;
  }
`