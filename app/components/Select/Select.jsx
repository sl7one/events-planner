import { SelectInput } from './Select.styled';
const Select = ({options,holder}) => {
  
  return (
    <SelectInput
      classNamePrefix="Filter"
      placeholder={holder}
      options={options}
      //   onChange={}
    />
  );
};

export default Select;