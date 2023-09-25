import React from 'react';

export const Filter = ({ filter, doFilter }) => {
  return (
    <div className='d-flex flex-column'>
      <label htmlFor="contactsfilter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="contactsfilter"
        value={filter}
        onChange={doFilter}
      />
    </div>
  );
};
