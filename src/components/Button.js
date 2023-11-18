import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

function Button({ label, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
