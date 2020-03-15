import React from 'react';
import PropTypes from 'prop-types';

function Placeholder({text}) {
  return (
    <div className="Placeholder">
      <p>i'm a placeholder for this: <em>{text}</em></p>
    </div>
  );
}

Placeholder.propTypes = {
  text: PropTypes.string
};

Placeholder.defaultProps = {
  text: 'uhhhh'
}
export default Placeholder;
