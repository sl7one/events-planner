import { FiPlus } from 'react-icons/fi';
import { AddButtonStyled } from './AddButton.styled';

const AddBtn = () => {
  return (
    <AddButtonStyled>
      <FiPlus />
      <span>Add new event</span>
    </AddButtonStyled>
  );
};

export default AddBtn;