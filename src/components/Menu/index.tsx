import React from "react";
import { FcReuse } from "react-icons/fc";
import * as S from "./styles";
import { Link } from "react-router-dom";
import Hp from "assets/img/Hp.png";

const Menu = () => {
  return (
    <S.Cabecalho>
        <Link to="/">
          <img src={Hp} alt="Imagens principais" />
        </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
