import React, { useEffect } from 'react';

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    // Side-effect...
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    //If the callback of useEffect(callback) returns a function,
    //then useEffect() considers this as an effect cleanup
    return () => clearTimeout(timeout);
  }, [list]);
  return <div className={`alert alert-${type}`}>{msg}</div>;
};

export default Alert;
