import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import { useFilter, usePage } from "../../context/movieContext";
import { Check, X, Filter } from "react-feather";
import { Collapse } from "react-collapse";
import { motion } from "framer-motion";

const Sidebar = ({ genres, handleClick }) => {
  const { setFilters, filters } = useFilter();
  const { setPage } = usePage();
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsOpened(false);
    }
  }, []);

  const isActive = (genre) =>
    filters.includes(filters.find((el) => el === genre.id));

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100%",
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      css={styles.Container}
    >
      <div css={styles.HeaderSidebar} onClick={() => setIsOpened(!isOpened)}>
        <h1 css={styles.PageTitle}> Filmes</h1>
        <Filter />
      </div>
      {filters.length > 0 && (
        <span
          css={styles.ClearFilters}
          onClick={() => {
            setFilters([]);
            setPage(1);
          }}
        >
          Limpar filtros <X size="20" />
        </span>
      )}
      <hr></hr>

      {genres.length === 0 && <span>Carregando...</span>}

      <Collapse isOpened={isOpened}>
        <ul>
          {genres.map((genre, index) => {
            return (
              <li
                data-testid="genre-item"
                key={index}
                onClick={handleClick(genre.id)}
                css={isActive(genre) ? styles.Active : null}
              >
                <span>{genre.name}</span>
                {isActive(genre) && <Check size="16" />}
              </li>
            );
          })}
        </ul>
      </Collapse>
    </motion.div>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;
