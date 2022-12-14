import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Card = styled.div`
  div {
    background-color: ${colors.secondary};
    border-radius: 0.5rem;
    padding: 0.4rem;
    h3, h4 {
      margin-bottom: 0.5rem;
      color: ${colors.white};
    }
  }
`