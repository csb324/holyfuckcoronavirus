import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.css';

function Button({ to, children}) {
  return (
    <Link to={ to.path } className="Button">
      { children }
    </Link>
  );
}

Button.propTypes = {
};
export default Button;
