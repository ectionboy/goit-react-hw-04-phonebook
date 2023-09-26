import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length) {
      setContacts(JSON.parse(localData));
    }
  },[]);
  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
useEffect(() => {
  setFilter(contacts)

}, [contacts]);
  const createContact = body => {
    const isExist = contacts.find(el => el.name === body.name);
    if (isExist) {
      const allreadyInName = body.name;
      alert(`${allreadyInName} is already in contacts.`);
      return;
    }
    const newContact = {
      ...body,
      id: nanoid(),
    }
    setContacts((prev) => [newContact, ...prev])
  };
  
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((el) => el.id !== id))
  };
  const doFilter = (filterValue) => {
    console.log(filterValue.target.value)
    setFilter(
      contacts.filter((el)=>(
        el.name.toLowerCase().includes(filterValue.target.value.toLowerCase())
      ))
    )
  }

  // const doFilter = ({ target: { value } }) => {
  //   this.setState({ filter: value });
  // };
  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <section className="m-" style={{ width: '350px' }}>
      <div className="card p-5">
        <h1>Phonebook</h1>
        <ContactForm createContact={createContact} />
      </div>
      <div className="card p-5 mt-2">
        <h2>Contacts</h2>
        <Filter contacts={filter ?? contacts} doFilter={doFilter}></Filter>
        <ContactList contacts={filter} deleteContact={deleteContact} />
      </div>
    </section>
  );
};
export default App;

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   }
//   componentDidMount() {
//     const localData = localStorage.getItem('contacts')
//     if (localData) {
//       this.setState({ contacts: JSON.parse(localData)})
//     }
//    }
// componentDidUpdate(_, prevState) {
//   if (prevState.contacts.length !== this.state.contacts.length) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//   }
// }

//   createContact = (body) => {
//     const isExist = this.state.contacts.find(
//       (el) => el.name === body.name
//     )
//     if (isExist) {
//       const allreadyInName = body.name;
//       alert(`${allreadyInName} is already in contacts.`);
//       return
//     }
//     this.setState((prev)=>({
//       contacts: [...prev.contacts, {
//         id: nanoid(),
//         ...body,
//       }]
//     }))
//   }
//   deleteContact = (id) =>{
//     this.setState((prev) => ({
//       contacts: prev.contacts.filter((el) => el.id !== id),
//     }))
//   }
//   doFilter = ({ target: { value } }) => {
//     this.setState({ filter: value });
//   };
//   render() {
//     const filterContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//     return (
//     <>
//     <section className='m-' style={{width: "350px"}}>
//       <div className='card p-5'>
//         <h1>Phonebook</h1>
//         <ContactForm createContact={this.createContact}/>
//       </div>
//       <div className='card p-5 mt-2'>
//         <h2>Contacts</h2>
//         <Filter contacts={this.state.filter} doFilter={this.doFilter}></Filter>
//         <ContactList contacts={filterContacts} deleteContact={this.deleteContact}/>
//       </div>
//     </section>
//     </>
//     )
//   }
// }
