import styled from "styled-components";

const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  & img {
    height: 300px;
    width: 300px;
    border-radius: 20px;
  }
`;

export default AppStyled;
