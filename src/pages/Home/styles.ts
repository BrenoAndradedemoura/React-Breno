import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Home = styled.section`
  height: 80vh;
  background-color: ${colors.primary};
  picture > img {
    width: 100%;
  }
  aside {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 0.5rem;
  }
`
