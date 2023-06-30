import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ createPerson }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target }) => {
    const { name: inputName, value } = target;

    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(name, value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    createPerson({
      name: name.trim(),
      number: number.trim(),
    });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autocomplete="off">
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autocomplete="off"
        onChange={handleInput}
        value={name}
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        title="Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +"
        placeholder="+ ..."
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        autocomplete="off"
        onChange={handleInput}
        value={number}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  createPerson: PropTypes.func.isRequired,
};
