import React, { PropTypes } from 'react';

const Author = ({ firstName, lastName }) => (
  <div className="Author">
    -- {firstName} {lastName}
  </div>
);

Author.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Author;
