import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { nanoid } from 'nanoid'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  componentDidMount() { 
    const localData = localStorage.getItem('contacts')
    if (localData) {
      this.setState({ contacts: JSON.parse(localData)})
    }
   }
componentDidUpdate(_, prevState) { 
  if (prevState.contacts.length !== this.state.contacts.length) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
} 


  createContact = (body) => {
    const isExist = this.state.contacts.find(
      (el) => el.name === body.name
    )
    if (isExist) {
      const allreadyInName = body.name;
      alert(`${allreadyInName} is already in contacts.`);
      return
    }
    this.setState((prev)=>({
      contacts: [...prev.contacts, {
        id: nanoid(),
        ...body,
      }]
    }))
  }
  deleteContact = (id) =>{
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }))
  }
  doFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
    <>
    <section className='m-' style={{width: "350px"}}>
      <div className='card p-5'>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact}/>
      </div>
      <div className='card p-5 mt-2'>
        <h2>Contacts</h2>
        <Filter contacts={this.state.filter} doFilter={this.doFilter}></Filter>
        <ContactList contacts={filterContacts} deleteContact={this.deleteContact}/>
      </div>
    </section>
    </>
    )
  }
}
