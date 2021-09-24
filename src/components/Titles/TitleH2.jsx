import React from 'react';
import colors from '../../utils/style/colors';

const TitleH2 = ({ text }) => {
  return (
    <h2
      style={{
        fontSize: 16,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        color: colors.darkBlue,
      }}
    >
      {text}
    </h2>
  );
};

export default TitleH2;
