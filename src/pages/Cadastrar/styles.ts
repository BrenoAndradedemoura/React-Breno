import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${colors.primary};
  form {
    background-color: ${colors.secondary};
    border-radius: 1rem;
    padding: 1.5rem;
    label {
      color: ${colors.white};
    }
    div {
      background-color: ${colors.third};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
        padding: 0.5rem;
      }
    }
    p {
      margin-top: 1rem;
      color: ${colors.white};
      a {
        text-decoration: none;
        color: ${colors.white};
        font-weight: bold;
      }
    }
  }
`