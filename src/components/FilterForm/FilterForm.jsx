import PropTypes from 'prop-types';

import { Container, Label, Input } from './FilterForm.styled';

const FilterForm = ({ setFilter }) => {
  return (
    <Container>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="personName"
        id="personName"
        autocomplete="off"
        onChange={setFilter}
        required
      />
    </Container>
  );
};

export default FilterForm;

FilterForm.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
