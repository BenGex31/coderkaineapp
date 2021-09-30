import React, { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { EmployeesContext } from '../../context/Employees';
import colors from '../../utils/style/colors';

export default function MultipleSelectNative({ employees }) {
  /*const [idEmployee, setIdEmployee] = useState([]);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');*/

  const { setIdEmployee, setLastName, setFirstName, firstName, lastName } =
    useContext(EmployeesContext);

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    //const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        //value.push(options[i].value);
        setIdEmployee(options[i].id);
        let str = options[i].value;
        let words = str.split(' ');
        setLastName(words[0]);

        if (words.length > 2) {
          setFirstName(words[1] + ' ' + words[2]);
        } else {
          setFirstName(words[1]);
        }
      }
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel
          sx={{ color: colors.darkBlue }}
          shrink
          id="select-employees-label"
        >
          Employés
        </InputLabel>
        <Select
          sx={{ color: colors.darkBlue }}
          native
          value={lastName + ' ' + firstName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Employés"
          labelId="select-employees-label"
          id="select-employee"
        >
          <option value="">Selection</option>
          {employees.map((employee) => (
            <option
              key={employee.id}
              id={employee.id}
              value={employee.fullName}
            >
              {employee.fullName}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
