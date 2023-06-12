import React from 'react';
import PropTypes from 'prop-types';

import { List, BtnCont, ListItem } from './ContactList.styled';



export const ContactList = ({ contacts, onDeleteContatct }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}          
          <BtnCont
            onClick={() => onDeleteContatct(id)}
            aria-label="Delete contact"
          >
            Delete
          </BtnCont>
        </ListItem>
      ))}
    </List>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// export class ContactList extends Component {

// render() {
//     const { contacts, onDeleteContatct} = this.props;

//     return (

//         <List>
//           {contacts.map((contact) => (
//             <ListItem key={contact.id}>
//              {contact.name}: {contact.number}
//              <BtnCont onClick={() => onDeleteContatct(contact.id)} className='btn btn-outline-primary btn-sm' >Delete</BtnCont>
//              </ListItem>
//           ))}
//         </List>

//     );
//   }
// }
