import React from 'react';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li className="my-2" key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// export class ContactList extends Component {
//     state = {
//     }
//   render() {
//     return (
//         <>
//         <ul>
//             {
//                 this.props.contacts.map(contact =>(
//                     <li className='my-2' key={contact.id}>
//                         <p>{contact.name}: {contact.number}</p>
//                         <button className='btn btn-secondary' onClick={() => this.props.deleteContact(contact.id)}>Delete</button>
//                     </li>
//                 ))
//             }
//         </ul>
//     </>
//     )
//   }
// }
// import React from "react";

// export const ContactList = ({contacts, deleteContact}) => {
//     console.log(contacts)
//     return(
//         <>
//             <ul>
//                 {
//                     contacts.map(contact =>(
//                         <li key={contact.id}>
//                             <p>{contact.name}</p>
//                             <p>{contact.number}</p>
//                             <button onChange={deleteContact(contact.id)}>Delete</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }
