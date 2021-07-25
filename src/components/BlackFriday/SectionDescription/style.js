import styled from "styled-components";

export const SectionDescription = styled.section`
  width: auto;
  height: auto;
  background-color: #FF99CC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 769px) { 
    display: grid;
    grid-template-columns: 50% 50%;
    .imageBox {
      padding-left: 30%;
    }
    .descriptionBox {
      padding-right: 30%;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;

  @media(min-width: 769px) { 
    margin: 2%;
  }
`

export const Promo = styled.span`
  padding: 5% 0 0% 0;
  color: #E8F0F2;
  font-weight: bold;
  font-size: 3rem;
  transition: 100ms;
  &:hover{
    transform: scale(1.1)
  }
`;

export const Description = styled.span`
  color:black;
  font-size: 1.8rem;
`;
