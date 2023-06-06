import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, BtnForm, Title } from './ContactForm.styled';


export class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,

  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmat = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
    if (existingContact) {
      alert("Контакт з таким ім'ям вже існує.");
      return;
    }
    this.props.addContact(name.trim(), number.trim());
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmat}>
        <Input 
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <Title>Number</Title>
        <Input 
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        

        <BtnForm type="submit">Add contacts</BtnForm>
      </Form>
    );
  }
}
