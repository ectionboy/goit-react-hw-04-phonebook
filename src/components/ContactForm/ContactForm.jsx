import React, { Component } from 'react';
const defState = {
    name: '',
    number: ''
  }
export class ContactForm extends Component {
  state = defState;
  inputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  formSubmit = (e) =>{
    e.preventDefault()
    this.props.createContact(this.state)
    this.setState(defState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <div>
            <h3>Name</h3>
            <input
              type="text"
              onChange={this.inputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
            />
            <h3>Number</h3>
            <input
              type="tel"
              onChange={this.inputChange}
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              required
            />
          </div>
          <button className='btn btn-primary mt-2' type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
