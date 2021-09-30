import React, { useState, createContext } from 'react';

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [idEmployee, setIdEmployee] = useState([]);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  return (
    <EmployeesContext.Provider
      value={{
        idEmployee,
        setIdEmployee,
        lastName,
        setLastName,
        firstName,
        setFirstName,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
