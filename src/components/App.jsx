import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContainerApp, Title, TitleCont } from './App.styled';

export class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string),
    filter: PropTypes.string,
  };

  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts){
      this.setState({contacts: parsedContacts});
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const { number } = this.props;

    const filteredContacts = this.getVisibleContact();

    return (
      <ContainerApp>
        <Title>Phonebook</Title>

        <ContactForm
          contacts={contacts}
          addContact={this.addContact}
          number={number}
        />

        <TitleCont>Contacts:</TitleCont>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContatct={this.deleteContact}
        />
      </ContainerApp>
    );
  }
}
