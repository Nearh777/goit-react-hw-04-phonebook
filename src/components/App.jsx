import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PropTypes from 'prop-types';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContainerApp, Title, TitleCont } from './App.styled';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const parsContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
  const [contacts, setContacts] = useState(
    () =>
      parsContacts ?? [ ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    if (contacts.some(e => e.name === contact.name)) {
      toast.info(`${contact.name} Контакт з таким ім'ям вже існує.`);
    } else {
      toast.success(`${contact.name} додано до контактів.`);
      return setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const changeFilter = e => {
    setFilter({ filter: e.target.value });
    if (e.target.value.length > 0) {
      toast.warn(`Для запиту знайдено наступні збіги " ${e.target.value} ".`);
    }
  };

  const getVisibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId, name) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    toast.error(`${name} видалено з контактів.`);
  };

  return (
    <ContainerApp>
      <Title>Phonebook</Title>

      <ContactForm
        addContact={addContact}
        
      />
      <ToastContainer />
      <TitleCont>Contacts:</TitleCont>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={getVisibleContact}
        onDeleteContatct={deleteContact}
      />
    </ContainerApp>
  );
};

// export const App = ({number}) => (
//   const

//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = (name, number) => {
//     const { contacts } = this.state;
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState({
//       contacts: [...contacts, newContact],
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.target.value });
//   };

//   getVisibleContact = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts){
//       this.setState({contacts: parsedContacts});
//     }

//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;
//     const { number } = this.props;

//     const filteredContacts = this.getVisibleContact();

//     return (
//       <ContainerApp>
//         <Title>Phonebook</Title>

//         <ContactForm
//           contacts={contacts}
//           addContact={this.addContact}
//           number={number}
//         />

//         <TitleCont>Contacts:</TitleCont>
//         <Filter value={filter} onChange={this.changeFilter} />

//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContatct={this.deleteContact}
//         />
//       </ContainerApp>
//     );
//   }
// )

// propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.string),
//   filter: PropTypes.string,
// };
