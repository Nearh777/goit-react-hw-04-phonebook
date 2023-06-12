import React from 'react';

import {List, BtnCont} from './ContactList.styled'


export const ContactList = ({contacts, onDeleteContatct}) => {



  return (
    <List>
          {contacts.map((contact) => (
            <li key={contact.id}>
             {contact.name}: {contact.number}
             <BtnCont onClick={() => onDeleteContatct(contact.id)} className='btn btn-outline-primary btn-sm' >Delete</BtnCont>
             </li>
          ))}
        </List>
  )
}

// export class ContactList extends Component {

// render() {
//     const { contacts, onDeleteContatct} = this.props;

//     return (
      
//         <List>
//           {contacts.map((contact) => (
//             <li key={contact.id}>
//              {contact.name}: {contact.number}
//              <BtnCont onClick={() => onDeleteContatct(contact.id)} className='btn btn-outline-primary btn-sm' >Delete</BtnCont>
//              </li>
//           ))}
//         </List>
      
//     );
//   }
// }