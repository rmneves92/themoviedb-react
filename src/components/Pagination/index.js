import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import * as styles from "./styles";

const Pagination = ({ changePage, page }) => {
  return (
    <div css={styles.PaginationContainer}>
      <button
        css={styles.Button}
        onClick={() => changePage(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft />
        Anterior
      </button>
      <button css={styles.Button} onClick={() => changePage(page + 1)}>
        Próximo
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
