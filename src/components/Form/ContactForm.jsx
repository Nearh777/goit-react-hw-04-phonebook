import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, BtnForm, Title } from './ContactForm.styled';



export const ContactForm = ({addContact}) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');


 

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };


  const handleSubmat = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
    
  };
  
  return(
    <Form onSubmit={handleSubmat}>
      <Input 
        type="text"
        name="name"
        pattern="[\p{L} '-]+"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <Title>Number</Title>
      <Input 
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      

      <BtnForm type="submit">Add contacts</BtnForm>
    </Form>
  );
}


ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,

};






// export class ContactForm extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,

//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmat = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     const { contacts } = this.props;
//     if (name.trim() === '' || number.trim() === '') {
//       return;
//     }
//     const existingContact = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     )
//     if (existingContact) {
//       alert("Контакт з таким ім'ям вже існує.");
//       return;
//     }
//     this.props.addContact(name.trim(), number.trim());
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmat}>
//         <Input 
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={this.handleChange}
//         />
//         <Title>Number</Title>
//         <Input 
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={this.handleChange}
//         />
        

//         <BtnForm type="submit">Add contacts</BtnForm>
//       </Form>
//     );
//   }
// }
 // const handleChange = ({target: {value, name}}) => {
  //   if(name === 'name')setName(value);
  //   if(name === 'number')setNumber(value)
  // };



