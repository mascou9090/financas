import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  text-align: center;
  padding-bottom: 40px;
  background-color: darkblue;
`;
export const TextHeader = styled.h1`
  padding: 3rem;
  color:white;
`;
export const Body = styled.main`
  max-width:980px;
  margin:auto;
  margin-bottom: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
`;
