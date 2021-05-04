import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Card = ({ children }) => {
  return <div css={styles.Card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
