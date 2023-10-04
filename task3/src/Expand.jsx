import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, title }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleContent = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

Expand.propTypes = {
  isShow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Expand;
