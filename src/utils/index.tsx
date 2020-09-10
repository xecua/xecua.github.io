import React from 'react';

export const breakText = (text: string): JSX.Element[] =>
  text.split('\n').map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));
