import styled from "styled-components";

export const Header = styled.section`
  width: auto;
  height: auto;
  background: #CC9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 30% 60%;
    height: 180px;
  }
`;

export const BoxLogo = styled.article`
  display: flex;
  justify-content: center;

  img {
    max-height: 150px;
    margin-top: 5px 0 5px 0;
  }
`;

export const Title = styled.article`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #053742;
  padding-bottom: 5%;

  @media (min-width: 769px) {
    font-size: 3rem;
    padding-bottom: 0;
    margin-left: 40px;
  }
`;
