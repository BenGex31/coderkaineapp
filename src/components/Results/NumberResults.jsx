import React from 'react';
import colors from '../../utils/style/colors';

const NumberResults = ({ list }) => {
  return (
    <span
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: 13,
        color: colors.lightBlue,
      }}
    >
      {list.length <= 1
        ? list.length + ' résultat'
        : list.length + ' résultats'}
    </span>
  );
};

export default NumberResults;
