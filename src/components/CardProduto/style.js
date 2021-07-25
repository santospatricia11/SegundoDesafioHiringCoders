import styled from "styled-components";

export const Box = styled.article`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1%;
  position: relative;
  background-color: #FF99CC;
`;

export const Image = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 150px;
  height: 180px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  position: absolute;
  left: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: -4px 4px 0px 0px #dbe6fd;
  -moz-box-shadow: -4px 4px 0px 0px #dbe6fd;
  box-shadow: -4px 4px 0px 0px #dbe6fd;

  img {
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
  }
`;
export const Description = styled.div`
  width: 150px;
  height: 180px;
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.span`
  width: 130px;
  height: 50px;
  margin: 8px;
  color: #053742;
  text-align: start;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

export const TitleProduct = styled(Info)`
  font-size: 1.1rem;
  font-weight: bold;
`;
