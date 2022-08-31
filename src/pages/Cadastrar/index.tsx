import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { ButtonComponent } from "components";

const Cadastrar = () => {
  return (
    <S.Section>
      <form action="cadastrar.html" method="post">
        <label htmlFor="nome">Nome</label>
        <div>
          <input type="text" name="nome" id="nome"/>
        </div>
        <label htmlFor="email">E-mail</label>
        <div>
          <input type="email" name="email" id="email"/>
        </div>
        <label htmlFor="senha">Senha</label>
        <div>
          <input type="password" name="senha" id="senha"/>
        </div>
        <p>
          Já possui conta? <Link to="/login">Faça o login</Link>
          <ButtonComponent>Salvar</ButtonComponent>
        </p>
      </form>
    </S.Section>
  );
};

export default Cadastrar;
