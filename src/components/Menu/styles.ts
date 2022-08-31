import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabecalho = styled.header`
  display: flex;
  background-color: ${colors.primary};
  border-bottom: 1.8rem solid ${colors.third};
  picture svg {
    height: 3rem;
    width: 3rem;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.5em;
          color: ${colors.white};
        }
      }
    }
  }
`