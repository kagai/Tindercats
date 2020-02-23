import React from 'react';

const SummaryComponent = ({cat}) => {
  return (
    <>
      <footer>
        <strong>{cat.name}</strong>
        <p>{cat.description}</p>
      </footer>
    </>
  );
};

export default SummaryComponent;
