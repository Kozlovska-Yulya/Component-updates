import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isShow, children, title, onClose }) => {
  if (!isShow) {
    return null;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

export default Expand;
