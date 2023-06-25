import { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.createPerson({
      name: this.state.name.trim(),
      number: this.state.number.trim(),
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} autocomplete="off">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          autocomplete="off"
          onChange={this.handleInput}
          value={this.state.name}
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
          onChange={this.handleInput}
          value={this.state.number}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  createPerson: PropTypes.func.isRequired,
};
