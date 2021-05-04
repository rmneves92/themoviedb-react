import React from "react";
import { useHistory } from "react-router-dom";
import * as styles from "./styles";
import { Film } from "react-feather";

const Header = (props) => {
  const history = useHistory();

  return (
    <header css={styles.Header}>
      <nav css={styles.Nav}>
        <ul css={styles.Links}>
          <li>
            <a css={styles.Logo} onClick={() => history.push("/")}>
              <Film />
            </a>
          </li>
          <li>
            <a
              href="https://www.themoviedb.org/?language=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              Home TMDB
            </a>
          </li>
          <li>
            <a
              href="https://developers.themoviedb.org/3/getting-started/introduction"
              target="_blank"
              rel="noreferrer"
            >
              Documentação TMDB
            </a>
          </li>
          <li>
            <a
              href="https://github.com/carguero/frontend-challenge"
              target="_blank"
              rel="noreferrer"
            >
              Desafio
            </a>
          </li>

          <li>
            <a
              href="https://github.com/rmneves92"
              target="_blank"
              rel="noreferrer"
            >
              Meu GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
